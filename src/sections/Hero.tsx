import { Button } from '../components/Button'
import { Portrait } from '../components/Portrait'
import { cn } from '../lib/cn'
import type { Profile } from '../types/content'
import styles from './Hero.module.css'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className={styles.wrap} id="about" aria-labelledby="hero-headline">
      <div className={cn('container', styles.inner)}>
        <div className={styles.copy}>
          <h1 id="hero-headline" className={styles.headline}>
            {profile.headline}
          </h1>
          <p className={styles.greeting}>{profile.locations}</p>
          <p className={styles.sub}>{profile.intro}</p>
          <div className={styles.ctas}>
            <Button
              variant="primary"
              href={profile.resumeUrl}
              disabled={!profile.resumeAvailable}
              download={profile.resumeFilename}
            >
              Download resume
            </Button>
            <Button variant="secondary" href="#contact">
              Get in touch
            </Button>
          </div>
        </div>

        <Portrait
          className={styles.portrait}
          src="/kanika.jpeg"
          alt={`Portrait of ${profile.name}`}
          priority
        />
      </div>
    </section>
  )
}
