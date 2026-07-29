import styles from './page.module.css'
import { Hero } from '@/components/Hero/Hero'
import { Backstage } from '@/components/Backstage/Backstage'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Hero />
        <Backstage />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
