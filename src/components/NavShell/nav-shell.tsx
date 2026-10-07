'use client'

import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './nav-shell.module.css'

export function NavShell({ children }: { children: ReactNode }) {
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      setSolid(!(entries[0]?.isIntersecting ?? true))
    })

    io.observe(el)

    return () => {
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const handleNavClick = (e: MouseEvent<HTMLElement>) => {
    if (open && (e.target as Element).closest('a')) setOpen(false)
  }

  const className = [styles.nav, solid && styles.solid].filter(Boolean).join(' ')

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <nav className={className} data-open={open} onClick={handleNavClick}>
        {children}
        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>
    </>
  )
}
