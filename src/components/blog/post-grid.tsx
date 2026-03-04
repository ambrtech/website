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

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <Reveal key={post.slug} delay={i * 60}>
          <PostCard post={post} />
        </Reveal>
      ))}
    </div>
  )
}
