import { Button } from '../components/Button'
import { Eyebrow } from '../components/Eyebrow'
import { cn } from '../lib/cn'
import type { Profile } from '../types/content'
import styles from './Contact.module.css'

interface ContactProps {
  profile: Profile
  /** Fires on the email CTA — the easter egg is hidden behind it. */
  onEmailActivate?: () => void
}

export function Contact({ profile, onEmailActivate }: ContactProps) {
  const { contact, email } = profile

  return (
    <section className={styles.wrap} id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.panel}>
          <Eyebrow tone="onDark">{contact.eyebrow}</Eyebrow>
          <h2 id="contact-heading" className={styles.heading}>
            {contact.heading}
          </h2>
          <p className={styles.body}>{contact.body}</p>
          <div className={styles.action}>
            <Button
              variant="onDark"
              href={`mailto:${email}`}
              className={cn(styles.email)}
              onClick={onEmailActivate}
            >
              {email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
