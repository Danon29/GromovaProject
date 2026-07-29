import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.brand}>GROMOVA</span>
      <small className={styles.copyright}>© 2026 · съёмка событий и портрет</small>
    </footer>
  )
}
