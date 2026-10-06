import { getShootPhoto } from '@/content'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'

export default async function InterceptedPhotoPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params
  const found = getShootPhoto(slug, id)
  if (!found) notFound()

  const { shoot, photo, index } = found

  return (
    <figure className={styles.frame} style={{ '--r': photo.width / photo.height }}>
      <Image src={photo.src} alt={photo.alt} fill sizes="100vw" />
      <figcaption className={styles.counter}>
        {String(index + 1).padStart(2, '0')} / {String(shoot.photos.length).padStart(2, '0')}
      </figcaption>
    </figure>
  )
}
