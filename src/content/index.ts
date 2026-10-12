import { Shoot, ShootCategory } from '@/content/types'
import { shoots } from '@/content/shoots'

export type { Photo, Shoot, ShootCategory, BentoItem } from '@/content/types'
export { ShootCategoryName } from '@/content/types'
export { heroSlides } from '@/content/hero'
export { bentoItems, portfolioInfo } from '@/content/bento'
export { aboutStats } from '@/content/about'

export function getShoots(): readonly Shoot[] {
  return shoots
}

export function getShootBySlug(slug: string): Shoot | undefined {
  return shoots.find((s) => s.slug === slug)
}

export function getShootByCategory(category: ShootCategory): readonly Shoot[] {
  return shoots.filter((s) => s.category === category)
}

export function coverOf(shoot: Shoot) {
  return shoot.cover ?? shoot.photos[0] ?? null
}

export function getShootPhoto(slug: string, id: string) {
  const shoot = getShootBySlug(slug)
  const index = Number(id) - 1
  const photo = shoot?.photos[index]
  return shoot && photo ? { shoot, photo, index } : undefined
}
