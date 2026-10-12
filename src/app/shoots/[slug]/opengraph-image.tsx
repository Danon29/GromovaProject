import { getShootBySlug, getShoots, ShootCategoryName } from '@/content'
import { notFound } from 'next/navigation'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'GROMOVA — фотограф'

export function generateStaticParams() {
  return getShoots().map((shoot) => ({ slug: shoot.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export default async function OgImage({ params }: Props) {
  const { slug } = await params
  const shoot = getShootBySlug(slug)
  if (!shoot) notFound()

  const [cormorant, mono] = await Promise.all([
    readFile(join(process.cwd(), 'src/assets/fonts/CormorantGaramond-Light.ttf')),
    readFile(join(process.cwd(), 'src/assets/fonts/JetBrainsMono-Regular.ttf')),
  ])

  const meta = `${ShootCategoryName[shoot.category]} · ${shoot.location} · ${shoot.year}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 64,
        background: '#0b0b0c',
        color: '#f2f0ea',
        fontFamily: 'JetBrains Mono',
      }}
    >
      <div style={{ fontSize: 22, letterSpacing: '0.34em', textTransform: 'uppercase' }}>GROMOVA</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 300,
            fontSize: 104,
            lineHeight: 1,
          }}
        >
          {shoot.title}
        </div>
        <div style={{ fontSize: 24, letterSpacing: '0.12em', color: '#b7b4ac' }}>{meta}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Cormorant Garamond', data: cormorant, weight: 300, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 400, style: 'normal' },
      ],
    },
  )
}
