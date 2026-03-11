import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { TrialScenario } from '@/components/sections/trial-scenario'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { PullQuote } from '@/components/sections/pull-quote'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Accounting, Audit & Tax',
  description:
    'Ambr AI helps accounting, audit, and tax firms develop the communication skills that turn technical expertise into lasting client relationships.',
  path: '/industries/accounting-audit-tax',
})

const useCases = [
  {
    heading: 'Delivering audit findings',
    description:
      'Train on delivering findings, discussing material weaknesses, and navigating tense audit committee presentations.',
  },
  {
    heading: 'Client advisory conversations',
    description:
      'Translate complex tax or regulatory guidance into clear, confident recommendations.',
  },
  {
    heading: 'Difficult billing discussions',
    description:
      'Train on fee disputes, scope changes, and overruns. Give your people the preparation that changes how these conversations go.',
  },
  {
    heading: 'Manager development',
    description:
      'Delivering honest feedback, handling performance issues, and developing junior consultants — conversations that shape retention and culture.',
  },
  {
    heading: 'New joiner onboarding',
    description:
      'Get junior professionals client-ready faster. Realistic conversation training with structured feedback, without pulling senior staff off billable work.',
  },
  {
    heading: 'Business development',
    description:
      'Cross-selling additional services. Pitching for new mandates. The conversations that grow your book of business are skills — and skills can be trained.',
  },
]

export default function AccountingAuditTaxPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Accounting, Audit & Tax', href: '/industries/accounting-audit-tax' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Accounting, Audit & Tax"
        heading={
          <>
            Technical expertise wins the work. Communication skills{' '}
            <em className="text-accent">keep</em> it.
          </>
        }
        subtitle="Client advisory. Audit findings. Difficult billing conversations. Manager feedback. In accounting and professional services, high-stakes conversations happen at every level — and most of them never get formally practiced. Ambr AI gives accounting, audit, and tax firms a structured way to develop the communication skills that turn technical expertise into lasting client relationships."
      />

      {/* ── Use cases ── */}
      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Use cases
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px] mb-12">
            Where AI roleplay makes the{' '}
            <em className="text-accent">difference</em>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
          {useCases.map((item, i) => (
            <Reveal key={item.heading} delay={i * 60}>
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
      </Section>

      {/* ── Try it yourself ── */}
      <TrialScenario
        className="bg-surface-white"
        characterName="Sarah"
        characterRole="CFO"
        characterInitials="SW"
        title="Deliver difficult audit findings with confidence"
        scenario="You are presenting audit findings to a client's CFO who disagrees with a material finding. Walk them through your position."
        socialProof="This is an example scenario. Every simulation is customized to your firm's areas, client types, and terminology."
      />

      {/* ── Why accounting firms choose Ambr AI ── */}
      <FeatureGrid
        eyebrow="Why accounting firms choose Ambr AI"
        items={[
          {
            heading: 'Built around your organization\u2019s reality',
            description:
              'Your service lines, your client industries, your terminology — built into your simulations quickly and without extensive investment.',
          },
          {
            heading: 'Protects billable time',
            description:
              'Senior staff aren\u2019t pulled into training delivery — junior professionals build client-facing skills independently.',
          },
          {
            heading: 'Confidential by design',
            description:
              'Conversations stay private. Never shared across clients, never used to train models. ISO 27001 certified, GDPR compliant, EU AI Act compliant.',
          },
          {
            heading: 'Feedback that actually coaches',
            description:
              'Detailed, actionable feedback after every session — not just a summary. Coaching that changes how people communicate.',
          },
          {
            heading: 'Global, and actually global',
            description:
              '30+ languages, adjusted for cultural context. Training that reflects how business is actually done in each market.',
          },
        ]}
      />

      {/* ── Testimonial ── */}
      <PullQuote
        className="bg-surface-white"
        quote="We love it. It's great that we can customize it for our needs."
        role="L&D Manager"
        company="Professional Services Firm"
      />

      {/* ── Closing CTA ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for{' '}
            <em className="text-accent">your</em> team.
          </>
        }
        subtitle="Practice the conversations that build client trust."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
