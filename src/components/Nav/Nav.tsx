import styles from './Nav.module.css'

export function Nav() {
  return (
    <nav className={styles.wrapper}>
      <a href="#top" className={styles.left}>
        <span className={styles.logo}>GROMOVA</span>
        <span className={styles.photographer}>фотограф</span>
      </a>
      <ul className={styles.right}>
        <li>
          <a href="#shoots" className={styles.link}>
            Съёмки
          </a>
        </li>
        <li>
          <a href="#portfolio" className={styles.link}>
            Портфолио
          </a>
        </li>
        <li>
          <a href="#about" className={styles.link}>
            Обо мне
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  )
}
