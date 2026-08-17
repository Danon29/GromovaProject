import styles from './Shoots.module.css'
import { bentoItems, ShootsInfo } from '@/content/bento'

export function Shoots() {
  return (
    <section id="shoots" className={styles.container}>
      <div className={styles.leadGrid}>
        <div className={styles.label}>
          <span className={styles.number}>01</span>
          <span className={styles.name}>съёмки / shoots</span>
        </div>
        <h2 className={styles.lead}>{ShootsInfo.lead}</h2>
      </div>
      <div className={styles.grid}>
        {bentoItems.map((item) => (
          <div key={item.photo.src} className={styles.cell} style={{ '--span': item.span, '--h': `${item.height}px` }}>
            <span className={styles.cellLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
