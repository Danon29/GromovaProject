export type Photo = {
  src: string
  alt: string
}

export type ShootCategory = 'portrait' | 'event'

export type Shoot = {
  slug: string
  category: ShootCategory
  title: string
  year: number
  location: string
  description: string
  cover: Photo
  photos: Photo[]
}

export type BentoItem = {
  photo: Photo
  label: string
  span: 2 | 4
  height: 560 | 620
}

export type AboutStat = {
  count: string
  text: string
}

export type AboutStats = {
  lead: readonly string[]
  stats: readonly AboutStat[]
}

type Contact = {
  href: string
  name: string
}

export type ContactInfo = {
  socialNetworks: readonly Contact[]
  contacts: readonly Contact[]
}

export type ShootsInfo = {

}