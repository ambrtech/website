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
  title: 'Legal',
  description:
    'Ambr AI gives law firms a structured, confidential way to develop the communication skills that define careers and win mandates.',
  path: '/industries/legal',
})

const useCases = [
  {
    heading: 'Client relationship management',
    description:
      'Delivering difficult advice. Managing expectations on timelines, costs, and outcomes. Train on the conversations that build the trust clients stay for.',
  },
  {
    heading: 'Negotiation preparation',
    description:
      'Walk into settlement discussions, deal negotiations, and mediations with your approach already tested.',
  },
  {
    heading: 'Difficult billing conversations',
    description:
      'Fee disputes. Scope changes. Unexpected overruns. Give your people a safe place to practice the conversations that test client relationships most.',
  },
  {
    heading: 'Manager development',
    description:
      'Delivering honest feedback, handling performance issues, developing junior lawyers \u2014 conversations that shape retention and culture, and that benefit most from structured practice.',
  },
  {
    heading: 'Associate development',
    description:
      'Accelerate the path from technical competence to trusted advisor. Give junior lawyers the structured practice they need.',
  },
  {
    heading: 'Business development',
    description:
      'Pitching for new mandates. Expanding existing relationships. The conversations that build a legal career are skills \u2014 and skills can be trained.',
  },
]

export default function LegalPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Legal', href: '/industries/legal' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Legal"
        heading={
          <>
            Your lawyers earn trust in every conversation. Make sure they&apos;re
            ready for <em className="text-accent">each</em> one.
          </>
        }
        subtitle="Client advice. Negotiations. Difficult billing conversations. Performance feedback. In the legal industry, the ability to communicate clearly under pressure isn't just a professional skill — it's the foundation of client confidence, successful outcomes, and a sustainable practice. Ambr AI gives law firms a structured, confidential way to develop the communication skills that define careers — and win mandates."
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
        characterName="James"
        characterRole="General Counsel"
        characterInitials="JC"
        characterImage="/images/team/zoe-headshot.png"
        backgroundImage="/images/photography/glass-tower-pair-at-window.png"
        title="Advise a client on a high-stakes settlement"
        scenario="Your client is considering a settlement offer. They want your recommendation, but the decision carries significant risk either way. Advise them."
        socialProof="1,847 conversations this week"
        disclaimer="Every simulation is customized to your firm&#8217;s practice areas, client situations, and terminology."
      />

      {/* ── Why law firms choose Ambr AI ── */}
      <FeatureGrid
        eyebrow="Why law firms choose Ambr AI"
        items={[
          {
            heading: 'Built around your practice',
            description:
              'Corporate M&A. Employment disputes. Regulatory investigations. Roleplays can be customized to your practice areas, your client situations — quickly and without extensive investment.',
          },
          {
            heading: 'From associate to trusted advisor',
            description:
              'Ambr AI accelerates the journey with roleplay simulations built around the conversations junior lawyers actually face — so they arrive at client interactions already prepared.',
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
        company="Consulting Firm"
      />

      {/* ── Closing CTA ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for{' '}
            <em className="text-accent">your</em> firm.
          </>
        }
        subtitle="Practice the conversations that win mandates."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
