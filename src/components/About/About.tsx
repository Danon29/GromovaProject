import Image from 'next/image'
import styles from './About.module.css'
import { aboutStats } from '@/content/about'
import portrait from '@/images/about-portrait.jpg'

const PORTRAIT_SIZES = '(min-width: 880px) 42vw, 90vw'

export function About() {
  const { lead, stats } = aboutStats

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <Image
            src={portrait}
            alt="Мария Громова"
            fill
            placeholder="blur"
            sizes={PORTRAIT_SIZES}
            className={styles.photo}
          />
        </div>
        <div>
          <div className={styles.label}>
            <span className={styles.number}>03</span>
            <span className={styles.name}>обо мне</span>
          </div>
          <h2 className={styles.speach}>
            Люди, свет,
            <br /> момент
          </h2>
          {lead.map((item, index) => (
            <p className={styles.lead} key={index}>
              {item}
            </p>
          ))}
          <dl className={styles.stats}>
            {stats.map((item) => (
              <div key={item.text}>
                <dt className={styles.statName}>{item.count}</dt>
                <dd className={styles.statCount}>{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
