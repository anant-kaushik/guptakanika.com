import type { Credential } from '../types/content'
import styles from './CredentialItem.module.css'

export function CredentialItem({ item }: { item: Credential }) {
  return (
    <li className={styles.item}>
      <p className={styles.when}>{item.when}</p>
      <h3 className={styles.qualification}>{item.qualification}</h3>
      <p className={styles.institution}>{item.institution}</p>
      <p className={styles.detail}>{item.detail}</p>
    </li>
  )
}
