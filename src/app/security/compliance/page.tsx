import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'

import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Compliance',
  description:
    'Ambr AI holds ISO 27001 certification, maintains GDPR compliance, and aligns with the EU AI Act. Enterprise-grade security, independently verified.',
  path: '/security/compliance',
})

const certifications = [
  {
    icon: '/icons/badge-iso.svg',
    title: 'ISO 27001 Certified',
    badge: 'Certified',
    body: 'Ambr AI holds ISO 27001 certification, the international standard for information security management. Our certification covers the design, development, and delivery of the entire Ambr AI platform, including all supporting infrastructure and operational processes.',
    footnote: 'Certification is independently audited and renewed annually.',
    details: [
      { label: 'Issuing body', value: 'Placeholder' },
      { label: 'Certificate number', value: 'Placeholder' },
    ],
  },
  {
    icon: '/icons/badge-gdpr.svg',
    title: 'GDPR Compliant',
    badge: 'Compliant',
    body: 'GDPR compliance is foundational to how we operate, not a bolt-on.',
    bullets: [
      'Lawful basis is documented for all processing activities',
      'Data Processing Agreements are executed with every enterprise client',
      'Data Subject Access Request processes are in place and tested',
      'Privacy-by-design principles are embedded in product development from the outset',
    ],
    footnote:
      'Ambr AI is EU-based and hosted on Google Cloud infrastructure in the UK, with the ability to support additional regions on request.',
  },
  {
    icon: '/icons/badge-eu-ai-act.png',
    wide: true,
    title: 'EU AI Act',
    badge: 'Aligned',
    body: 'Ambr AI is classified as a non-high-risk system under Article 6(3) of the EU AI Act. Our platform is documented in accordance with the Act\u2019s risk-based framework, and transparency obligations are built into the product by design.',
    footnote:
      'We maintain ongoing review of our classification and documentation as regulatory guidance evolves.',
  },
  {
    title: 'Penetration Testing',
    badge: 'Ongoing',
    body: 'Our platform undergoes regular third-party penetration testing to identify and address vulnerabilities. This is complemented by continuous automated security monitoring across our codebase and infrastructure.',
  },
]

const clients = [
  { name: 'Deloitte', serif: true },
  { name: 'Skyscanner', serif: false },
  { name: 'IWG', serif: false },
  { name: 'DXC Technology', serif: false },
  { name: 'Binance', serif: false },
]

