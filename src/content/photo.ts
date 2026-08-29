import { Photo } from '@/content/types'
import { photoDimensions } from '@/content/photos.generated'

type KnownSrc = keyof typeof photoDimensions

export function photo(src: string, alt: string): Photo {
  const dims = photoDimensions[src as KnownSrc]

  if (!dims) {
    throw new Error(`Нет размеров для ${src} — положи файл в raw/ и запусти \`yarn photos\``)
  }

  return { src, alt, width: dims.width, height: dims.height }
}
