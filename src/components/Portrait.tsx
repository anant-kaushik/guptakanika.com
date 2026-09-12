import { cn } from '../lib/cn'
import styles from './Portrait.module.css'

interface PortraitProps {
  src: string
  alt: string
  variant?: 'feathered' | 'avatar'
  className?: string
  /** Above the fold in the hero — let it load eagerly. */
  priority?: boolean
}

export function Portrait({
  src,
  alt,
  variant = 'feathered',
  className,
  priority = false,
}: PortraitProps) {
  return (
    <div className={cn(styles.portrait, variant === 'avatar' && styles.avatar, className)}>
      <img
        className={styles.photo}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div className={styles.feather} aria-hidden="true" />
    </div>
  )
}
