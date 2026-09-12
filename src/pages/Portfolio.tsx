import { credentials, engagements, experience, profile } from '../content'
import { Contact } from '../sections/Contact'
import { Credentials } from '../sections/Credentials'
import { Experience } from '../sections/Experience'
import { Footer } from '../sections/Footer'
import { Hero } from '../sections/Hero'
import { Nav } from '../sections/Nav'
import { Work } from '../sections/Work'

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Nav name={profile.name} links={profile.nav} />
      <main id="main">
        <Hero profile={profile} />
        <Work data={engagements} />
        <Experience data={experience} />
        <Credentials data={credentials} />
        <Contact profile={profile} />
      </main>
      <Footer copyright={profile.copyright} socials={profile.socials} />
    </>
  )
}
