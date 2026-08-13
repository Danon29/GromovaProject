import styles from './not-found.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className={styles.root}>
      <p className={styles.meta}>404 — страница не найдена</p>
      <h1 className={styles.title}>Этот кадр не сохранился</h1>
      <Link href="/" className={styles.link}>
        ← на главную
      </Link>
    </main>
  )
}
