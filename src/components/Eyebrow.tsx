import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import styles from './Eyebrow.module.css'

interface EyebrowProps {
  children: ReactNode
  tone?: 'default' | 'onDark' | 'muted'
  className?: string
  id?: string
}

export function Eyebrow({ children, tone = 'default', className, id }: EyebrowProps) {
  return (
    <span
      id={id}
      className={cn(styles.eyebrow, tone !== 'default' && styles[tone], className)}
    >
      {children}
    </span>
  )
}
