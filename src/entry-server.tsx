import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App';
import { ROUTES } from './seo/routes';
import { SITE, absoluteUrl } from './seo/siteConfig';
import { ldDocument } from './seo/structuredData';

/** Render the app to an HTML string for a given route path. */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  );
}

/** Flattened, prerender-ready metadata for every route. */
export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  canonical: string;
  /** Serialized page-specific JSON-LD document, or null if none. */
  jsonLd: string | null;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export const prerenderRoutes: PrerenderRoute[] = ROUTES.map((r) => ({
  path: r.path,
  title: r.title,
  description: r.description,
  canonical: absoluteUrl(r.path),
  jsonLd: r.jsonLd.length > 0 ? JSON.stringify(ldDocument(r.jsonLd)) : null,
  lastmod: r.lastmod,
  changefreq: r.changefreq,
  priority: r.priority,
}));

export const siteUrl = SITE.url;
