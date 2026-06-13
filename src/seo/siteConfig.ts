/**
 * Single source of truth for site-wide SEO constants.
 * Used by the Seo component (client), the static index.html, the prerender
 * script, and the sitemap generator. Keep values in sync with index.html.
 */
export const SITE = {
  name: 'Ryva',
  legalName: 'Passaro Technologies LLC',
  /** Canonical origin, no trailing slash. Must match the production domain. */
  url: 'https://www.ryva.health',
  locale: 'en_US',
  themeColor: '#4CAF50',
  /** Default social-share image (absolute path under `url`). */
  ogImage: '/og-image.png',
  ogImageWidth: 1024,
  ogImageHeight: 1024,
  ogImageAlt: 'Ryva — AI food scanner for personalized health scores',
  twitterHandle: '@takingprophets',
  appStoreUrl: 'https://apps.apple.com/app/ryva/id6761320113',
  supportEmail: 'support@ryva.health',
  /** Brand logo used in structured data. */
  logo: '/ryva-logo-icon.png',
  /** Verified social profiles (used for Organization `sameAs`). */
  socials: [
    'https://x.com/takingprophets',
    'https://instagram.com/takingprophets',
    'https://tiktok.com/@takingprophets',
  ],
  /** App product screenshots, surfaced in SoftwareApplication structured data. */
  appScreenshots: [
    '/screenshots/scan-result.webp',
    '/screenshots/product-score.webp',
    '/screenshots/ai-chat.webp',
    '/screenshots/health-context.webp',
  ],
} as const;

/** Prefix a root-relative path with the canonical origin. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`;
}
