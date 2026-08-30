'use client'

import React from 'react'
import { useReveal } from '@/hooks/use-reveal'
import styles from './reveal.module.css'

type RevealStyle = React.CSSProperties & Record<`--${string}`, string>

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  style?: React.CSSProperties
  rootMargin?: string
}

export function Reveal({ children, className, delay = 0, style, rootMargin }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>({ rootMargin })

  const revealStyle: RevealStyle = { ...style, '--reveal-delay': `${delay}ms` }

  return (
    <div
      ref={ref}
      className={[styles.start, visible ? styles.visible : '', className].filter(Boolean).join(' ')}
      style={revealStyle}
    >
      {children}
    </div>
  )
}
