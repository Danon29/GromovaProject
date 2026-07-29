import styles from './Hero.module.css'

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.info}>события · сцена · портрет</p>
        <h1 className={styles.title}>Ловлю то, что остаётся за кадром</h1>
      </div>
      <div className={styles.right}>
        <span>01 — 03</span>
        <button type="button" className={styles.next}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            <path d="M1 6h15m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </header>
  )
}
