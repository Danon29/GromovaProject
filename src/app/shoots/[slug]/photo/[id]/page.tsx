import { getShootPhoto, getShoots } from '@/content'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string; id: string }>
}

export function generateStaticParams() {
  return getShoots().flatMap((shoot) => shoot.photos.map((_, i) => ({ slug: shoot.slug, id: String(i + 1) })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, id } = await params
  const found = getShootPhoto(slug, id)
  if (!found) notFound()
  return {
    title: `${found.shoot.title} · кадр ${id}`,
    alternates: { canonical: `/shoots/${slug}/photo/${id}` },
    robots: { index: false, follow: true },
  }
}

export default async function PhotoPage({ params }: Props) {
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