export default function CompliancePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Security', href: '/security/compliance' },
          { name: 'Compliance', href: '/security/compliance' },
        ]}
      />

      <PageHero
        eyebrow="Compliance"
        heading={
          <>
            Enterprise-grade security.{' '}
            <em className="text-accent">Independently</em> verified.
          </>
        }
        subtitle="Our clients include global consulting firms and publicly listed enterprises. Our security standards reflect theirs."
        compact
      />

      {/* ── Certifications ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          {/* Primary certification: ISO 27001 — featured layout */}
          <Reveal>
            <div className="bg-surface-alt rounded-brand p-8 md:p-12 mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {certifications[0].icon && (
                    <div className="w-10 h-10 relative shrink-0">
                      <Image
                        src={certifications[0].icon}
                        alt=""
                        fill
                        className="object-contain filter-badge-light"
                        sizes="56px"
                        unoptimized={certifications[0].icon.endsWith('.svg')}
                      />
                    </div>
                  )}
                  <h2 className="font-heading text-label tracking-heading text-dark">
                    {certifications[0].title}
                  </h2>
                </div>
                <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft bg-surface-white rounded-brand-sm px-3 py-1 shrink-0 self-start">
                  {certifications[0].badge}
                </span>
              </div>

              <p className="text-body-sm text-copy-mid leading-[1.75] max-w-[720px] mb-4">
                {certifications[0].body}
              </p>

              {certifications[0].footnote && (
                <p className="text-caption text-copy-light leading-[1.7] mt-4">
                  {certifications[0].footnote}
                </p>
              )}

              {certifications[0].details && (
                <div className="flex flex-wrap gap-x-10 gap-y-2 mt-6 pt-6 border-t border-dark/[0.06]">
                  {certifications[0].details.map((d) => (
                    <div key={d.label}>
                      <span className="text-caption text-copy-light">
                        {d.label}:{' '}
                      </span>
                      <span className="text-caption text-copy-mid font-body-medium">
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          {/* Secondary certifications: 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {certifications.slice(1, 3).map((cert, i) => (
              <Reveal key={cert.title} delay={(i + 1) * 60}>
                <div className="border border-border rounded-brand p-8 md:p-10 h-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {cert.icon && (
                        <div className={`${cert.wide ? 'w-14' : 'w-10'} h-10 relative shrink-0`}>
                          <Image
                            src={cert.icon}
                            alt=""
                            fill
                            className="object-contain filter-badge-light"
                            sizes="56px"
                            unoptimized={cert.icon.endsWith('.svg')}
                          />
                        </div>
                      )}
                      <h2 className="font-heading text-label tracking-heading text-dark">
                        {cert.title}
                      </h2>
                    </div>
                    <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft rounded-brand-sm px-3 py-1 shrink-0 self-start">
                      {cert.badge}
                    </span>
                  </div>

                  <p className="text-body-sm text-copy-mid leading-[1.75] max-w-[720px] mb-4">
                    {cert.body}
                  </p>

                  {cert.bullets && (
                    <ul className="mb-4 space-y-2">
                      {cert.bullets.map((item) => (
                        <li
                          key={item}
                          className="text-body-sm text-copy-mid leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {cert.footnote && (
                    <p className="text-caption text-copy-light leading-[1.7] mt-4">
                      {cert.footnote}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Penetration testing — full width, subtle accent left border */}
          <Reveal delay={180}>
            <div className="border border-border rounded-brand p-8 md:p-10 border-l-2 border-l-accent-soft">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <h2 className="font-heading text-label tracking-heading text-dark">
                  {certifications[3].title}
                </h2>
                <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft rounded-brand-sm px-3 py-1 shrink-0 self-start">
                  {certifications[3].badge}
                </span>
              </div>
              <p className="text-body-sm text-copy-mid leading-[1.75] max-w-[720px]">
                {certifications[3].body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Client logos ── */}
      <section className="px-container-mobile md:px-container py-section-mobile md:py-section bg-surface-alt">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-8 text-center">
              Trusted by
            </p>
            <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
              {clients.map((client) => (
                <span
                  key={client.name}
                  className={`text-dark/20 select-none ${
                    client.serif
                      ? 'font-heading text-base tracking-heading'
                      : 'font-body-medium tracking-wide uppercase text-xs'
                  }`}
                >
                  {client.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust Portal ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-dark text-surface-white">
        <div className="mx-auto max-w-site text-center">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Trust Portal
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
              Detailed documentation,{' '}
              <em className="text-accent">on demand</em>.
            </h2>
            <p className="text-body text-copy-light leading-[1.75] max-w-[560px] mx-auto mb-8">
              For security questionnaire responses, policy documentation, and
              detailed compliance information, visit our dedicated trust portal.
            </p>
            <a
              href="https://security.ambr.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-brand-sm bg-accent text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent-hover hover:-translate-y-px hover:shadow-lg"
            >
              Visit security.ambr.ai
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cross-links ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site text-center">
          <Reveal>
            <p className="font-heading text-label leading-[1.3] tracking-heading mb-6">
              Need something specific for your security review?{' '}
              <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors">
                Talk to us
              </Link>
              .
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Link
                href="/security/data-protection"
                className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
              >
                Read how we protect your data &rarr;
              </Link>
              <span className="text-copy-faint" aria-hidden="true">&middot;</span>
              <Link
                href="/security/responsible-ai"
                className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
              >
                Our approach to responsible AI &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
