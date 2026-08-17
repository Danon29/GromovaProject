import { Shoot, ShootCategory } from '@/content/types'
import { shoots } from '@/content/shoots'

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
