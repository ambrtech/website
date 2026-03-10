import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { TrialScenario } from '@/components/sections/trial-scenario'
import { PullQuote } from '@/components/sections/pull-quote'
import { GrainCta } from '@/components/sections/grain-cta'
import Link from 'next/link'

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
      'Delivering honest feedback, handling performance issues, and developing junior consultants — conversations that shape retention and culture.',
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

const whyFeatures = [
  {
    heading: 'Built around your firm, not a generic template',
    description:
      'Your engagement models, client industries, and methodologies — built into your simulations quickly and without extensive investment.',
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
      'Detailed, actionable feedback after every session — not just a summary. Coaching that changes how people communicate.',
  },
  {
    heading: 'Global, and actually global',
    description:
      '30+ languages, adjusted for cultural context. Training that reflects how business is actually done in each market.',
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
        first
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
          <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[700px] mb-12">
            Where AI roleplay makes the{' '}
            <em className="text-accent">difference</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((item, i) => (
            <Reveal key={item.heading} delay={i * 60}>
              <div className="bg-surface-alt rounded-brand p-8">
                <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                  {item.heading}
                </h3>
                <p className="text-body-sm text-copy-mid leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Try it yourself ── */}
      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Try it yourself
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[700px] mb-8">
            See what a simulation feels like
          </h2>
          <div className="border border-accent-soft bg-accent-whisper rounded-brand p-6 max-w-2xl mb-8">
            <p className="text-body-sm text-copy-mid leading-[1.75]">
              This is an example scenario. Every simulation is customized to your
              firm&apos;s clients, terminology, and methodology.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="max-w-2xl">
            <p className="text-body text-copy-mid leading-[1.75] mb-6">
              A client is pushing back on your project timeline and threatening to
              reduce scope. Navigate the conversation.
            </p>
            <Link
              href="/try-for-free"
              className="inline-block rounded-brand-sm px-8 py-3.5 text-sm font-body-medium bg-accent text-surface-white hover:bg-accent-hover transition-all duration-normal"
            >
              Try for Free
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ── Why consulting firms choose Ambr AI ── */}
      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Why Ambr AI
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[700px] mb-12">
            Why consulting firms choose{' '}
            <em className="text-accent">Ambr AI</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 border-t border-border pt-10">
          {whyFeatures.map((feature, i) => (
            <Reveal key={feature.heading} delay={i * 60}>
              <div>
                <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                  {feature.heading}
                </h3>
                <p className="text-body-sm text-copy-mid leading-[1.75]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

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
