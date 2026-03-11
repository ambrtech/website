import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/json-ld'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav
        aria-label="Breadcrumb"
        className="pt-24 md:pt-28 px-container-mobile md:px-container bg-surface-white"
      >
        <div className="mx-auto max-w-site">
          <ol className="flex items-center gap-2 text-caption text-copy-light">
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              return (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-copy-faint">/</span>
                  )}
                  {isLast ? (
                    <span className="text-copy-mid">{item.name}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
