import { getShootBySlug, getShoots } from '@/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import { ShootCategoryName } from '@/content/types'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const shoot = getShootBySlug(slug)

  if (!shoot) return { title: 'Съёмка не найдена' }

  return {
    title: shoot.title,
    description: shoot.description,
  }
}

export function generateStaticParams() {
  return getShoots().map((shoot) => ({ slug: shoot.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ShootPage({ params }: Props) {
  const { slug } = await params

  const shoot = getShootBySlug(slug)

  if (!shoot) {
    notFound()
  }

  return (
    <main className={styles.wrapper}>
      <p className={styles.location}>
        {ShootCategoryName[shoot.category]} · {shoot.location} · {shoot.year}
      </p>

      <h1 className={styles.title}>{shoot.title}</h1>
      <p className={styles.description}>{shoot.description}</p>
      <div className={styles.goBack}>
        <Link href="/#portfolio" className={styles.link}>
          ← все съёмки
        </Link>
      </div>

      <div className={styles.photos}>
        {shoot.photos.map((photo) => (
          <div key={photo.src} className={styles.photo}>
            photo
          </div>
        ))}
      </div>
    </main>
  )
}
