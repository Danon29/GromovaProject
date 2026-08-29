import Image from 'next/image'
import styles from './Shoots.module.css'
import { bentoItems, ShootsInfo, type BentoItem } from '@/content'

function bentoSizes(span: BentoItem['span']): string {
  const wide = Math.ceil((span / 6) * 100)
  return `(min-width: 880px) ${wide}vw, 100vw`
}

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
            <Image
              src={item.photo.src}
              alt={item.photo.alt}
              fill
              sizes={bentoSizes(item.span)}
              className={styles.photo}
            />
            <span className={styles.cellLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
