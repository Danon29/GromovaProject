'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './hero-carousel.module.css'

const AUTO_MS = 5500

type HeroCarouselProps = {
  slides: React.ReactNode[]
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [active, setActive] = useState(0)

  const timeRef = useRef<number | null>(null)
  const count = slides.length

  const stop = useCallback(() => {
    if (timeRef.current !== null) {
      window.clearInterval(timeRef.current)
      timeRef.current = null
    }
  }, [])

  const restart = useCallback(() => {
    stop()
    timeRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, AUTO_MS)
  }, [count, stop])

  useEffect(() => {
    restart()

    const onVisibility = () => {
      if (document.hidden) stop()
      else restart()
    }

    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [restart, stop])

  const next = () => {
    setActive((i) => (i + 1) % count)
    restart()
  }

  return (
    <>
      {slides.map((slide, i) => (
        <div key={i} className={i === active ? `${styles.slide} ${styles.active}` : styles.slide}>
          {slide}
        </div>
      ))}

      <div className={styles.controls}>
        <span>
          {String(active + 1).padStart(2, '0')} — {String(count).padStart(2, '0')}
        </span>
        <button type="button" className={styles.next} aria-label="Следующий кадр" onClick={next}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            <path d="M1 6h15m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </>
  )
}
