import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Nav } from '@/components/Nav/Nav'
import { Footer } from '@/components/Footer/Footer'
import { SITE_URL } from '@/lib/site'

const display = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: {
    template: '%s — GROMOVA',
    default: 'GROMOVA — фотограф',
  },
  description:
    'Фотограф в Калининграде: портретная и репортажная съёмка людей, мероприятий, концертов и спектаклей. Живые эмоции и естественные кадры.',
  openGraph: {
    title: 'GROMOVA — фотограф в Калининграде',
    description: 'Снимаю людей такими, какие они есть',
    url: '/',
    siteName: 'GROMOVA',
    locale: 'ru-RU',
    type: 'website',
    images: ['/opengraph-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
