import { getShootBySlug, getShoots, ShootCategoryName, type Photo } from '@/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Gallery } from '@/components/Gallery/Gallery'

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

      <Gallery slug={slug} photos={shoot.photos} />
    </main>
  )
}
