'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import styles from './PhotoModal.module.css'

export function PhotoModal({ total, children }: { total: number; children: React.ReactNode }) {
  const router = useRouter()
  const { slug, id } = useParams<{ slug: string; id: string }>()
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    ref.current?.showModal()
  }, [])

  const step = (delta: number) => {
    const next = ((Number(id) - 1 + delta + total) % total) + 1
    router.replace(`/shoots/${slug}/photo/${next}`, { scroll: false })
  }

  return (
    <dialog
      className={styles.lightbox}
      ref={ref}
      onClose={(e) => {
        const fades = e.currentTarget.getAnimations().map((a) => a.finished)
        Promise.allSettled(fades).then(() => router.back())
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close()
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1)
        if (e.key === 'ArrowLeft') step(-1)
      }}
    >
      {children}
    </dialog>
  )
}
