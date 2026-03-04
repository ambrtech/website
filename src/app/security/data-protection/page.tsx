import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'

import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Data Protection',
  description:
    'How Ambr AI handles, stores, and protects your data. Full transparency on data isolation, retention, and your rights.',
  path: '/security/data-protection',
})

const dataTypes = [
  {
    label: 'Voice & transcripts',
    description:
      'Powers real-time AI responses, simulation feedback, and personalized coaching. Also feeds admin dashboards and reporting, giving organizations insight into capability gaps and training impact.',
  },
  {
    label: 'Usage metadata',
    description:
      'Session timestamps, scenario selections, and engagement metrics. Supports admin reporting and helps us refine the platform experience.',
  },
  {
    label: 'Account information',
    description:
      'Names, email addresses, and organizational roles. Used solely for platform access and administration.',
  },
]

const commitments = [
  {
    heading: 'Never sold or shared',
    description:
      'Client data is never sold, licensed, or shared with third parties.',
  },
  {
    heading: 'Never used for model training',
    description:
      'Your conversations are never used to train AI models.',
  },
  {
    heading: 'Fully isolated',
    description:
      'Every client\u2019s data is logically isolated at the infrastructure level. Conversation data, user profiles, and organizational configurations are fully separated.',
  },
  {
    heading: 'Organization-scoped reporting',
    description:
      'Admin reporting reflects only that organization\u2019s data. No cross-client visibility, ever.',
  },
]

const retentionPoints = [
  'Retention periods are configurable per organization',
  'Clients choose what is retained: audio recordings, transcripts, simulation feedback, or any combination',
  'Data can be deleted at any time during the contract term on request',
  'All client data is deleted within the agreed timeframe on contract termination',
  'Deletion is verified and documented',
]

export default function DataProtectionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Security', href: '/security/compliance' },
          { name: 'Data Protection', href: '/security/data-protection' },
        ]}
      />

      <PageHero
        eyebrow="Data Protection"
        heading={
          <>
            Your data. Your <em className="text-accent">control</em>.
          </>
        }
        subtitle="How we handle your data, in plain terms."
        compact
      />

      {/* ── Data and Purpose ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="max-w-[720px] mb-10">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Data and Purpose
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                We collect only what is necessary.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75]">
                Ambr AI collects only what is necessary to deliver and improve the
                service. Internal analysis of usage patterns helps us improve our
                product.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {dataTypes.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="border border-border rounded-brand p-7 h-full">
                  <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-4">
                    {item.label}
                  </p>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data Commitments ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-dark text-surface-white">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="max-w-[600px] mb-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Data Commitments
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading">
                Contractual commitments, not aspirational statements.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-16">
            {commitments.map((item, i) => (
              <Reveal key={item.heading} delay={i * 60}>
                <div className="py-6 border-t border-surface-white/10">
                  <h3 className="font-heading text-label tracking-heading mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-body-sm text-copy-light leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Retention, Control, and Residency ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
          <Reveal>
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Retention &amp; Residency
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                Granular control over how your data is stored.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75]">
                Ambr AI is hosted on Google Cloud infrastructure in the UK. For
                organizations with specific residency requirements, we support
                data storage in additional regions on request, including
                per-client configuration for audio recordings.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3 pt-2">
              {retentionPoints.map((point) => (
                <li
                  key={point}
                  className="text-body-sm text-copy-mid leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Breach Notification + Sub-processors + Cross-links ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site max-w-[720px]">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Breach Notification
            </p>
            <p className="text-body text-copy-mid leading-[1.75] mb-8">
              Ambr AI maintains a formal incident response and breach notification
              process. In the event of a data incident, affected clients are
              notified in accordance with contractual and regulatory obligations.
            </p>

            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Sub-processors &amp; DPA
            </p>
            <p className="text-body text-copy-mid leading-[1.75]">
              A full list of sub-processors is available through our trust portal at{' '}
              <a
                href="https://security.ambr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                security.ambr.ai
              </a>
              . Our standard Data Processing Agreement is available for review at{' '}
              <a
                href="https://ambr.ai/dpa"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                ambr.ai/dpa
              </a>
              .
            </p>

            <div className="mt-12 pt-10 border-t border-border text-center">
              <p className="font-heading text-label leading-[1.3] tracking-heading mb-6">
                Have a specific data handling question?{' '}
                <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors">
                  Talk to us
                </Link>
                .
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href="/security/compliance"
                  className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
                >
                  Review our compliance certifications &rarr;
                </Link>
                <span className="text-copy-faint" aria-hidden="true">&middot;</span>
                <Link
                  href="/security/responsible-ai"
                  className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
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
