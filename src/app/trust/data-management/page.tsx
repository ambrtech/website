import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { TrustBadges } from '@/components/sections/trust-badges'
import { GrainCta } from '@/components/sections/grain-cta'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'How We Manage Data',
  description:
    'A plain-language overview of how Ambr AI collects, processes, and protects your data. Full transparency on retention, isolation, and your control.',
  path: '/trust/data-management',
})

const dataTypes = [
  {
    category: 'Voice & Conversation Data',
    what: 'Audio recordings and transcripts generated during simulation sessions.',
    why: 'To deliver real-time AI conversation and post-session feedback to learners.',
    retention: 'Retained for the duration of your contract. Deleted on termination or request.',
  },
  {
    category: 'Performance & Analytics',
    what: 'Aggregated session metrics, feedback scores, and capability trends.',
    why: 'To provide organizational insights and track development over time.',
    retention: 'Retained for reporting purposes during your contract. Anonymized or deleted on termination.',
  },
  {
    category: 'Usage Metadata',
    what: 'Session timestamps, feature usage, and platform interaction logs.',
    why: 'To maintain service reliability, troubleshoot issues, and improve the platform.',
    retention: 'Retained in anonymized form. Identifiable metadata deleted with account data.',
  },
  {
    category: 'Account Information',
    what: 'Names, email addresses, roles, and organizational structure.',
    why: 'To provision accounts, manage permissions, and deliver communications.',
    retention: 'Retained for the duration of the account. Deleted on termination or request.',
  },
]

const neverCommitments = [
  {
    heading: 'Sell or share your data',
    description:
      'Client data is never sold, licensed, shared, or made available to any third party for their own purposes. This is a contractual commitment, not a policy statement.',
  },
  {
    heading: 'Train external AI models',
    description:
      "We do not use client voice data, transcripts, or scenario content to train, fine-tune, or improve any AI model — ours or anyone else's.",
  },
  {
    heading: 'Commingle client data',
    description:
      "Each client's data is logically isolated. There is no shared data layer, no cross-client analytics, and no pooled training data. Your data serves your organization alone.",
  },
  {
    heading: 'Retain data beyond your control',
    description:
      'When your contract ends or you request deletion, we delete your data in accordance with documented procedures and applicable regulatory requirements. No exceptions.',
  },
]

