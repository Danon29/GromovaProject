import { Photo } from '@/content/types'
import { photo } from '@/content/photo'

export type HeroTone = 'dark' | 'light'

export type HeroSlide = Photo & { tone: HeroTone }

export const heroSlides: HeroSlide[] = [
  {
    ...photo('/photos/hero/first.jpg', 'Храм в Китае'),
    tone: 'dark',
  },
  { ...photo('/photos/hero/second.jpg', 'Пекин утром'), tone: 'light' },
  {
    ...photo('/photos/hero/third.jpg', 'Великая китайская стена'),
    tone: 'dark',
  },
]
