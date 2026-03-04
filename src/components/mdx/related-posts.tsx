import Link from 'next/link'
import Image from 'next/image'
import type { PostSummary } from '@/lib/blog'

interface RelatedPostsProps {
  posts: PostSummary[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="mt-16 pt-10 border-t border-border">
      <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-2 eyebrow-hairline">
        Continue reading
      </p>
      <h2 className="font-heading text-section tracking-heading mb-8">
        Related reading
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-brand-lg border border-border bg-surface-white overflow-hidden transition-all hover:shadow-card hover:-translate-y-px"
          >
            {post.featuredImage && (
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || ''}
                  fill
                  className="object-cover transition-transform duration-slow group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-caption text-copy-light mb-2">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
              <h3 className="font-heading text-label tracking-heading text-copy group-hover:text-accent transition-colors leading-[1.3] mb-2">
                {post.title}
              </h3>
              <p className="text-caption text-copy-light leading-[1.6] line-clamp-2 flex-1">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
