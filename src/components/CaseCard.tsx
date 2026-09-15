import type { Engagement, EngagementAccent } from '../types/content'
import { ArrowRight } from './icons/ArrowRight'
import { Tag } from './Tag'
import { cn } from '../lib/cn'
import styles from './CaseCard.module.css'

const accentClass: Record<EngagementAccent, string> = {
  'sage-deep': styles.accentSageDeep,
  'photo-mauve': styles.accentPhotoMauve,
  bark: styles.accentBark,
  'slate-blend': styles.accentSlateBlend,
}

export function CaseCard({ engagement }: { engagement: Engagement }) {
  const { year, role, title, description, tags, accent, linkLabel, href } = engagement

  return (
    <li className={styles.card}>
      <div
        className={cn(styles.thumb, accent && accentClass[accent])}
        aria-hidden="true"
      />
      <div className={styles.body}>
        <p className={styles.meta}>
          <span>{year}</span>
          <span className={styles.separator} aria-hidden="true">
            ·
          </span>
          <span>{role}</span>
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        {tags.length > 0 ? (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        ) : null}
        {linkLabel && href ? (
          <a className={styles.link} href={href}>
            {linkLabel}
            <ArrowRight className={styles.arrow} />
            <span className="visually-hidden"> — {title}</span>
          </a>
        ) : null}
      </div>
    </li>
  )
}
