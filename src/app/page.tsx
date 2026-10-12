import { Hero } from '@/components/Hero/Hero'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { Shoots } from '@/components/Shoots/Shoots'
import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'
import { SITE_URL } from '@/lib/site'
import { contact } from '@/content/contact'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GROMOVA',
  description:
    'Фотограф в Калининграде: портретная и репортажная съёмка людей, мероприятий, концертов и спектаклей.',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  email: contact.contacts.find((c) => c.href.startsWith('mailto:'))?.href.replace('mailto:', ''),
  telephone: contact.contacts.find((c) => c.href.startsWith('tel:'))?.href.replace('tel:', ''),
  address: { '@type': 'PostalAddress', addressLocality: 'Калининград', addressCountry: 'RU' },
  areaServed: 'Калининград',
  knowsAbout: ['портретная съёмка', 'репортажная съёмка', 'фотосъёмка мероприятий'],
  founder: { '@type': 'Person', name: 'Мария Громова', jobTitle: 'Фотограф' },
  sameAs: contact.socialNetworks.map((s) => s.href).filter(Boolean),
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }}
      />
      <Hero />
      <Portfolio />
      <Shoots />
      <About />
      <Contact />
    </main>
  )
}
