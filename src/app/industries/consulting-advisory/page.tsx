import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { AccordionShowcase } from '@/components/sections/accordion-showcase'
import { TrialScenario } from '@/components/sections/trial-scenario'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { GrainCta } from '@/components/sections/grain-cta'
import {
  ProductScreenshot,
  MockVoiceConversation,
  MockFeedbackPanel,
  MockBodyLanguage,
  MockScenarioCreator,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Consulting & Advisory',
  description:
    'Ambr AI gives consultants and advisors structured practice for client pitches, scope negotiations, difficult feedback, and every high-stakes conversation in between.',
  path: '/industries/consulting-advisory',
})

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
        eyebrow="Industries"
        heading={
          <>
            Your consultants sell expertise through conversation. Make sure they&apos;re{' '}
            <em className="text-accent">ready</em> for it.
          </>
        }
        subtitle="Client pitches. Scope negotiations. Difficult feedback. Performance reviews. In consulting, high-stakes conversations happen at every level, in every direction. Ambr AI gives your people a structured way to practice all of them — before it counts."
      />
      <AccordionShowcase
        variant="dark"
        heading={
          <>
            Where it makes the <em className="text-accent italic font-light">difference</em>
          </>
        }
        items={[
          {
            heading: 'Difficult client conversations',
            description:
              'Scope changes. Budget overruns. Missed expectations. Handling pushback. Give your consultants the practice to handle them with confidence.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Challenging commercial pushback',
            description:
              'Fee disputes. Scope changes. Budget overruns. Missed expectations. Give your consultants the practice to handle them without damaging the relationship.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Negotiation and influence',
            description:
              'From structuring a deal to navigating a difficult stakeholder, consulting requires the ability to persuade, push back, and land a position under pressure.',
            cropFocus: 'bottom-right',
            filter: 'duotone-copper',
          },
          {
            heading: 'Manager development',
            description:
              'Delivering honest feedback, handling performance issues, and developing junior consultants.',
            visualContent: <MockBodyLanguage />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'New joiner onboarding',
            description:
              'Get junior consultants client-ready faster with realistic training and structured feedback.',
            cropFocus: 'center',
            filter: 'duotone-blush',
          },
          {
            heading: 'Business development',
            description: 'From initial chemistry meetings to formal proposals.',
            cropFocus: 'bottom-left',
            filter: 'duotone',
          },
        ]}
      />
      <TrialScenario
        characterName="Alex"
        characterRole="Senior Partner"
        characterInitials="AM"
        title="Navigate scope pushback without losing the relationship"
        scenario="A client is pushing back on your project timeline and threatening to reduce scope. Navigate the conversation."
      />
      <SplitContent
        eyebrow="Customized for consulting"
        heading={
          <>
            Built around <em className="text-accent">your</em> firm
          </>
        }
        body="Your engagement models, client industries, and methodologies. Every scenario reflects how your consultants actually work — not generic templates."
        visualContent={
          <ProductScreenshot>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      />
      <FeatureGrid
        eyebrow="Why consulting firms choose Ambr AI"
        items={[
          {
            heading: 'Scale without senior time',
            description:
              'Ambr AI gives your entire organization access to high-quality practice at any volume, without the bottleneck.',
          },
          {
            heading: 'Confidential by design',
            description:
              'Data is never shared across clients or used to train models. ISO certified, GDPR compliant.',
          },
          {
            heading: 'Feedback that actually coaches',
            description: 'Detailed, actionable feedback after every simulation.',
          },
          {
            heading: 'Global, and actually global',
            description: '30+ languages, adjusted for cultural context.',
          },
        ]}
      />
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> team.
          </>
        }
        subtitle="Practice the conversations that shape client relationships."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
