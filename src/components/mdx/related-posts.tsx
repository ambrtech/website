import Link from 'next/link'
import type { PostSummary } from '@/lib/blog'

interface RelatedPostsProps {
  posts: PostSummary[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="mt-16 pt-10 border-t border-border">
      <h2 className="font-heading text-section tracking-heading mb-8">
        Related reading
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-brand bg-surface-alt p-5 transition-all hover:shadow-card hover:-translate-y-px"
          >
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
            <p className="text-caption text-copy-light leading-[1.6] line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
