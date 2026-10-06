import { ReactNode } from 'react'
import { PhotoModal } from '@/components/PhotoModal/PhotoModal'
import { getShootBySlug } from '@/content'
import { notFound } from 'next/navigation'

export default async function IdLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const shoot = getShootBySlug(slug)
  if (!shoot) notFound()

  return <PhotoModal total={shoot.photos.length}>{children}</PhotoModal>
}
