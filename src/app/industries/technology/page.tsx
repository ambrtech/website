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
  title: 'Technology',
  description:
    'Ambr AI gives technology companies structured practice for sales, customer success, technical communication, and leadership conversations.',
  path: '/industries/technology',
})

const useCases = [
  {
    heading: 'Sales and pre-sales',
    description:
      'Discovery calls. Technical demos. Procurement negotiations. Train on the conversations that close deals, especially when selling to non-technical buyers.',
  },
  {
    heading: 'Customer success',
    description:
      'Renewal conversations. Upsell discussions. Delivering hard news about timelines. Build the skills that protect and grow revenue.',
  },
  {
    heading: 'Technical communication',
    description:
      'Help engineers and product teams communicate clearly with non-technical stakeholders. The ability to translate complexity into clarity is a competitive advantage.',
  },
  {
    heading: 'New hire onboarding',
    description:
      'Get new team members customer-ready and product-fluent faster. Structured conversation training that scales with your hiring, without tying up senior staff.',
  },
  {
    heading: 'Manager development',
    description:
      'Rapid growth creates new managers overnight. Give them structured training on delivering honest feedback, handling performance issues, and leading difficult conversations — before they\u2019re learning on their teams.',
  },
  {
    heading: 'Leadership and executive communication',
    description:
      'Board presentations. Investor updates. All-hands meetings. Give your leaders a structured way to prepare for the high-visibility conversations that come with scale.',
  },
]

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Technology', href: '/industries/technology' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Technology"
        heading={
          <>
            Great tech companies aren&rsquo;t just built on great products.
            They&rsquo;re built on great{' '}
            <em className="text-accent">communication</em> too.
          </>
        }
        subtitle="Sales calls. Customer success conversations. Technical demos. Manager feedback. You can build the best product in the market and still lose on the conversations that surround it. Ambr AI gives technology companies a structured way to train for all of them — before it counts."
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
        <div className="grid md:grid-cols-2 gap-x-16">
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
      <Section>
        <Reveal>
          <p className="text-body-sm text-copy-mid leading-relaxed max-w-[580px] mb-8">
            This is an example scenario. Every simulation is customized to your
            product, market, and competitive landscape.
          </p>
        </Reveal>
      </Section>

      <TrialScenario
        characterName="Sarah"
        characterRole="VP of Engineering"
        characterInitials="SL"
        title="Lead a key enterprise renewal conversation"
        scenario="A key enterprise client is considering switching to a competitor at renewal. Lead the retention conversation."
        ctaHref="/try-for-free"
      />

      {/* ── Why tech companies choose Ambr AI ── */}
      <FeatureGrid
        eyebrow="Why tech companies choose Ambr AI"
        items={[
          {
            heading: 'Customized to your product and market',
            description:
              'Your buyers, your competitive landscape, your product terminology. Roleplays can be customized to your context so that training is relevant, not generic.',
          },
          {
            heading: 'Keeps pace with hypergrowth',
            description:
              'When headcount doubles, training quality shouldn\u2019t drop — Ambr AI scales instantly without adding resource.',
          },
          {
            heading: 'Feedback that actually coaches',
            description:
              'Detailed, actionable feedback after every session — not just a summary. Coaching that changes how people communicate.',
          },
          {
            heading: 'Confidential by design',
            description:
              'Conversations stay private. Never shared across clients, never used to train models. ISO 27001 certified, GDPR compliant, EU AI Act compliant.',
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
        quote="We love it. It\u2019s great that we can customize it for our needs."
        role="L&D Manager"
        company="Tech Firm"
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
        subtitle="Practice the conversations that drive growth."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
