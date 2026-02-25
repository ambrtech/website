import Link from 'next/link'

const footerNav = {
  Platform: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Use cases', href: '/use-cases' },
    { label: 'Custom scenarios', href: '/custom-scenarios' },
    { label: 'Demo', href: '/contact' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Customers', href: '/customers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],
  Trust: [
    { label: 'Security', href: '/security' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Trust Centre', href: '/trust' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-container-mobile md:px-container pt-16 pb-8">
      <div className="mx-auto max-w-site grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-heading text-logo text-dark tracking-heading">
            Ambr AI
          </Link>
          <p className="text-nav text-copy-light max-w-[280px] leading-relaxed mt-3">
            Realistic AI voice simulations, custom-built for enterprise teams.
          </p>
        </div>
        {Object.entries(footerNav).map(([heading, links]) => (
          <div key={heading}>
            <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
              {heading}
            </p>
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nav text-copy-mid transition-colors hover:text-accent py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-site mt-12 pt-6 border-t border-border flex justify-between text-eyebrow text-copy-light">
        <span>&copy; {new Date().getFullYear()} Ambr Technologies Limited</span>
      </div>
    </footer>
  )
}
