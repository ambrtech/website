import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { Reveal } from '@/components/reveal'
import { ComplianceCard } from '@/components/compliance-card'

export const metadata = createMetadata({
  title: 'Compliance',
  description:
    'Ambr AI holds ISO 27001 certification, maintains GDPR compliance, and aligns with the EU AI Act. Enterprise-grade security, independently verified.',
  path: '/security/compliance',
})

const secondaryCredentials = [
  {
    icon: '/icons/badge-gdpr.svg',
    title: 'GDPR Compliant',
    badge: 'Compliant',
    body: 'GDPR compliance is foundational to how we operate.',
    bullets: [
      'Lawful basis is documented for all processing activities',
      'Data Processing Agreements are executed with every customer',
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
    title: 'Ongoing Verification',
    badge: 'Ongoing',
    body: 'Our platform undergoes regular third-party penetration testing and vulnerability assessments to identify and address security risks. This is complemented by continuous automated monitoring across our codebase and infrastructure.',
  },
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
        subtitle="Our customers include global consulting firms and publicly listed enterprises. Our security standards reflect theirs."
      />

      {/* ── Certifications ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          {/* Lead credential: ISO 27001 */}
          <Reveal>
            <div className="bg-surface-white rounded-brand p-8 md:p-12 mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative shrink-0">
                    <Image
                      src="/icons/badge-iso.svg"
                      alt=""
                      fill
                      className="object-contain filter-badge-light"
                      sizes="56px"
                      unoptimized
                    />
                  </div>
                  <h2 className="font-heading text-label tracking-heading text-dark">
                    ISO 27001 Certified
                  </h2>
                </div>
                <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft bg-surface-white rounded-brand-sm px-3 py-1 shrink-0 self-start">
                  Certified
                </span>
              </div>

              <p className="text-body-sm text-copy-mid leading-[1.75] max-w-[720px] mb-4">
                Ambr AI holds ISO 27001 certification, the international
                standard for information security management. Our certification
                covers the design, development, and delivery of the entire Ambr
                AI platform, including all supporting infrastructure and
                operational processes.
              </p>

              <p className="text-caption text-copy-light leading-[1.7] mt-4">
                Certification is independently audited and renewed annually.
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-2 mt-6 pt-6 border-t border-dark/[0.06]">
                <div>
                  <span className="text-caption text-copy-light">
                    Issuing body:{' '}
                  </span>
                  <span className="text-caption text-copy-mid font-body-medium">
                    Placeholder
                  </span>
                </div>
                <div>
                  <span className="text-caption text-copy-light">
                    Certificate number:{' '}
                  </span>
                  <span className="text-caption text-copy-mid font-body-medium">
                    Placeholder
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Unified 3-column grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryCredentials.map((cert, i) => (
              <Reveal key={cert.title} delay={(i + 1) * 60} className="flex">
                <ComplianceCard
                  icon={cert.icon}
                  wide={cert.wide}
                  title={cert.title}
                  badge={cert.badge}
                  body={cert.body}
                  bullets={cert.bullets}
                  footnote={cert.footnote}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client logos ── */}
      <LogoCloud className="bg-surface-white" />

      {/* ── Trust Portal + Cross-links ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-dark text-surface-white">
        <div className="mx-auto max-w-site text-center">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Security Resources
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
              Trust Portal
            </h2>
            <p className="text-body text-copy-light leading-[1.75] max-w-[560px] mx-auto mb-8">
              Security questionnaire responses, policy documentation, and
              detailed compliance information are available through our
              dedicated trust portal.
            </p>
            <a
              href="https://security.ambr.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-brand-sm bg-accent text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent-hover hover:-translate-y-px hover:shadow-lg"
            >
              View Trust Portal
            </a>

            <div className="mt-12 pt-8 border-t border-surface-white/10">
              <p className="font-heading text-label leading-[1.3] tracking-heading mb-6 text-surface-white">
                Need something specific for your security review?{' '}
                <Link href="/find-out-more" className="text-accent hover:text-accent-hover transition-colors">
                  Talk to us
                </Link>
                .
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href="/security/data-protection"
                  className="text-body-sm font-body-medium text-copy-light hover:text-accent transition-colors"
                >
                  How we protect your data &rarr;
                </Link>
                <span className="text-surface-white/20" aria-hidden="true">&middot;</span>
                <Link
                  href="/security/responsible-ai"
                  className="text-body-sm font-body-medium text-copy-light hover:text-accent transition-colors"
                >
                  Our approach to responsible AI &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
