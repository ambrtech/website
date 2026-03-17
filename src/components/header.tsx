'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BrandLogo } from '@/components/brand-logo'

/* ─────────────────────────────────────────────────────
   Types
   ───────────────────────────────────────────────────── */

interface NavLink {
  label: string
  href: string
  description?: string
}

interface NavGroup {
  heading: string
  href?: string
  items: NavLink[]
}

interface DropdownMenu {
  type: 'dropdown'
  label: string
  content: (NavLink | NavGroup)[]
}

interface DirectLink {
  type: 'link'
  label: string
  href: string
}

type NavItem = DirectLink | DropdownMenu

/* ─────────────────────────────────────────────────────
   Navigation data
   ───────────────────────────────────────────────────── */

const navigation: NavItem[] = [
  {
    type: 'link',
    label: 'Customization',
    href: '/customization',
  },
  {
    type: 'dropdown',
    label: 'Product',
    content: [
      {
        label: 'What is AI Roleplay',
        href: '/product/ai-roleplay',
        description: 'How AI-powered conversation simulations transform training',
      },
      {
        label: 'Languages',
        href: '/product/languages',
        description: '30+ languages with cultural adaptation',
      },
      {
        label: 'How It Works',
        href: '/product/how-it-works',
        description: 'From setup to delivery in your organization',
      },
      {
        label: 'Integrations',
        href: '/product/integrations',
        description: 'Connect with your existing LMS and tools',
      },
      {
        label: 'Admin Experience',
        href: '/product/admin-experience',
        description: 'Manage, track and measure across teams',
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Industries',
    content: [
      {
        heading: 'Professional Services',
        items: [
          { label: 'Consulting & Advisory', href: '/industries/consulting-advisory' },
          { label: 'Accounting, Audit & Tax', href: '/industries/accounting-audit-tax' },
          { label: 'Legal', href: '/industries/legal' },
        ],
      },
      { label: 'Retail & Hospitality', href: '/industries/retail-hospitality' },
      { label: 'Technology', href: '/industries/technology' },
      { label: 'Other', href: '/industries/other' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Solutions',
    content: [
      {
        label: 'Management & Leadership',
        href: '/solutions/management-leadership',
        description: 'Develop confident, effective leaders',
      },
      {
        label: 'Sales & Negotiations',
        href: '/solutions/sales-negotiations',
        description: 'Sharpen deal-closing conversations',
      },
      {
        label: 'Customer Service',
        href: '/solutions/customer-service',
        description: 'Build empathy and resolution skills',
      },
      {
        label: 'Other',
        href: '/solutions/other',
        description: 'Explore additional training scenarios',
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Security',
    content: [
      {
        label: 'Compliance',
        href: '/security/compliance',
        description: 'ISO 27001, GDPR, and EU AI Act',
      },
      {
        label: 'Data Protection',
        href: '/security/data-protection',
        description: 'How we handle and protect your data',
      },
      {
        label: 'Responsible AI',
        href: '/security/responsible-ai',
        description: 'Our approach to ethical AI',
      },
    ],
  },
  {
    type: 'link',
    label: 'Company',
    href: '/company',
  },
  {
    type: 'link',
    label: 'FAQ',
    href: '/faq',
  },
]

/* ─────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────── */

function isGroup(item: NavLink | NavGroup): item is NavGroup {
  return 'heading' in item
}

/* ─────────────────────────────────────────────────────
   Icons
   ───────────────────────────────────────────────────── */

function ChevronIcon({ open, className }: { open?: boolean; className?: string }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={`transition-transform duration-fast ${open ? 'rotate-180' : ''} ${className ?? ''}`}
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────
   Security trust sidebar
   ───────────────────────────────────────────────────── */

const trustBadges = [
  { src: '/icons/badge-iso.svg', label: 'ISO 27001', sublabel: 'Certified' },
  { src: '/icons/badge-gdpr.svg', label: 'GDPR', sublabel: 'Compliant', size: 58 },
  { src: '/icons/badge-eu-ai-act.png', label: 'EU AI Act', sublabel: 'Ready', crop: true },
  { src: null, label: 'No model training', sublabel: 'Your data stays yours', iconVariant: 'doc' as const },
]

function SecurityTrustSidebar({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="bg-dark/90 backdrop-blur-md rounded-brand px-5 py-5 w-72 shrink-0">
      <p className="text-eyebrow-sm uppercase tracking-eyebrow text-surface-white/50 mb-5">
        Trust & compliance
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center text-center gap-2.5">
            <div className="shrink-0">
              {badge.src ? (
                badge.crop ? (
                  /* EU AI Act: crop to just the left icon */
                  <div className="w-9 h-9 relative overflow-hidden">
                    <Image
                      src={badge.src}
                      alt=""
                      width={160}
                      height={80}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-9 max-w-none brightness-0 invert opacity-60"
                    />
                  </div>
                ) : (
                  <Image
                    src={badge.src}
                    alt=""
                    width={badge.size ?? 52}
                    height={badge.size ?? 52}
                    className="brightness-0 invert opacity-60"
                  />
                )
              ) : (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-surface-white/60">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                  <rect x="9" y="13" width="6" height="5" rx="1" />
                  <path d="M10.5 13v-1.5a1.5 1.5 0 013 0V13" />
                </svg>
              )}
            </div>
            <div>
              <span className="block text-caption text-surface-white leading-tight">
                {badge.label}
              </span>
              <span className="block text-caption text-surface-white/45 leading-tight mt-0.5">
                {badge.sublabel}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/security/compliance"
        onClick={onNavigate}
        className="block text-center text-caption text-surface-white/40 hover:text-surface-white/70 transition-colors mt-5 pt-4 border-t border-surface-white/10"
      >
        Learn more &rarr;
      </Link>
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   Desktop dropdown panel content
   ───────────────────────────────────────────────────── */

function DropdownContent({
  menu,
  onNavigate,
}: {
  menu: DropdownMenu
  onNavigate: () => void
}) {
  const hasGroups = menu.content.some(isGroup)

  /* Security: links on left, trust panel on right */
  if (menu.label === 'Security') {
    return (
      <div className="flex gap-0 items-stretch max-w-3xl">
        <div className="grid grid-cols-1 gap-1 shrink-0 w-64 pr-8">
          {(menu.content as NavLink[]).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="group block py-3 px-4 rounded-brand-sm transition-colors hover:bg-surface-alt/50"
            >
              <span className="block text-body-sm text-dark group-hover:text-accent transition-colors">
                {item.label}
              </span>
              {item.description && (
                <span className="block text-caption text-copy-light mt-1 leading-relaxed">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="border-l border-border pl-8 flex items-start">
          <SecurityTrustSidebar onNavigate={onNavigate} />
        </div>
      </div>
    )
  }

  /* Industries-style: group(s) on left, standalone links on right */
  if (hasGroups) {
    const groups = menu.content.filter(isGroup) as NavGroup[]
    const links = menu.content.filter((item) => !isGroup(item)) as NavLink[]

    return (
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-5">
          {groups.map((group) => (
            <div key={group.heading}>
              {group.href ? (
                <Link
                  href={group.href}
                  onClick={onNavigate}
                  className="text-eyebrow-sm uppercase tracking-eyebrow text-copy-light hover:text-accent transition-colors inline-block mb-3"
                >
                  {group.heading}
                </Link>
              ) : (
                <p className="text-eyebrow-sm uppercase tracking-eyebrow text-copy-light mb-3">
                  {group.heading}
                </p>
              )}
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="group block py-2.5 px-4 -mx-4 rounded-brand-sm text-body-sm text-copy-mid hover:text-dark hover:bg-surface-alt/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {links.length > 0 && (
          <div>
            <p className="text-eyebrow-sm uppercase tracking-eyebrow text-copy-light mb-3">
              Industries
            </p>
            <ul className="space-y-0.5">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block py-2.5 px-4 -mx-4 rounded-brand-sm text-body-sm text-copy-mid hover:text-dark hover:bg-surface-alt/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  /* Standard grid: items with optional descriptions */
  const cols = menu.content.length === 3 ? 'grid-cols-3' : 'grid-cols-2'

  return (
    <div className={`grid ${cols} gap-1`}>
      {(menu.content as NavLink[]).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="group block p-4 rounded-brand-sm transition-colors hover:bg-surface-alt/50"
        >
          <span className="block text-body-sm text-dark group-hover:text-accent transition-colors">
            {item.label}
          </span>
          {item.description && (
            <span className="block text-caption text-copy-light mt-1 leading-relaxed">
              {item.description}
            </span>
          )}
        </Link>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   Mobile accordion content
   ───────────────────────────────────────────────────── */

function MobileDropdownContent({
  menu,
  onNavigate,
}: {
  menu: DropdownMenu
  onNavigate: () => void
}) {
  return (
    <div className="pb-3 pl-4 space-y-1">
      {menu.content.map((contentItem) =>
        isGroup(contentItem) ? (
          <div key={contentItem.heading} className="mb-2">
            {contentItem.href ? (
              <Link
                href={contentItem.href}
                onClick={onNavigate}
                className="block text-eyebrow-sm uppercase tracking-eyebrow text-copy-light mb-2 hover:text-accent transition-colors"
              >
                {contentItem.heading}
              </Link>
            ) : (
              <p className="text-eyebrow-sm uppercase tracking-eyebrow text-copy-light mb-2">
                {contentItem.heading}
              </p>
            )}
            {contentItem.items.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={onNavigate}
                className="block py-2 text-body-sm text-copy-mid hover:text-dark transition-colors"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        ) : (
          <Link
            key={(contentItem as NavLink).href}
            href={(contentItem as NavLink).href}
            onClick={onNavigate}
            className="block py-2 text-body-sm text-copy-mid hover:text-dark transition-colors"
          >
            {(contentItem as NavLink).label}
          </Link>
        )
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   Header
   ───────────────────────────────────────────────────── */

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Keyboard: Escape closes everything */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  /* Close dropdown on scroll */
  useEffect(() => {
    const handler = () => setActiveDropdown(null)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* Clean up timeout on unmount */
  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  /* ── Desktop hover handlers ── */

  const handleTriggerEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
      closeTimeout.current = null
    }, 150)
  }

  const handlePanelEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  /* ── Click handlers ── */

  const handleTriggerClick = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label))
  }

  const closeDropdown = () => setActiveDropdown(null)

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  const toggleMobileSection = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label))
  }

  /* ── Resolve active menu data ── */

  const activeMenu = activeDropdown
    ? (navigation.find(
        (item) => item.type === 'dropdown' && item.label === activeDropdown
      ) as DropdownMenu | undefined)
    : null

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Navigation bar ── */}
      <div
        className={`transition-colors duration-fast px-container-mobile md:px-container ${
          activeDropdown
            ? 'bg-surface-white'
            : 'bg-surface-white/90 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto max-w-site flex items-center justify-between h-16 lg:h-header">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Ambr AI home"
            className="flex items-center text-accent"
            onClick={() => { closeDropdown(); closeMobile() }}
          >
            <BrandLogo className="h-6.5 w-auto lg:h-[1.95rem]" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={handleMouseLeave}
          >
            {navigation.map((item) =>
              item.type === 'link' ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-nav text-copy-mid px-3 py-2 transition-colors hover:text-dark"
                  onMouseEnter={() => {
                    if (closeTimeout.current) clearTimeout(closeTimeout.current)
                    setActiveDropdown(null)
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className={`text-nav px-3 py-2 transition-colors flex items-center gap-1.5 ${
                    activeDropdown === item.label
                      ? 'text-dark'
                      : 'text-copy-mid hover:text-dark'
                  }`}
                  onMouseEnter={() => handleTriggerEnter(item.label)}
                  onClick={() => handleTriggerClick(item.label)}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronIcon open={activeDropdown === item.label} />
                </button>
              )
            )}

            {/* Desktop CTA */}
            <Link
              href="/try-for-free"
              className="text-nav bg-dark text-surface-white rounded-brand-sm px-5 py-2 ml-3 transition-colors hover:bg-dark-mid"
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current)
                setActiveDropdown(null)
              }}
            >
              Try for free
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 text-dark"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
              <path d="M1 1H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M1 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M1 13H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Desktop dropdown panel ── */}
      {activeMenu && (
        <div
          className="hidden lg:block bg-surface-white border-t border-border shadow-dropdown"
          style={{
            animation: 'dropdownIn var(--duration-normal) var(--ease-reveal) forwards',
          }}
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            key={activeDropdown}
            className="mx-auto max-w-site px-container py-8"
            style={{ animation: 'contentFade var(--duration-fast) ease forwards' }}
          >
            <DropdownContent menu={activeMenu} onNavigate={closeDropdown} />
          </div>
        </div>
      )}

      {/* ── Desktop backdrop (closes dropdown on click) ── */}
      {activeDropdown && (
        <div
          className="hidden lg:block fixed inset-0 -z-10"
          onClick={closeDropdown}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-surface-white lg:hidden flex flex-col"
          style={{ animation: 'mobileMenuIn var(--duration-fast) ease forwards' }}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between h-16 px-container-mobile shrink-0">
            <Link
              href="/"
              aria-label="Ambr AI home"
              className="flex items-center text-accent"
              onClick={closeMobile}
            >
              <BrandLogo className="h-6.5 w-auto" />
            </Link>
            <button
              className="p-2 -mr-2 text-dark"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile nav body */}
          <div className="flex-1 overflow-y-auto px-container-mobile">
            <nav className="py-2">
              {navigation.map((item) =>
                item.type === 'link' ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobile}
                    className="block py-3.5 text-body text-dark border-b border-border"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="border-b border-border">
                    <button
                      className="flex items-center justify-between w-full py-3.5 text-body text-dark"
                      onClick={() => toggleMobileSection(item.label)}
                      aria-expanded={mobileExpanded === item.label}
                    >
                      {item.label}
                      <ChevronIcon open={mobileExpanded === item.label} />
                    </button>

                    {/* Accordion body */}
                    <div
                      className="grid transition-all duration-normal ease-out"
                      style={{
                        gridTemplateRows:
                          mobileExpanded === item.label ? '1fr' : '0fr',
                      }}
                    >
                      <div className="overflow-hidden">
                        <MobileDropdownContent
                          menu={item}
                          onNavigate={closeMobile}
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </nav>
          </div>

          {/* Mobile CTA */}
          <div className="px-container-mobile pb-8 pt-4 shrink-0">
            <Link
              href="/try-for-free"
              onClick={closeMobile}
              className="block text-center bg-dark text-surface-white rounded-brand-sm px-5 py-3.5 text-body transition-colors hover:bg-dark-mid"
            >
              Try for free
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
