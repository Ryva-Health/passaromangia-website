/**
 * Per-route SEO metadata — the single source of truth consumed by:
 *  - <Seo> (client-side, updates the document head on navigation)
 *  - scripts/prerender.mjs (writes static <head> + JSON-LD per route)
 *  - the sitemap generator (paths, priority, changefreq, lastmod)
 */
import { faqs } from '../components/FAQ';
import { supportFaqs } from '../components/SupportPage';
import type { JsonLd } from './structuredData';
import {
  breadcrumb,
  faqPage,
  softwareApplication,
  webPage,
} from './structuredData';

export type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface RouteMeta {
  /** Root-relative path, e.g. "/pricing". Home is "/". */
  path: string;
  /** Full <title> text. */
  title: string;
  /** Meta description (~150–160 chars). */
  description: string;
  /** Page-specific structured-data entities (without @context). */
  jsonLd: JsonLd[];
  changefreq: ChangeFreq;
  priority: number;
  /** ISO 8601 date the page content last changed. */
  lastmod: string;
}

const HOME_DESCRIPTION =
  'Scan any food or cosmetic barcode for a health score personalized to your dietary goals. Uncover hidden additives and get AI nutrition advice — free on iOS.';

const home: RouteMeta = {
  path: '/',
  title: 'Ryva — AI Food Scanner for Personalized Health Scores',
  description: HOME_DESCRIPTION,
  changefreq: 'weekly',
  priority: 1.0,
  lastmod: '2026-06-13',
  jsonLd: [
    softwareApplication(HOME_DESCRIPTION),
    faqPage(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
  ],
};

const pricing: RouteMeta = {
  path: '/pricing',
  title: 'Pricing — Free & Premium Plans | Ryva',
  description:
    'Ryva is free forever with unlimited barcode scanning and health scores. Go Premium ($19.99/yr) for the AI nutrition coach, lab-result analysis, and smart shopping.',
  changefreq: 'monthly',
  priority: 0.9,
  lastmod: '2026-06-13',
  jsonLd: [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ]),
    {
      '@type': 'Product',
      name: 'Ryva Premium',
      description:
        'Ryva Premium unlocks the AI nutrition coach, lab-result and health-document analysis, personalized scoring, smart shopping lists, and unlimited scan history.',
      brand: { '@type': 'Brand', name: 'Ryva' },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '19.99',
        offerCount: 2,
      },
    },
  ],
};

const partners: RouteMeta = {
  path: '/partners',
  title: 'Partner Program — Earn $10 Per Referral | Ryva',
  description:
    'Join the Ryva Partner Program. Earn $10 for every subscriber you refer and give your audience a free Premium trial. Apply in minutes.',
  changefreq: 'monthly',
  priority: 0.8,
  lastmod: '2026-06-13',
  jsonLd: [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Partners', path: '/partners' },
    ]),
    webPage({
      name: 'Ryva Partner Program',
      path: '/partners',
      description:
        'Earn $10 for every subscriber you refer to Ryva, plus give your audience a free Premium trial.',
    }),
  ],
};

const support: RouteMeta = {
  path: '/support',
  title: 'Support & Help Center | Ryva',
  description:
    'Get help with Ryva: scanning products, understanding health scores, managing your subscription, and data privacy. Email support@ryva.health.',
  changefreq: 'monthly',
  priority: 0.6,
  lastmod: '2026-06-13',
  jsonLd: [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Support', path: '/support' },
    ]),
    faqPage(supportFaqs),
  ],
};

const privacy: RouteMeta = {
  path: '/privacy',
  title: 'Privacy Policy | Ryva',
  description:
    'How Ryva collects, uses, and protects your data. Your health data stays on your device — we never sell your personal information.',
  changefreq: 'yearly',
  priority: 0.4,
  lastmod: '2026-04-11',
  jsonLd: [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ]),
    webPage({
      name: 'Privacy Policy',
      path: '/privacy',
      description: 'How Ryva collects, uses, and protects your data.',
      dateModified: '2026-04-11',
    }),
  ],
};

const terms: RouteMeta = {
  path: '/terms',
  title: 'Terms of Service | Ryva',
  description:
    'The terms governing your use of the Ryva app, including medical and allergy disclaimers, eligibility, subscriptions, and your rights.',
  changefreq: 'yearly',
  priority: 0.4,
  lastmod: '2026-04-10',
  jsonLd: [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms' },
    ]),
    webPage({
      name: 'Terms of Service',
      path: '/terms',
      description: 'The terms governing your use of the Ryva app.',
      dateModified: '2026-04-10',
    }),
  ],
};

const partnerTerms: RouteMeta = {
  path: '/partner-terms',
  title: 'Partner Program Agreement | Ryva',
  description:
    'The agreement for the Ryva Partner Program: commission structure, payment terms, partner conduct, and termination.',
  changefreq: 'yearly',
  priority: 0.3,
  lastmod: '2026-03-30',
  jsonLd: [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Partners', path: '/partners' },
      { name: 'Partner Program Agreement', path: '/partner-terms' },
    ]),
    webPage({
      name: 'Partner Program Agreement',
      path: '/partner-terms',
      description: 'The agreement governing the Ryva Partner Program.',
      dateModified: '2026-03-30',
    }),
  ],
};

export const ROUTES: RouteMeta[] = [
  home,
  pricing,
  partners,
  support,
  privacy,
  terms,
  partnerTerms,
];

const ROUTE_BY_PATH = new Map(ROUTES.map((r) => [r.path, r]));

/** Look up route metadata by path, falling back to the home route. */
export function getRouteMeta(path: string): RouteMeta {
  const normalized =
    path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  return ROUTE_BY_PATH.get(normalized) ?? home;
}
