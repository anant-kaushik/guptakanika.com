import type { Engagement } from '../types/content'
import { ArrowRight } from './icons/ArrowRight'
import { Tag } from './Tag'
import styles from './CaseCard.module.css'

export function CaseCard({ engagement }: { engagement: Engagement }) {
  const { year, role, title, description, tags, linkLabel, href } = engagement

  return (
    <li className={styles.card}>
      <div className={styles.thumb} aria-hidden="true" />
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
