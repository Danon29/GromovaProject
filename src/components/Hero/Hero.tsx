import Image from 'next/image'
import styles from './Hero.module.css'
import { heroSlides } from '@/content/hero'
import { HeroCarousel } from '@/components/HeroCarousel/hero-carousel'

export function Hero() {
  const slide = heroSlides[0]

  if (!slide) {
    return null
  }

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.info}>Фотограф в Калининграде · портрет · события · сцена</p>
        <h1 className={styles.title}>Ловлю момент</h1>
      </div>

      <HeroCarousel
        tones={heroSlides.map((slide) => slide.tone)}
        slides={heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            quality={90}
            priority={i === 0}
            className={styles.photo}
          />
        ))}
      />
    </header>
  )
}
