import { createMetadata } from '@/lib/metadata'
import { getAllPostSummaries, getAllTags } from '@/lib/blog'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { PostGrid } from '@/components/blog/post-grid'
import { TagPills } from '@/components/blog/tag-pills'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Insights on AI-powered conversation training, sales enablement, leadership development, and enterprise L&D strategy.',
  path: '/blog',
})

export default function BlogIndexPage() {
  const posts = getAllPostSummaries()
  const activeTags = getAllTags()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
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
        </div>
      </section>
      <CTA />
    </>
  )
}
