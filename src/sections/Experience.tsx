import { ExperienceRow } from '../components/ExperienceRow'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '../lib/cn'
import type { Role, Section } from '../types/content'
import styles from './Experience.module.css'

export function Experience({ data }: { data: Section<Role> }) {
  return (
    <section className={styles.wrap} id="experience" aria-labelledby="experience-title">
      <div className={cn('container', styles.inner)}>
        <SectionHeading
          titleId="experience-title"
          eyebrow={data.eyebrow}
          title={data.title}
        />
        <ul className={styles.rows}>
          {data.items.map((item) => (
            <ExperienceRow key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}
