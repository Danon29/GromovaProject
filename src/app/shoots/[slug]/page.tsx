import { getShootBySlug, getShoots, ShootCategoryName, type Photo } from '@/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const PER_ROW = 3

const ratio = (p: Photo) => p.width / p.height

function chunkRows(photos: readonly Photo[], perRow: number): Photo[][] {
  const rows: Photo[][] = []
  for (let i = 0; i < photos.length; i += perRow) {
    rows.push(photos.slice(i, i + perRow))
  }

  const last = rows.at(-1)
  const prev = rows.at(-2)
  if (last && prev && last.length === 1 && prev.length > 2) {
    last.unshift(prev.pop() as Photo)
  }

  return rows
}

function rowSizes(row: readonly Photo[], photo: Photo): string {
  const total = row.reduce((sum, p) => sum + ratio(p), 0)
  const share = Math.ceil((ratio(photo) / total) * 100)
  return `(min-width: 880px) ${share}vw, 100vw`
}

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

  const rows = chunkRows(shoot.photos, PER_ROW)

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
        {rows.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((photo) => (
              <div key={photo.src} className={styles.photo} style={{ '--r': ratio(photo) }}>
                <Image src={photo.src} alt={photo.alt} fill sizes={rowSizes(row, photo)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
