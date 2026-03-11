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
  title: 'Consulting & Advisory',
  description:
    'Ambr AI gives consultants and advisors structured practice for client pitches, scope negotiations, difficult feedback, and every high-stakes conversation in between.',
  path: '/industries/consulting-advisory',
})

const useCases = [
  {
    heading: 'Difficult client conversations',
    description:
      'Scope changes. Budget overruns. Missed expectations. How your people handle these conversations determines whether the client stays or walks.',
  },
  {
    heading: 'Challenging commercial pushback',
    description:
      'Fees get questioned. Scope gets challenged. Budgets get cut. The consultants who navigate these moments without damaging relationships are the ones clients call back.',
  },
  {
    heading: 'Negotiation and influence',
    description:
      'From structuring a deal to navigating a difficult stakeholder, consulting requires the ability to persuade, push back, and land a position under pressure.',
  },
  {
    heading: 'Manager development',
    description:
      'Delivering honest feedback, handling performance issues, and developing junior consultants \u2014 conversations that shape retention and culture.',
  },
  {
    heading: 'New joiner onboarding',
    description:
      'Get junior consultants client-ready faster. Realistic conversation training with structured feedback, without pulling partners off billable work.',
  },
  {
    heading: 'Business development',
    description:
      'From initial chemistry meetings to formal proposals, train on the conversations that grow your pipeline.',
  },
]

export default function ConsultingAdvisoryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Consulting & Advisory', href: '/industries/consulting-advisory' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Consulting & Advisory"
        heading={
          <>
            Your consultants sell expertise through conversation. Prepare them{' '}
            <em className="text-accent">for</em> it.
          </>
        }
        subtitle="Client pitches. Scope negotiations. Difficult feedback. Performance reviews. In consulting, high-stakes conversations happen at every level, in every direction. Ambr AI gives your people a structured way to prepare for all of them — before it counts."
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
        characterName="David"
        characterRole="Client Director"
        characterInitials="DC"
        title="Navigate a client pushing back on your project timeline"
        scenario="A client is pushing back on your project timeline and threatening to reduce scope. Navigate the conversation."
        socialProof="This is an example scenario. Every simulation is customized to your firm&rsquo;s clients, terminology, and methodology."
      />

      {/* ── Why consulting firms choose Ambr AI ── */}
      <FeatureGrid
        eyebrow="Why consulting firms choose Ambr AI"
        items={[
          {
            heading: 'Built around your firm, not a generic template',
            description:
              'Your engagement models, client industries, and methodologies \u2014 built into your simulations quickly and without extensive investment.',
          },
          {
            heading: 'Scale without senior time',
            description:
              'Partners and directors can\u2019t personally develop every consultant. Ambr AI gives your entire organization access to high-quality practice at any volume, without the bottleneck.',
          },
          {
            heading: 'Confidential by design',
            description:
              'Conversations stay private. Never shared across clients, never used to train models. ISO 27001 certified, GDPR compliant, EU AI Act compliant.',
          },
          {
            heading: 'Feedback that actually coaches',
            description:
              'Detailed, actionable feedback after every session \u2014 not just a summary. Coaching that changes how people communicate.',
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
            <em className="text-accent">your</em> team.
          </>
        }
        subtitle="Practice the conversations that shape client relationships."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
