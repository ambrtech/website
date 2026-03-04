import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { createMetadata } from '@/lib/metadata'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/lib/blog'
import { tags } from '@/lib/taxonomy'
import { mdxComponents } from '@/components/mdx'
import { Prose } from '@/components/mdx/prose'
import { AuthorBio } from '@/components/mdx/author-bio'
import { RelatedPosts } from '@/components/mdx/related-posts'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { ArticleJsonLd, FaqJsonLd } from '@/components/json-ld'
import { CTA } from '@/components/sections/cta'
import { Reveal } from '@/components/reveal'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const { frontmatter: fm } = post
  const image = fm.featuredImage || `/og?title=${encodeURIComponent(fm.title)}&subtitle=${encodeURIComponent(fm.description)}`

  return createMetadata({
    title: fm.title,
    description: fm.description,
    path: `/blog/${fm.slug}`,
    image,
    type: 'article',
    publishedAt: fm.publishedAt,
  })
}

function extractFaqItems(content: string): { question: string; answer: string }[] {
  const faqRegex = /<FAQ\s+question="([^"]+)">\s*([\s\S]*?)\s*<\/FAQ>/g
  const items: { question: string; answer: string }[] = []
  let match
  while ((match = faqRegex.exec(content)) !== null) {
    items.push({
      question: match[1],
      answer: match[2].replace(/<[^>]+>/g, '').trim(),
    })
  }
  return items
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter: fm, content } = post
  const related = getRelatedPosts(fm.slug, fm.tags)
  const faqItems = extractFaqItems(content)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: fm.title, href: `/blog/${fm.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={fm.title}
        description={fm.description}
        slug={fm.slug}
        publishedAt={fm.publishedAt}
        updatedAt={fm.updatedAt}
        author={fm.author}
        image={fm.featuredImage}
      />
      {faqItems.length > 0 && <FaqJsonLd items={faqItems} />}

      <article className="pt-section-mobile md:pt-section pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-5">
                {fm.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-eyebrow-sm uppercase tracking-eyebrow font-body-medium text-accent bg-accent-whisper rounded-full px-3 py-1"
                  >
                    {tags[tag].label}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-title leading-[1.15] tracking-heading mb-5">
                {fm.title}
              </h1>
              <p className="text-body text-copy-mid leading-[1.75] mb-6 max-w-[620px]">
                {fm.description}
              </p>
              <div className="flex items-center gap-3 text-caption text-copy-light pt-5 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-[0.6rem] text-copy-mid">
                    {fm.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-body-medium text-copy-mid">{fm.author}</span>
                  <span aria-hidden="true" className="text-copy-faint">&middot;</span>
                  <time dateTime={fm.publishedAt}>
                    {new Date(fm.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true" className="text-copy-faint">&middot;</span>
                  <span>{fm.readingTime} min read</span>
                </div>
              </div>
            </header>
          </Reveal>

          {fm.featuredImage && (
            <Reveal>
              <figure className="relative aspect-[16/9] rounded-brand-lg overflow-hidden mb-12">
                <Image
                  src={fm.featuredImage}
                  alt={fm.featuredImageAlt || ''}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </figure>
            </Reveal>
          )}

          <Reveal>
            <Prose>
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{ blockJS: false }}
              />
            </Prose>
          </Reveal>

          <AuthorBio name={fm.author} role={fm.authorRole} />
          <RelatedPosts posts={related} />
        </div>
      </article>

      <CTA />
    </>
  )
}
