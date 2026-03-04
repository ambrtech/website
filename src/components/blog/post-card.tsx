import Link from 'next/link'
import Image from 'next/image'
import { tags, type TagSlug } from '@/lib/taxonomy'
import type { PostSummary } from '@/lib/blog'

interface PostCardProps {
  post: PostSummary
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-brand overflow-hidden bg-surface-white border border-border transition-all hover:shadow-card hover:-translate-y-px"
    >
      {post.featuredImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || ''}
            fill
            className="object-cover transition-transform duration-slow group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((tag: TagSlug) => (
            <span
              key={tag}
              className="text-badge uppercase tracking-eyebrow font-body-medium text-copy-light bg-surface-alt rounded-full px-2.5 py-0.5"
            >
              {tags[tag].label}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-label tracking-heading text-copy leading-[1.3] mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-caption text-copy-light leading-[1.6] line-clamp-2 mb-4">
          {post.description}
        </p>
        <div className="flex items-center gap-2 text-caption text-copy-faint">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </Link>
  )
}
