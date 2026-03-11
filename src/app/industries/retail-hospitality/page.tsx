import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { TrialScenario } from '@/components/sections/trial-scenario'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CustomerStory } from '@/components/sections/customer-story'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Retail & Hospitality',
  description:
    'Ambr AI gives retail and hospitality businesses a structured, scalable way to train every team member on customer interactions consistently.',
  path: '/industries/retail-hospitality',
})

const useCases = [
  {
    heading: 'New hire onboarding',
    description:
      'Get new team members customer-ready in days, with structured training that doesn\u2019t depend on a manager being free to deliver it. Scales instantly for seasonal hiring peaks.',
  },
  {
    heading: 'Customer complaint handling',
    description:
      'Demanding guests. Difficult returns. Escalating situations. Give your teams the practice to turn difficult moments into loyalty.',
  },
  {
    heading: 'Service excellence',
    description:
      'Train on recommending naturally. Upsell conversations that increase spend by enhancing the experience, not interrupting it.',
  },
  {
    heading: 'Manager development',
    description:
      'Delivering honest feedback, handling performance issues, motivating teams under pressure \u2014 the internal conversations that shape culture and retention across every site.',
  },
]

export default function RetailHospitalityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Retail & Hospitality', href: '/industries/retail-hospitality' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Retail & Hospitality"
        heading={
          <>
            Your brand lives in every customer interaction. Make sure your people are{' '}
            <em className="text-accent">ready</em> for them.
          </>
        }
        subtitle="Customer complaints. Upsell conversations. New hire onboarding. Manager feedback. In retail and hospitality, high-stakes conversations happen across every location, every shift, every day — and the gap between a good experience and a great one is almost always a conversation. Ambr AI gives retail and hospitality businesses a structured, scalable way to train every team member consistently — before it counts."
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
        characterName="Rachel"
        characterRole="Frustrated Guest"
        characterInitials="RG"
        title="Resolve a guest complaint before it becomes a review"
        scenario="A hotel guest is unhappy with their room and is threatening to leave a negative review. Resolve the situation."
        socialProof="This is an example scenario. Every simulation is customized to your brand, service standards, and training goals."
      />

      {/* ── Why retail & hospitality choose Ambr AI ── */}
      <FeatureGrid
        eyebrow="Why retail and hospitality brands choose Ambr AI"
        items={[
          {
            heading: 'Customized to your brand standards',
            description:
              'Your products, your service protocols, your tone of voice. Simulations can be customized — so training feels like your brand, not a generic customer service exercise.',
          },
          {
            heading: 'Built for seasonal scale',
            description:
              'Onboard large cohorts of new hires consistently and quickly — without depending on manager availability.',
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
      <CustomerStory
        compact
        imageSrc="/images/customers/Jesse Strot.jpg"
        imageAlt="Jesse Strot, Soapy Joe's Car Wash"
        quote={
          <>
            <p>&ldquo;We used Ambr AI for role play and conversation feedback for our frontline workers for sales strategy, product knowledge, and resolution handling.</p>
            <p className="mt-4">I&rsquo;ve met with tons of AI vendors, and none that had the same level of quality and customer service as Ambr AI, so I would definitely recommend them to others.&rdquo;</p>
          </>
        }
        name="Jesse Strot"
        company="Soapy Joe&rsquo;s Car Wash"
      />

      {/* ── Closing CTA ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> team.
          </>
        }
        subtitle="Train every team member to deliver your brand at its best."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
