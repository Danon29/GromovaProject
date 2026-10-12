import Image from 'next/image'
import styles from './Portfolio.module.css'
import { bentoItems, portfolioInfo, type BentoItem } from '@/content'
import { Reveal } from '@/components/Reveal/Reveal'

function bentoSizes(span: BentoItem['span']): string {
  const wide = Math.ceil((span / 6) * 100)
  return `(min-width: 880px) ${wide}vw, 100vw`
}
// Задержка внутри ряда: на десктопе сетка bento укладывается по 2 ячейки в ряд
const PER_ROW = 2
const STAGGER = 120

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.container}>
      <Reveal>
        <div className={styles.leadGrid}>
          <div className={styles.label}>
            <span className={styles.number}>01</span>
            <span className={styles.name}>портфолио</span>
          </div>
          <h2 className={styles.lead}>{portfolioInfo.lead}</h2>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {bentoItems.map((item, i) => (
          <Reveal
            key={item.photo.src}
            delay={(i % PER_ROW) * STAGGER}
            className={styles.cell}
            style={{ '--span': item.span, '--h': `${item.height}px` }}
          >
            <Image
              src={item.photo.src}
              alt={item.photo.alt}
              fill
              sizes={bentoSizes(item.span)}
              className={styles.photo}
            />
            <span className={styles.cellLabel}>{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
