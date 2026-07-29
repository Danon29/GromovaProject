import styles from './About.module.css'

export function About() {
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
            Свет, сцена,
            <br /> момент
          </h2>
          <p className={styles.lead}>
            Я — GROMOVA. 4 года снимаю то, что обычно остаётся за кадром: репетиции, гримёрки, сцену за минуту до
            выхода. Работаю на концертах и съёмочных площадках, снимаю живые портреты — без постановочной суеты.
          </p>
          <p className={styles.leadSecond}>
            Верю, что лучший кадр рождается, когда человек забывает про камеру. Люблю естественный свет, живую эмоцию и
            честную историю.
          </p>
          <dl className={styles.stats}>
            <div className="stat">
              <dt className={styles.statName}>4</dt>
              <dd className={styles.statCount}>года опыта</dd>
            </div>
            <div>
              <dt className={styles.statName}>300+</dt>
              <dd className={styles.statCount}>съёмок</dd>
            </div>
            <div className="stat">
              <dt className={styles.statName}>10 000+</dt>
              <dd className={styles.statCount}>кадров в архиве</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
