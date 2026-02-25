import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ambr.ai'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedAt?: string
}

export function createMetadata(meta: PageMeta): Metadata {
  const url = `${siteUrl}${meta.path}`
  const image = meta.image || '/images/og-default.jpg'

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: 'Ambr AI',
      images: [{ url: image, width: 1200, height: 630 }],
      type: meta.type || 'website',
      ...(meta.publishedAt && { publishedTime: meta.publishedAt }),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}
