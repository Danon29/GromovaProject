import { MetadataRoute } from 'next'
import { getShoots } from '@/content'
import { SITE_URL } from '@/lib/site'

const BASE = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      priority: 1,
    },
    ...getShoots().map((shoot) => ({
      url: `${BASE}/shoots/${shoot.slug}`,
      changeFrequency: 'monthly' as const,
      images: shoot.photos.map((p) => `${BASE}${p.src}`),
    })),
  ]
}
