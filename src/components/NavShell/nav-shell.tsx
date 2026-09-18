'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './nav-shell.module.css'

export function NavShell({ children }: { children: ReactNode }) {
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const [solid, setSolid] = useState(false)

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

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <nav className={solid ? `${styles.nav} ${styles.solid}` : styles.nav}>{children}</nav>
    </>
  )
}
