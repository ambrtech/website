import Link from 'next/link'
import { tags, type TagSlug } from '@/lib/taxonomy'

interface TagPillsProps {
  activeTags?: TagSlug[]
  activeTag?: TagSlug
}

export function TagPills({ activeTags, activeTag }: TagPillsProps) {
  const displayTags = activeTags ?? (Object.keys(tags) as TagSlug[])

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`rounded-full px-4 py-1.5 text-caption font-body-medium transition-colors ${
          !activeTag
            ? 'bg-dark text-surface-white'
            : 'bg-surface-alt text-copy-mid hover:text-copy'
        }`}
      >
        All
      </Link>
      {displayTags.map((slug) => (
        <Link
          key={slug}
          href={`/blog/tag/${slug}`}
          className={`rounded-full px-4 py-1.5 text-caption font-body-medium transition-colors ${
            activeTag === slug
              ? 'bg-dark text-surface-white'
              : 'bg-surface-alt text-copy-mid hover:text-copy'
          }`}
        >
          {tags[slug].label}
        </Link>
      ))}
    </div>
  )
}
