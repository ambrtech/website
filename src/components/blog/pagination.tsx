import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export function Pagination({ currentPage, totalPages, basePath = '/blog/page' }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 pt-12">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? '/blog' : `${basePath}/${currentPage - 1}`}
          className="rounded-brand-sm px-4 py-2 text-body-sm text-copy-mid bg-surface-alt transition-colors hover:text-copy"
        >
          Previous
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={page === 1 ? '/blog' : `${basePath}/${page}`}
          className={`rounded-brand-sm px-3.5 py-2 text-body-sm transition-colors ${
            page === currentPage
              ? 'bg-dark text-surface-white'
              : 'text-copy-mid hover:text-copy hover:bg-surface-alt'
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="rounded-brand-sm px-4 py-2 text-body-sm text-copy-mid bg-surface-alt transition-colors hover:text-copy"
        >
          Next
        </Link>
      )}
    </nav>
  )
}
