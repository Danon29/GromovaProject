import styles from './Nav.module.css'
import Link from 'next/link'

export function Nav() {
  return (
    <nav className={styles.wrapper}>
      <Link href="/#top" className={styles.left}>
        <span className={styles.logo}>GROMOVA</span>
        <span className={styles.photographer}>фотограф</span>
      </Link>
      <ul className={styles.right}>
        <li>
          <Link href="/#shoots" className={styles.link}>
            Съёмки
          </Link>
        </li>
        <li>
          <Link href="/#portfolio" className={styles.link}>
            Портфолио
          </Link>
        </li>
        <li>
          <Link href="/#about" className={styles.link}>
            Обо мне
          </Link>
        </li>
        <li>
          <Link href="/#contact" className={styles.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  )
}
