import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { TagSlug } from '@/lib/taxonomy'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
export const POSTS_PER_PAGE = 12

export interface PostFrontmatter {
  title: string
  slug: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  authorRole?: string
  tags: TagSlug[]
  featuredImage?: string
  featuredImageAlt?: string
  readingTime: number
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
}

export interface PostSummary {
  slug: string
  title: string
  description: string
  publishedAt: string
  tags: TagSlug[]
  featuredImage?: string
  featuredImageAlt?: string
  readingTime: number
  author: string
  authorRole?: string
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
}

function parsePost(filename: string): Post {
  const filePath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    frontmatter: {
      ...data,
      slug: filename.replace(/\.mdx$/, ''),
    } as PostFrontmatter,
    content,
  }
}

function isFutureDated(dateStr: string): boolean {
  return new Date(dateStr) > new Date()
}

export function getAllPostSummaries(): PostSummary[] {
  return getMdxFiles()
    .map(parsePost)
    .filter((post) => !isFutureDated(post.frontmatter.publishedAt))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    )
    .map(({ frontmatter }) => ({
      slug: frontmatter.slug,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedAt: frontmatter.publishedAt,
      tags: frontmatter.tags,
      featuredImage: frontmatter.featuredImage,
      featuredImageAlt: frontmatter.featuredImageAlt,
      readingTime: frontmatter.readingTime,
      author: frontmatter.author,
      authorRole: frontmatter.authorRole,
    }))
}

export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.mdx`
  const filePath = path.join(BLOG_DIR, filename)
  if (!fs.existsSync(filePath)) return null

  const post = parsePost(filename)
  if (isFutureDated(post.frontmatter.publishedAt)) return null
  return post
}

export function getPostsByTag(tag: TagSlug): PostSummary[] {
  return getAllPostSummaries().filter((post) => post.tags.includes(tag))
}

export function getAllSlugs(): string[] {
  return getAllPostSummaries().map((post) => post.slug)
}

export function getAllTags(): TagSlug[] {
  const tagSet = new Set<TagSlug>()
  for (const post of getAllPostSummaries()) {
    for (const tag of post.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet)
}

export function getRelatedPosts(
  currentSlug: string,
  tags: TagSlug[],
  limit = 3
): PostSummary[] {
  const all = getAllPostSummaries().filter((p) => p.slug !== currentSlug)
  const scored = all.map((post) => ({
    post,
    score: post.tags.filter((t) => tags.includes(t)).length,
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.post)
}

export function getPaginatedPosts(page: number): {
  posts: PostSummary[]
  totalPages: number
} {
  const all = getAllPostSummaries()
  const totalPages = Math.ceil(all.length / POSTS_PER_PAGE)
  const start = (page - 1) * POSTS_PER_PAGE
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    totalPages,
  }
}
