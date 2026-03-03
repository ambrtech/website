import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { TrustBadges } from '@/components/sections/trust-badges'
import { CTA } from '@/components/sections/cta'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Security Certifications',
  description:
    'Ambr AI holds ISO 27001 certification, maintains GDPR compliance, and aligns with the EU AI Act. Enterprise-grade security, independently verified.',
  path: '/trust/security-certifications',
})

const certifications = [
  {
    title: 'ISO 27001 Certified',
    badge: 'Certified',
    description:
      'Our information security management system is certified to ISO 27001, the international standard for information security. Certification covers the design, development, and delivery of AI-powered conversation simulations and is maintained through independent annual audits.',
    details: [
      'Independent third-party audits conducted annually',
      'Covers data handling, access controls, and incident response',
      'Continuous monitoring between audit cycles',
      'Certificate available on request for procurement review',
    ],
  },
  {
    title: 'GDPR Compliant',
    badge: 'Compliant',
    description:
      'GDPR compliance is foundational to how we operate, not a feature we added retroactively. Lawful basis is documented for every processing activity. Privacy-by-design principles are embedded across our platform architecture, data handling processes, and organizational policies.',
    details: [
      'Data Processing Agreements available for all enterprise clients',
      'Full support for Data Subject Access Requests (DSARs)',
      'Privacy-by-design embedded in product development',
      'EU-based data processing available on request',
    ],
  },
  {
    title: 'EU AI Act Aligned',
    badge: 'Aligned',
    description:
      'We have proactively aligned our AI development and deployment practices with the EU AI Act risk-based framework. As a training and simulation platform, we operate within the limited-risk category and maintain transparency obligations accordingly.',
    details: [
      'Risk classification documented and reviewed quarterly',
      'Transparency disclosures for AI-generated interactions',
      'Human oversight mechanisms built into all simulations',
      'Ongoing monitoring of regulatory developments',
    ],
  },
  {
    title: 'Continuous Security Monitoring',
    badge: 'Active',
    description:
      'Our codebase and infrastructure are continuously monitored by Aikido Security for vulnerabilities, dependency risks, and configuration issues. This provides real-time visibility into our security posture beyond periodic audit cycles.',
    details: [
      'Automated vulnerability scanning across all repositories',
      'Dependency risk monitoring and alerting',
      'Infrastructure configuration analysis',
      'Real-time security posture dashboard',
    ],
  },
]

const dataCommitments = [
  {
    heading: 'No cross-client data sharing',
    description:
      "Client data is logically isolated at every layer. One organization's training data, scenarios, and learner performance is never accessible to another.",
  },
  {
    heading: 'No model training on client data',
    description:
      'We do not use client voice data, transcripts, or scenario content to train or fine-tune AI models. Your data delivers your training outcomes. Nothing else.',
  },
  {
    heading: 'Full data isolation',
    description:
      'Each client environment is architecturally separated. Access controls, encryption boundaries, and audit logs operate independently per organization.',
  },
  {
    heading: 'Deletion on request',
    description:
      'Client data is deleted upon contract termination or on request, in accordance with documented retention policies and applicable regulatory requirements.',
  },
]

export default function SecurityCertificationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'AI Trust & Safety', href: '/trust/security-certifications' },
          { name: 'Security Certifications', href: '/trust/security-certifications' },
        ]}
      />

      <PageHero
        eyebrow="Security"
        heading={
          <>
            Enterprise-grade security.{' '}
            <em className="text-accent">Independently</em> verified.
          </>
        }
        subtitle="Our security posture is built for organizations where data protection is non-negotiable. Certified, audited, and continuously monitored."
        compact
      />

      {/* -- Certifications & Standards -- */}
      <Section>
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Certifications & Standards
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              Verified by independent auditors. Maintained year-round.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-8 md:gap-10">
          {certifications.map((cert) => (
            <Reveal key={cert.title}>
              <div className="border border-border rounded-brand-md p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <h3 className="font-heading text-label text-dark">
                    {cert.title}
                  </h3>
                  <span className="inline-block text-caption font-body-medium uppercase tracking-eyebrow text-accent border border-accent-soft rounded-brand-sm px-3 py-1 shrink-0 self-start">
                    {cert.badge}
                  </span>
                </div>
                <p className="text-body-sm text-copy-mid leading-relaxed mb-6 max-w-[680px]">
                  {cert.description}
                </p>
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                  {cert.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-body-sm text-copy-light leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -- Data Commitments -- */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Contractual Data Commitments
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[640px]">
                What we commit to in writing. Not marketing language — contract terms.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16">
            {dataCommitments.map((item) => (
              <Reveal key={item.heading}>
                <div className="py-6 border-t border-border">
                  <h3 className="font-heading text-label text-dark mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-body-sm text-copy-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Trust Bar -- */}
      <TrustBadges
        badges={[
          { label: 'ISO 27001', description: 'Certified' },
          { label: 'GDPR', description: 'Compliant' },
          { label: 'EU AI Act', description: 'Aligned' },
          { label: 'Aikido Security', description: 'Monitored' },
        ]}
      />

      {/* -- Cross-links -- */}
      <Section>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/trust/data-management"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Next
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                How We Manage Data
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                A plain-language overview of what we collect, how we use it, and what we will never do with your data.
              </p>
            </Link>
            <Link
              href="/trust/ai-ethics"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Also in this section
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                AI & Ethics
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                Our principles for responsible AI in workplace training, including bias mitigation and human oversight.
              </p>
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  )
}
