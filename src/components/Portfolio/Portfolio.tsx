import styles from './Portfolio.module.css'
import { getShoots } from '@/content'
import Link from 'next/link'
import Image from 'next/image'

const CARD_SIZES = '(min-width: 880px) 25vw, 50vw'

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
          <Link key={shoot.slug} className={styles.card} href={`/shoots/${shoot.slug}`}>
            <Image src={shoot.cover.src} alt={shoot.cover.alt} sizes={CARD_SIZES} fill className={styles.photo} />
            <div className={styles.cardLabel}>{shoot.title}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
