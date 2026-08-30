'use client'

import { useEffect, useState, useRef } from 'react'

type RevealOptions = {
  rootMargin?: string
}

export function useReveal<T extends HTMLElement>({ rootMargin = '0px 0px -5% 0px' }: RevealOptions = {}) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )

    io.observe(el)

    return () => {
      io.disconnect()
    }
  }, [rootMargin])

  return { ref, visible }
}
