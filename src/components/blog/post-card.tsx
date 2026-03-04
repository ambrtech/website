import Link from 'next/link'
import Image from 'next/image'
import { tags, type TagSlug } from '@/lib/taxonomy'
import type { PostSummary } from '@/lib/blog'

interface PostCardProps {
  post: PostSummary
  featured?: boolean
}

export function PostCard({ post, featured }: PostCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-brand-lg overflow-hidden bg-surface-white border border-border transition-all hover:shadow-card hover:-translate-y-px"
      >
        <div className={`grid ${post.featuredImage ? 'md:grid-cols-2' : ''}`}>
          {post.featuredImage && (
            <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px] overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt || ''}
                fill
                className="object-cover transition-transform duration-slow group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 620px"
              />
            </div>
          )}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag: TagSlug) => (
                <span
                  key={tag}
                  className="text-eyebrow-sm uppercase tracking-eyebrow font-body-medium text-accent bg-accent-whisper rounded-full px-3 py-1"
                >
                  {tags[tag].label}
                </span>
              ))}
            </div>
            <h3 className="font-heading text-section tracking-heading text-copy leading-[1.2] mb-3 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-body-sm text-copy-mid leading-[1.7] line-clamp-3 mb-5">
              {post.description}
            </p>
            <div className="flex items-center gap-2 text-caption text-copy-light">
              <span className="font-body-medium text-copy-mid">{post.author}</span>
              <span aria-hidden="true" className="text-copy-faint">&middot;</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span aria-hidden="true" className="text-copy-faint">&middot;</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col h-full rounded-brand-lg overflow-hidden bg-surface-white border border-border transition-all hover:shadow-card hover:-translate-y-px"
    >
      {post.featuredImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || ''}
            fill
            className="object-cover transition-transform duration-slow group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((tag: TagSlug) => (
            <span
              key={tag}
              className="text-eyebrow-sm uppercase tracking-eyebrow font-body-medium text-accent bg-accent-whisper rounded-full px-3 py-1"
            >
              {tags[tag].label}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-label tracking-heading text-copy leading-[1.3] mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-caption text-copy-mid leading-[1.65] line-clamp-2 mb-4 flex-1">
          {post.description}
        </p>
        <div className="flex items-center gap-2 text-caption text-copy-light pt-4 border-t border-border">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden="true" className="text-copy-faint">&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </Link>
  )
}
