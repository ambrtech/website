import type { PostSummary } from '@/lib/blog'
import { PostCard } from './post-card'
import { Reveal } from '@/components/reveal'

interface PostGridProps {
  posts: PostSummary[]
}

export function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <p className="text-body text-copy-light py-12">No posts yet. Check back soon.</p>
    )
  }

  const [featured, ...rest] = posts

  return (
    <div className="space-y-8">
      {featured && (
        <Reveal>
          <PostCard post={featured} featured />
        </Reveal>
      )}
      {rest.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
