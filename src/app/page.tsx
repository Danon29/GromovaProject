import { Hero } from '@/components/Hero/Hero'
import { Shoots } from '@/components/Shoots/Shoots'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Shoots />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}
