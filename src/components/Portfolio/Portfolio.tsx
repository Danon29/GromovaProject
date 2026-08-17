import styles from './Portfolio.module.css'
import { getShoots } from '@/content'

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.left}>
          <div className={styles.label}>
            <span className={styles.number}>02</span>
            <span className={styles.name}>портфолио</span>
          </div>
          <h2 className={styles.lead}>Лица</h2>
        </div>
        <p className={styles.right}>Честный характер в кадре, без глянцевой маски</p>
      </div>
      <div className={styles.cards}>
        {getShoots().map((shoot) => (
          <div key={shoot.slug} className={styles.card}>
            <div className={styles.cardLabel}>{shoot.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