export default function DataManagementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'AI Trust & Safety', href: '/trust/security-certifications' },
          { name: 'How We Manage Data', href: '/trust/data-management' },
        ]}
      />

      <PageHero
        eyebrow="Data Management"
        heading={
          <>
            Your data. Your <em className="text-accent">control</em>.
          </>
        }
        subtitle="Ambr AI processes sensitive conversation data. We treat that with the seriousness it deserves. This page explains, in plain terms, what data we collect, how we handle it, and what we will never do with it."
        compact
      />

      {/* -- What We Collect -- */}
      <Section>
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              What We Collect
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[640px]">
              A complete inventory of the data we process, why we process it, and how long we keep it.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6">
          {dataTypes.map((item) => (
            <Reveal key={item.category}>
              <div className="border border-border rounded-brand-md p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr_1.5fr_1.5fr_1fr] gap-6 md:gap-8">
                  <div>
                    <p className="text-caption font-body-medium uppercase tracking-eyebrow text-copy-light mb-1">
                      Category
                    </p>
                    <p className="font-heading text-label text-dark">
                      {item.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-caption font-body-medium uppercase tracking-eyebrow text-copy-light mb-1">
                      What we collect
                    </p>
                    <p className="text-body-sm text-copy-mid leading-relaxed">
                      {item.what}
                    </p>
                  </div>
                  <div>
                    <p className="text-caption font-body-medium uppercase tracking-eyebrow text-copy-light mb-1">
                      Why
                    </p>
                    <p className="text-body-sm text-copy-mid leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                  <div>
                    <p className="text-caption font-body-medium uppercase tracking-eyebrow text-copy-light mb-1">
                      Retention
                    </p>
                    <p className="text-body-sm text-copy-mid leading-relaxed">
                      {item.retention}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -- What We Do With It -- */}
      <FeatureGrid
        className="bg-surface-white"
        eyebrow="How We Use Data"
        heading="Three purposes. No exceptions."
        items={[
          {
            heading: 'Deliver the service',
            description:
              'Voice data and transcripts are processed in real time to power AI conversation partners and generate post-session feedback. This is the core function of the platform.',
          },
          {
            heading: 'Generate aggregated insights',
            description:
              'Performance data is aggregated at the organizational level to provide capability trends, readiness scores, and development analytics to your administrators.',
          },
          {
            heading: 'Improve the platform',
            description:
              'Anonymized usage metadata helps us identify reliability issues, optimize performance, and improve the user experience. No identifiable client data is used for this purpose.',
          },
        ]}
      />

      {/* -- What We Will Never Do -- */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                What We Will Never Do
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[640px]">
                Contractual commitments. Not aspirational statements.
              </h2>
              <p className="text-body text-copy-mid leading-[1.75] max-w-[580px] mt-4">
                These are binding terms in our enterprise agreements, not marketing promises. They are auditable and enforceable.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16">
            {neverCommitments.map((item) => (
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

      {/* -- Data Isolation -- */}
      <Section className="bg-surface-white">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Architecture
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Data isolation by design
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Client data is logically isolated at every layer of our infrastructure. Each organization operates within its own bounded environment with independent access controls, encryption keys, and audit trails.
                </p>
                <p>
                  There is no shared data store, no cross-client processing pipeline, and no mechanism by which one organization&apos;s data can be accessed by another. This architecture is validated as part of our ISO 27001 audit cycle.
                </p>
              </div>
            </div>
            <div className="border border-border rounded-brand-md p-8 md:p-10 bg-surface-white">
              <h3 className="font-heading text-label text-dark mb-6">
                Isolation guarantees
              </h3>
              <ul className="space-y-4">
                {[
                  'Logical tenant separation across all data stores',
                  'Per-client encryption keys managed via cloud KMS',
                  'Independent access control policies per organization',
                  'Audit logs scoped to individual client environments',
                  'No shared processing pipelines between clients',
                  'Architecture validated in annual ISO 27001 audits',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-body-sm text-copy-mid leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* -- Retention & Deletion -- */}
      <Section>
        <Reveal>
          <div className="max-w-[680px]">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Retention & Deletion
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Clear timelines. No ambiguity.
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                Data retention periods are documented in our Data Processing Agreements and vary by data type. In all cases, identifiable client data is deleted upon contract termination unless a longer retention period is required by law.
              </p>
              <p>
                Clients may request data deletion at any time during the contract term. Deletion requests are processed within 30 days and confirmed in writing. Backup copies are purged within the subsequent backup rotation cycle.
              </p>
              <p>
                Anonymized, aggregated data that cannot be linked to any individual or organization may be retained for platform improvement purposes. This data contains no identifiable information.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* -- Human-Centered AI -- */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container border-t border-border bg-surface-white">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="max-w-[680px]">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Human-Centered AI
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                AI that serves people. Not the other way around.
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Ambr AI exists to help people develop through practice. Every data decision we make is evaluated against a straightforward question: does this serve the learner and the organization, or does it serve us?
                </p>
                <p>
                  We collect only what is necessary to deliver the training experience and the organizational insights our clients pay for. We do not monetize data, build advertising profiles, or pursue secondary uses. The value exchange is simple: you pay for a service, we deliver it, and your data stays yours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Trust Bar -- */}
      <TrustBadges
        badges={[
          { label: 'ISO 27001', description: 'Certified' },
          { label: 'GDPR', description: 'Compliant' },
          { label: 'EU AI Act', description: 'Aligned' },
        ]}
      />

      {/* -- Cross-links -- */}
      <Section className="bg-surface-white">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/trust/security-certifications"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Also in this section
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                Security Certifications
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                ISO 27001, GDPR, EU AI Act alignment, and continuous security monitoring.
              </p>
            </Link>
            <Link
              href="/trust/ai-ethics"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Next
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                AI & Ethics
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                Our principles for responsible AI in workplace training, including bias mitigation and governance.
              </p>
            </Link>
          </div>
        </Reveal>
      </Section>

      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> team.
          </>
        }
        subtitle="We'll build a custom simulation using your real scenarios. No generic demos."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
