import Link from 'next/link'

const footerNav = {
  Product: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Security', href: '/security' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Customers', href: '/customers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark text-copy-faint">
      <div className="mx-auto max-w-site px-container-mobile md:px-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading text-xl text-surface-white">
              Ambr
            </Link>
            <p className="text-sm mt-4 leading-relaxed max-w-xs">
              Bespoke voice-based AI conversation simulations for enterprise
              workplace training.
            </p>
          </div>
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-body-medium uppercase tracking-eyebrow text-copy-light mb-4">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-surface-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-dark-mid pt-8">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Ambr Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
