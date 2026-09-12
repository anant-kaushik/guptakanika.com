export interface Engagement {
  id: string
  year: string
  role: string
  title: string
  description: string
  tags: string[]
  linkLabel?: string
  href?: string
}

export interface Role {
  id: string
  years: string
  role: string
  company: string
  description: string
}

export interface Credential {
  id: string
  when: string
  qualification: string
  institution: string
  detail: string
}

export interface LinkItem {
  label: string
  href: string
}

export interface Profile {
  name: string
  locations: string
  headline: string
  intro: string
  email: string
  resumeUrl: string
  resumeFilename: string
  resumeAvailable: boolean
  contact: {
    eyebrow: string
    heading: string
    body: string
  }
  copyright: string
  nav: LinkItem[]
  socials: LinkItem[]
}

export interface Section<T> {
  eyebrow: string
  title: string
  count?: string
  items: T[]
}
