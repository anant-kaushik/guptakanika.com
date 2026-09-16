import { CredentialItem } from '../components/CredentialItem'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '../lib/cn'
import type { Credential, Section } from '../types/content'
import styles from './Credentials.module.css'

export function Credentials({ data }: { data: Section<Credential> }) {
  return (
    <section className={styles.wrap} id="education" aria-labelledby="education-title">
      <div className="container">
        <div className={cn(styles.panel)}>
          <SectionHeading
            titleId="education-title"
            eyebrow={data.eyebrow}
            title={data.title}
            size="small"
            eyebrowTone="muted"
          />
          <ul className={styles.list}>
            {data.items.map((item) => (
              <CredentialItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
