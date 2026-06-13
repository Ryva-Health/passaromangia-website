/**
 * Static prerender step (runs after `vite build` + the SSR build).
 *
 * For every route it:
 *   1. renders the React tree to HTML (so crawlers get real content),
 *   2. injects per-route <title>/description/canonical/OG + JSON-LD into <head>,
 *   3. writes dist/<route>/index.html.
 * It also generates dist/sitemap.xml from the same route metadata.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, prerenderRoutes } from '../dist-ssr/entry-server.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const templatePath = join(distDir, 'index.html');

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s) => escapeHtml(s).replace(/"/g, '&quot;');
// Prevent a "</script>" inside JSON-LD from closing the script element early.
const escapeJsonLd = (s) => s.replace(/</g, '\\u003c');

function replaceOrThrow(html, regex, replacement, label) {
  if (!regex.test(html)) {
    throw new Error(`prerender: could not find ${label} in dist/index.html`);
  }
  return html.replace(regex, () => replacement);
}

function buildHtml(template, route) {
  const title = escapeHtml(route.title);
  const desc = escapeAttr(route.description);
  const canonical = escapeAttr(route.canonical);

  let html = template;
  html = replaceOrThrow(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, '<title>');
  html = replaceOrThrow(
    html,
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${desc}" />`,
    'description meta',
  );
  html = replaceOrThrow(
    html,
    /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
    'canonical link',
  );
  html = replaceOrThrow(
    html,
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`,
    'og:title meta',
  );
  html = replaceOrThrow(
    html,
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${desc}" />`,
    'og:description meta',
  );
  html = replaceOrThrow(
    html,
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`,
    'og:url meta',
  );

  // React 19 automatically preloads eager images (logo, hero) during SSR and
  // correctly skips loading="lazy" ones, so we only inject page JSON-LD here.
  if (route.jsonLd) {
    const ld = `<script type="application/ld+json" id="ld-page">${escapeJsonLd(route.jsonLd)}</script>`;
    html = html.replace('</head>', `    ${ld}\n  </head>`);
  }

  const appHtml = render(route.path);
  html = replaceOrThrow(
    html,
    /<div id="root">\s*<\/div>/,
    `<div id="root">${appHtml}</div>`,
    'root container',
  );

  return html;
}

function outputPath(routePath) {
  if (routePath === '/') return templatePath;
  return join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

const template = readFileSync(templatePath, 'utf-8');

for (const route of prerenderRoutes) {
  const out = outputPath(route.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buildHtml(template, route));
  console.log(`  prerendered ${route.path.padEnd(16)} -> ${out.slice(root.length + 1)}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes
  .map(
    (r) => `  <url>
    <loc>${r.canonical.replace(/&/g, '&amp;')}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
console.log(`  generated sitemap.xml (${prerenderRoutes.length} urls)`);
