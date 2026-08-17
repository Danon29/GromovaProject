import { getShootBySlug, getShoots } from '@/content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const shoot = getShootBySlug(slug)

  if (!shoot) return { title: 'Съёмка не найдена' }

  return {
    title: `${shoot.title} — GROMOVA`,
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
    <main>
      <p>
        {shoot.location} · {shoot.year}
      </p>
      <h1>{shoot.title}</h1>
      <p>{shoot.description}</p>
    </main>
  )
}
