import { Hero } from '@/components/Hero/Hero'
import { Backstage } from '@/components/Backstage/Backstage'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Backstage />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}
