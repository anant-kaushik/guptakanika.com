/* Canonical origin and search-engine metadata. Kept separate from profile.json
   because these are deployment facts, not résumé content — changing the domain
   should not mean editing the copy file. */

export const SITE_URL = 'https://guptakanika.com'

export const SEO = {
  title: 'Kanika Gupta — Transaction Advisory & Financial Due Diligence',
  description:
    'Kanika Gupta is a transaction advisory professional in Seattle specializing in financial due diligence, quality of earnings and carve-outs. CPA candidate (Washington State) with cross-border US/Canada deal experience.',
  ogImage: '/kanika.jpeg',
  ogImageAlt: 'Portrait of Kanika Gupta',
  locale: 'en_US',
} as const
