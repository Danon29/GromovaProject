import styles from './About.module.css'
import { aboutStats } from '@/content/about'

export function About() {
  const { lead, stats } = aboutStats

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}></div>
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
