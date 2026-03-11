import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'

const footerNav = {
  Product: [
    { label: 'How It Works', href: '/product/how-it-works' },
    { label: 'AI Roleplay', href: '/product/ai-roleplay' },
    { label: 'Admin Experience', href: '/product/admin-experience' },
    { label: 'Integrations', href: '/product/integrations' },
    { label: 'Languages', href: '/product/languages' },
  ],
  Industries: [
    { label: 'Consulting & Advisory', href: '/industries/consulting-advisory' },
    { label: 'Accounting & Tax', href: '/industries/accounting-audit-tax' },
    { label: 'Legal', href: '/industries/legal' },
    { label: 'Retail & Hospitality', href: '/industries/retail-hospitality' },
    { label: 'Technology', href: '/industries/technology' },
  ],
  Company: [
    { label: 'About', href: '/company' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Security: [
    { label: 'Compliance', href: '/security/compliance' },
    { label: 'Data Protection', href: '/security/data-protection' },
    { label: 'Responsible AI', href: '/security/responsible-ai' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-container-mobile md:px-container pt-16 pb-8">
      <div className="mx-auto max-w-site">
        {/* Logo and tagline */}
        <div className="mb-12">
          <Link href="/" aria-label="Ambr AI home" className="inline-flex items-center text-copy-light">
            <BrandLogo className="h-6 w-auto md:h-7" />
          </Link>
          <p className="text-nav text-copy-light max-w-[280px] leading-relaxed mt-3">
            Realistic AI voice simulations, custom-built for enterprise teams.
          </p>
        </div>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8">
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                {heading}
              </p>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.href + link.label}>
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
      </div>

      <div className="mx-auto max-w-site mt-12 pt-6 border-t border-border flex justify-between text-eyebrow text-copy-light">
        <span>&copy; {new Date().getFullYear()} Ambr Technologies Limited</span>
      </div>
    </footer>
  )
}
