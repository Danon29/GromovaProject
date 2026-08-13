import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Nav } from '@/components/Nav/Nav'
import { Footer } from '@/components/Footer/Footer'

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
  title: {
    default: 'GROMOVA — фотограф',
    template: '%s — GROMOVA',
  },
  description: 'Фотосессии, сцена и красивые кадры',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
