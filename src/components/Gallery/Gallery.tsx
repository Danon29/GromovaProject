import { Photo } from '@/content'
import styles from './Gallery.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PER_ROW = 3

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

const ratio = (p: Photo) => p.width / p.height

export function Gallery({ photos, slug }: { slug: string; photos: Photo[] }) {
  const rows = chunkRows(photos, PER_ROW)

  return (
    <>
      <div className={styles.photos}>
        {rows.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((photo) => (
              <Link
                key={photo.src}
                className={styles.photo}
                href={`/shoots/${slug}/photo/${photos.indexOf(photo) + 1}`}
                style={{ '--r': ratio(photo) }}
                scroll={false}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes={rowSizes(row, photo)} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
