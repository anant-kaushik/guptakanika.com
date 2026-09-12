import { cn } from '../lib/cn'
import { Eyebrow } from './Eyebrow'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  meta?: string
  /** id for the <h2>, used by the section's aria-labelledby */
  titleId: string
  size?: 'default' | 'small'
  eyebrowTone?: 'default' | 'muted'
}

export function SectionHeading({
  eyebrow,
  title,
  meta,
  titleId,
  size = 'default',
  eyebrowTone = 'default',
}: SectionHeadingProps) {
  return (
    <div className={cn(styles.heading, size === 'small' && styles.small)}>
      <div className={styles.group}>
        <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      </div>
      {meta ? <span className={styles.meta}>{meta}</span> : null}
    </div>
  )
}
