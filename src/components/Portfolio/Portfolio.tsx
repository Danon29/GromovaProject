import styles from './Portfolio.module.css'
import { getShoots } from '@/content'
import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/Reveal/Reveal'

const CARD_SIZES = '(min-width: 880px) 25vw, 50vw'
const PER_ROW = 4
const STAGGER = 120

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.container}>
      <Reveal>
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
      </Reveal>
      <div className={styles.cards}>
        {getShoots().map((shoot, i) => (
          <Reveal key={shoot.slug} delay={(i % PER_ROW) * STAGGER}>
            <Link className={styles.card} href={`/shoots/${shoot.slug}`}>
              <Image src={shoot.cover.src} alt={shoot.cover.alt} sizes={CARD_SIZES} fill className={styles.photo} />
              <div className={styles.cardLabel}>{shoot.title}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
