import { cn } from '../lib/cn'
import type { LinkItem } from '../types/content'
import styles from './Footer.module.css'

interface FooterProps {
  copyright: string
  socials: LinkItem[]
}

export function Footer({ copyright, socials }: FooterProps) {
  return (
    <footer className={styles.wrap}>
      <div className={cn('container', styles.inner)}>
        <p className={styles.copyright}>{copyright}</p>
        <ul className={styles.social}>
          {socials.map((social) => {
            const external = social.href.startsWith('http')
            return (
              <li key={social.label}>
                <a
                  className={styles.link}
                  href={social.href}
                  {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {social.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
