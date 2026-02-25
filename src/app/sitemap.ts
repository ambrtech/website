import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ambr.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  // Future: dynamically add blog posts, use cases, etc.
  // const posts = getAllPosts().map(post => ({
  //   url: `${siteUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt || post.publishedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  return [...staticPages]
}
