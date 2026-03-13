import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getPaginatedPosts, getAllTags, getAllPostSummaries, POSTS_PER_PAGE } from '@/lib/blog'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { PostGrid } from '@/components/blog/post-grid'
import { TagPills } from '@/components/blog/tag-pills'
import { Pagination } from '@/components/blog/pagination'
import { CTA } from '@/components/sections/cta'

interface PageProps {
  params: Promise<{ page: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { page } = await params
  const pageNum = Number(page)

  return createMetadata({
    title: `Blog — Page ${pageNum}`,
    description:
      'Insights on AI-powered conversation training, sales enablement, leadership development, and enterprise L&D strategy.',
    path: `/blog/page/${pageNum}`,
  })
}

export function generateStaticParams() {
  const all = getAllPostSummaries()
  const totalPages = Math.ceil(all.length / POSTS_PER_PAGE)

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export default async function BlogPaginatedPage({ params }: PageProps) {
  const { page } = await params
  const pageNum = Number(page)

  if (isNaN(pageNum) || pageNum < 2) notFound()

  const { posts, totalPages } = getPaginatedPosts(pageNum)

  if (pageNum > totalPages) notFound()

  const activeTags = getAllTags()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: `Page ${pageNum}`, href: `/blog/page/${pageNum}` },
        ]}
      />
      <PageHero
        eyebrow="Blog"
        heading={
          <>
            Insights for the people who build <em className="text-accent">training</em>
          </>
        }
        subtitle="Practical thinking on conversation skills, AI simulation, and what actually works in enterprise L&D."
        compact
      />
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <div className="mb-12 pb-6 border-b border-border">
            <TagPills activeTags={activeTags} />
          </div>
          <PostGrid posts={posts} />
          <Pagination currentPage={pageNum} totalPages={totalPages} />
        </div>
      </section>
      <CTA />
    </>
  )
}
