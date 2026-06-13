import { useEffect } from 'react';
import type { RouteMeta } from './routes';
import { absoluteUrl } from './siteConfig';
import { ldDocument } from './structuredData';

/**
 * Keeps the document head in sync during client-side navigation.
 *
 * The initial values are baked into the static HTML by scripts/prerender.mjs,
 * so crawlers and social scrapers get correct per-page metadata without
 * running JS. This component updates the SAME tags by selector (creating them
 * only if absent) so single-page navigation never produces duplicate tags.
 */

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string): void {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object): void {
  if (typeof document === 'undefined') return;
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({ meta }: { meta: RouteMeta }) {
  useEffect(() => {
    const canonical = absoluteUrl(meta.path);
    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertLink('canonical', canonical);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonical);
    if (meta.jsonLd.length > 0) {
      upsertJsonLd('ld-page', ldDocument(meta.jsonLd));
    }
  }, [meta]);

  return null;
}
