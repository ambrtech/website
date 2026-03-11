import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { AccordionShowcase } from '@/components/sections/accordion-showcase'
import { SplitContent } from '@/components/sections/split-content'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { GrainCta } from '@/components/sections/grain-cta'
import { SimulationCard } from '@/components/ui/simulation-card'
import {
  ProductScreenshot,
  MockVoiceConversation,
  MockFeedbackPanel,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Other Solutions',
  description:
    'Ambr AI works wherever conversations carry high stakes. Custom simulations for HR, consulting, healthcare, compliance, presentations, and any conversation type your teams need to master.',
  path: '/solutions/other',
})

export default function OtherSolutionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Other Solutions', href: '/solutions/other' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Conversations that matter aren&apos;t limited to management and{' '}
            <em className="text-accent">sales</em>
          </>
        }
        subtitle="Ambr AI works wherever the stakes are high. The platform is built around customization, so any conversation type that needs training is possible."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            Where organizations are already using{' '}
            <em className="text-accent italic font-light">Ambr AI</em>
          </>
        }
        items={[
          {
            heading: 'HR & People Operations',
            description:
              'Sensitive investigations, restructure announcements, and return-to-work conversations.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Consulting & Client Advisory',
            description:
              'Managing difficult client relationships, scope negotiations, and fee conversations.',
          },
          {
            heading: 'Internal Communications & Change Management',
            description:
              'Announcing organizational change, town hall Q&A, and cascading difficult messages.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Healthcare & Clinical Communication',
            description:
              'Sensitive patient conversations, breaking bad news, and interdisciplinary handoffs.',
          },
          {
            heading: 'Compliance & Regulatory',
            description:
              'Explaining requirements to non-technical stakeholders and audit interview preparation.',
          },
          {
            heading: 'Presentations & Public Speaking',
            description:
              'Conference talks, board presentations, investor briefings, and internal announcements.',
          },
        ]}
      />

      <SplitContent
        className="bg-surface-white"
        eyebrow="Built to be customized"
        heading={<>Build it yourself</>}
        body="Admins create scenarios in minutes using the scenario builder. Define the context, character behavior, and feedback criteria — then assign to your team."
        visualContent={
          <ProductScreenshot tint>
            <MockAdminBuilder />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Let us build it</>}
        body="Our team delivers fully tailored simulations fast. Share your brief, and we build bespoke scenarios that reflect your organization, language, and culture."
        visualContent={
          <ProductScreenshot tint>
            <MockCustomizationDelivery />
          </ProductScreenshot>
        }
      />

      <SplitContent
        className="bg-surface-white"
        heading={<>Individual scenarios</>}
        body="Users create private simulations for upcoming conversations. Describe the situation, define the other person, and start practicing immediately."
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      />

      <Section>
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <SimulationCard
              layout="live-call"
              characterName="Sam"
              characterRole="New Hire"
              characterInitials="ST"
              title="Practice an onboarding conversation"
              description="Walk a new team member through their first week. Set expectations, answer questions, and build rapport."
              href="/try-for-free"
              socialProof="892 conversations this week"
            />
          </div>
        </Reveal>
      </Section>

      <GrainCta
        variant="dark"
        heading={
          <>
            Whatever your team needs to practice, we can <em className="text-accent">build</em> it.
          </>
        }
        subtitle="Custom simulations for any high-stakes conversation."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
