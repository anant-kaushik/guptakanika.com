import { credentials, experience, profile } from '../content'
import { SEO, SITE_URL } from '../content/site'

/* schema.org JSON-LD. This is what lets a search engine treat "Kanika Gupta"
   as a person entity — name, job title, employers, credentials — rather than
   as an anonymous page that happens to contain the string. */

const PERSON_ID = `${SITE_URL}/#kanika-gupta`

/** "BDO · Calgary" -> { name: 'BDO', location: 'Calgary' } */
function splitCompany(company: string) {
  const [name, location] = company.split('·').map((part) => part.trim())
  return { name, location }
}

function person() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    givenName: 'Kanika',
    familyName: 'Gupta',
    url: SITE_URL,
    image: `${SITE_URL}${SEO.ogImage}`,
    email: `mailto:${profile.email}`,
    jobTitle: 'Transaction Advisory Associate',
    description: profile.intro,
    knowsAbout: [
      'Financial Due Diligence',
      'Quality of Earnings',
      'Transaction Advisory',
      'Carve-Outs',
      'EBITDA Normalization',
      'Mergers and Acquisitions',
      'Audit and Assurance',
      'US GAAP',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    sameAs: profile.socials
      .filter((social) => social.href.startsWith('http'))
      .map((social) => social.href),
    worksFor: splitCompanyOrg(experience.items[0]?.company),
    alumniOf: credentials.items
      .filter((item) => item.institution && item.qualification !== 'CPA Candidate')
      .map((item) => ({
        '@type': 'EducationalOrganization',
        name: item.institution,
      })),
    hasCredential: credentials.items.map((item) => ({
      '@type': 'EducationalOccupationalCredential',
      name: `${item.qualification}${item.institution ? `, ${item.institution}` : ''}`,
      credentialCategory: item.qualification.includes('CPA') ? 'Professional Certification' : 'degree',
    })),
  }
}

function splitCompanyOrg(company: string | undefined) {
  if (!company) return undefined
  const { name, location } = splitCompany(company)
  return {
    '@type': 'Organization',
    name,
    ...(location ? { address: { '@type': 'PostalAddress', addressLocality: location } } : {}),
  }
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${profile.name} — Transaction Advisory`,
    description: SEO.description,
    inLanguage: 'en-US',
    publisher: { '@id': PERSON_ID },
  }
}

function profilePage() {
  return {
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SEO.title,
    description: SEO.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: `${SITE_URL}${SEO.ogImage}`,
  }
}

export function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [person(), website(), profilePage()],
  }
}
