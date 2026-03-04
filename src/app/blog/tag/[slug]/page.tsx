import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getPostsByTag, getAllTags } from '@/lib/blog'
import { tags, type TagSlug } from '@/lib/taxonomy'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { PostGrid } from '@/components/blog/post-grid'
import { TagPills } from '@/components/blog/tag-pills'
import { CTA } from '@/components/sections/cta'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTags().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  if (!(slug in tags)) return {}

  const tag = tags[slug as TagSlug]
  return createMetadata({
    title: `${tag.label} Articles`,
    description: tag.description,
    path: `/blog/tag/${slug}`,
  })
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params
  if (!(slug in tags)) notFound()

  const tagSlug = slug as TagSlug
  const tag = tags[tagSlug]
  const posts = getPostsByTag(tagSlug)
  const activeTags = getAllTags()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: tag.label, href: `/blog/tag/${slug}` },
        ]}
      />
      <PageHero
        eyebrow={tag.label}
        heading={
          <>
            Articles on <em className="text-accent">{tag.label.toLowerCase()}</em>
          </>
        }
        subtitle={tag.description}
        compact
      />
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <div className="mb-12 pb-6 border-b border-border">
            <TagPills activeTags={activeTags} activeTag={tagSlug} />
          </div>
          <PostGrid posts={posts} />
        </div>
      </section>
      <CTA />
    </>
  )
}
