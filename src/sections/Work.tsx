import { CaseCard } from '../components/CaseCard'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '../lib/cn'
import type { Engagement, Section } from '../types/content'
import styles from './Work.module.css'

export function Work({ data }: { data: Section<Engagement> }) {
  return (
    <section className={styles.wrap} id="engagements" aria-labelledby="engagements-title">
      <div className={cn('container', styles.inner)}>
        <SectionHeading
          titleId="engagements-title"
          eyebrow={data.eyebrow}
          title={data.title}
          meta={data.count}
        />
        <ul className={styles.list}>
          {data.items.map((engagement) => (
            <CaseCard key={engagement.id} engagement={engagement} />
          ))}
        </ul>
      </div>
    </section>
  )
}
