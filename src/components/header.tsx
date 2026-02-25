import Link from 'next/link'

const nav = [
  { label: 'Platform', href: '/platform' },
  { label: 'Customers', href: '/customers' },
  { label: 'Security', href: '/security' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-white/90 backdrop-blur-xl border-b border-transparent transition-all">
      <div className="mx-auto max-w-site px-container-mobile md:px-container flex items-center justify-between h-16 md:h-header">
        <Link href="/" className="font-heading text-logo text-dark tracking-heading">
          Ambr AI
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-nav text-copy-mid transition-colors hover:text-dark"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-nav border border-dark text-dark rounded-brand-sm px-5 py-2 transition-all hover:bg-dark hover:text-surface-white"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </header>
  )
}
