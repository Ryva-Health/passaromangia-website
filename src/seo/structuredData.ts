/**
 * Schema.org / JSON-LD builders. Output is serialized into
 * <script type="application/ld+json"> blocks — by the prerender script for the
 * static HTML and by the Seo component for client-side navigation.
 */
import { SITE, absoluteUrl } from './siteConfig';

export type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Publisher organization. Referenced by other entities via `@id`. */
export function organization(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.logo),
    },
    sameAs: [...SITE.socials],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.supportEmail,
      availableLanguage: ['English'],
    },
  };
}

/** The website entity. */
export function website(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

/** Sitewide graph embedded statically on every page. */
export function siteGraph(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(), website()],
  };
}

/** The Ryva mobile app. No aggregateRating — never fabricate review data. */
export function softwareApplication(description: string): JsonLd {
  return {
    '@type': 'MobileApplication',
    name: SITE.name,
    operatingSystem: 'iOS 17.0 or later',
    applicationCategory: 'HealthApplication',
    description,
    url: SITE.url,
    downloadUrl: SITE.appStoreUrl,
    installUrl: SITE.appStoreUrl,
    softwareVersion: '1.0',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    screenshot: SITE.appScreenshots.map((s) => absoluteUrl(s)),
    publisher: { '@id': ORG_ID },
    image: absoluteUrl(SITE.ogImage),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPage(items: FaqItem[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumb(crumbs: Crumb[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export interface WebPageInput {
  name: string;
  path: string;
  description: string;
  /** ISO 8601 date the content was last updated. */
  dateModified?: string;
}

export function webPage({ name, path, description, dateModified }: WebPageInput): JsonLd {
  const page: JsonLd = {
    '@type': 'WebPage',
    name,
    url: absoluteUrl(path),
    description,
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-US',
  };
  if (dateModified) page.dateModified = dateModified;
  return page;
}

/** Wrap one or more entities in a JSON-LD document with @context. */
export function ldDocument(entities: JsonLd | JsonLd[]): JsonLd {
  const list = Array.isArray(entities) ? entities : [entities];
  if (list.length === 1) {
    return { '@context': 'https://schema.org', ...list[0] };
  }
  return { '@context': 'https://schema.org', '@graph': list };
}
