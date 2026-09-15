import { useEffect, useState } from 'react'
import { MenuIcon } from '../components/icons/Menu'
import { cn } from '../lib/cn'
import type { LinkItem } from '../types/content'
import styles from './Nav.module.css'

interface NavProps {
  name: string
  links: LinkItem[]
}

export function Nav({ name, links }: NavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile panel when the viewport grows past the breakpoint,
  // otherwise it stays mounted and invisible with focusable links inside.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 880px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={cn(styles.wrap, scrolled && styles.scrolled)}>
      <nav className={cn('container', styles.inner)} aria-label="Main">
        <a className={styles.brand} href="#top">
          <img
            className={styles.avatar}
            src="/kanika.jpeg"
            alt=""
            width={28}
            height={28}
            decoding="async"
          />
          {name}
        </a>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {open ? (
        <div id="nav-panel" className={styles.panel}>
          <ul className={cn('container', styles.panelList)}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.panelLink}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
