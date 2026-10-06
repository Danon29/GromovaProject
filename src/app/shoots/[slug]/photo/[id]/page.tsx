import { getShootBySlug, getShootPhoto, getShoots } from '@/content'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export function generateStaticParams() {
  return getShoots().flatMap((shoot) => shoot.photos.map((_, i) => ({ slug: shoot.slug, id: String(i + 1) })))
}

export default async function PhotoPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params
  const found = getShootPhoto(slug, id)
  if (!found) notFound()

  return (
    <main className={styles.stage}>
      <Image src={found.photo.src} alt={found.photo.alt} fill priority sizes="100vw" />
      <Link href={`/shoots/${found.shoot.slug}`} className={styles.backLink}>
        ← {found.shoot.title}
      </Link>
    </main>
  )
}
