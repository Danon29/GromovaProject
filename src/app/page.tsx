import { Hero } from '@/components/Hero/Hero'
import { Backstage } from '@/components/Backstage/Backstage'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import { Nav } from '@/components/Nav/Nav'

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
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
