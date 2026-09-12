import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'onDark'

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean }

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', children, className, ...rest } = props
  const classes = cn(styles.button, styles[variant], className)

  if ('href' in rest && rest.href !== undefined) {
    const { href, disabled, ...anchorRest } = rest as LinkProps

    // A disabled anchor is not a real thing. Render a button that stays
    // focusable and is announced as unavailable — `disabled` would drop it
    // out of the tab order, hiding the resume CTA from keyboard users.
    if (disabled) {
      return (
        <button
          type="button"
          className={classes}
          aria-disabled="true"
          onClick={(event) => event.preventDefault()}
        >
          {children}
        </button>
      )
    }

    return (
      <a className={classes} href={href} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as ButtonProps
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
