'use client'

import { useEffect } from 'react'
import styles from './error.module.css'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className={styles.root}>
      <p className={styles.meta}>ошибка{error.digest ? ` · ${error.digest}` : ''}</p>
      <h1 className={styles.title}>Кадр не получился</h1>
      <button className={styles.retry} onClick={() => reset()}>
        Попробовать ещё раз
      </button>
    </main>
  )
}
