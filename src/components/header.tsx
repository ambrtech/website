import Link from 'next/link'

const nav = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Customers', href: '/customers' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-white/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-site px-container-mobile md:px-container flex items-center justify-between h-16 md:h-18">
        <Link href="/" className="font-heading text-xl text-dark">
          Ambr
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-copy-mid transition-colors hover:text-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-brand bg-dark text-surface-white px-5 py-2 text-sm font-body-medium transition-colors hover:bg-dark-mid"
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}
