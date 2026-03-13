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
      'Voice data and conversation transcripts power real-time AI responses, simulation feedback, and personalized coaching. This data also feeds admin dashboards, giving organizations insight into capability gaps and training impact.',
  },
  {
    label: 'Usage metadata',
    description:
      'Session timestamps, scenario selections, and engagement metrics support admin reporting and help us refine the platform experience. This metadata is never linked to individual learner identities externally.',
  },
  {
    label: 'Account information',
    description:
      'Names, email addresses, and organizational roles are used solely for platform access and administration. Account data is never used for marketing, profiling, or shared beyond your organization.',
  },
]

const retentionFeatures = [
  {
    label: 'Configurable retention',
    description: 'Retention periods are configurable per organization to match your internal policies.',
  },
  {
    label: 'Granular selection',
    description: 'Choose what is retained: audio recordings, transcripts, simulation feedback, or any combination.',
  },
  {
    label: 'Deletion on request',
    description: 'Data can be deleted at any time during the contract term. All customer data is deleted within the agreed timeframe on contract termination.',
  },
  {
    label: 'Verified deletion',
    description: 'Deletion is verified and documented, with confirmation provided to your organization.',
  },
]

const resources = [
  { label: 'Sub-processors', href: 'https://security.ambr.ai', external: true },
  { label: 'Data Processing Agreement', href: 'https://ambr.ai/dpa', external: true },
  { label: 'Trust Portal', href: 'https://security.ambr.ai', external: true },
  { label: 'Compliance certifications', href: '/security/compliance', external: false },
  { label: 'Responsible AI', href: '/security/responsible-ai', external: false },
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
        subtitle="Complete transparency on what we collect, how we store it, and what we'll never do with it. Your data is never sold. Your conversations are never used to train AI models."
        compact
      />

      {/* ── Data types ── */}
      <section className="pb-10 md:pb-16 px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-6 eyebrow-hairline">
              What we collect and why
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {dataTypes.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="bg-surface-white rounded-brand p-7 md:p-8 h-full">
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

      {/* ── Retention, Control, and Residency ── */}
      <section className="py-10 md:py-16 px-container-mobile md:px-container bg-surface-white">
        <div className="mx-auto max-w-site">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
            <Reveal>
              <div>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                  Retention, Control, and Residency
                </p>
                <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-5">
                  Granular control over how your data is stored.
                </h2>
                <p className="text-body text-copy-mid leading-[1.75]">
                  Ambr AI is hosted on Google Cloud infrastructure in the UK. For
                  organizations with specific residency requirements, we support
                  data storage in additional regions on request, including
                  per-customer configuration for audio recordings.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-5">
                {retentionFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-0.5 shrink-0">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4.5 h-4.5 text-accent">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-body-sm font-body-medium text-dark leading-[1.5] mb-1">
                        {feature.label}
                      </p>
                      <p className="text-body-sm text-copy-mid leading-[1.7]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Resources & links ── */}
      <section className="py-10 md:py-16 px-container-mobile md:px-container border-t border-border">
        <div className="mx-auto max-w-site text-center">
          <Reveal>
            <p className="font-heading text-label leading-[1.3] tracking-heading mb-8">
              Have a specific data handling question?{' '}
              <Link href="/find-out-more" className="text-accent hover:text-accent-hover transition-colors">
                Talk to us
              </Link>
              .
            </p>
            <div className="flex items-center justify-center gap-x-6 gap-y-3 flex-wrap">
              {resources.map((item, i) => (
                <span key={item.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <span className="text-copy-faint" aria-hidden="true">&middot;</span>
                  )}
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
                    >
                      {item.label} &rarr;
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
                    >
                      {item.label} &rarr;
                    </Link>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
