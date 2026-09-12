import type { Role } from '../types/content'
import styles from './ExperienceRow.module.css'

export function ExperienceRow({ item }: { item: Role }) {
  return (
    <li className={styles.row}>
      <p className={styles.years}>{item.years}</p>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.role}>{item.role}</h3>
          <span className={styles.separator} aria-hidden="true">
            ·
          </span>
          <span className={styles.company}>{item.company}</span>
        </div>
        <p className={styles.desc}>{item.description}</p>
      </div>
    </li>
  )
}
