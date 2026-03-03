import { createMetadata } from '@/lib/metadata'
import { ScenarioCards } from '@/components/sections/scenario-cards'

export const metadata = createMetadata({
  title: 'Preview: Scenario Cards',
  description: 'Component preview.',
  path: '/preview/scenario-cards',
})

export default function Preview() {
  return (
    <ScenarioCards
      heading="Choose a Scenario"
      subtitle="These are example scenarios. Every Ambr AI deployment is fully customized to your organisation."
      items={[
        {
          category: 'Management & Leadership',
          scenarioTitle: 'Addressing Underperformance',
          description: 'You are a manager having a conversation with a direct report whose performance has dropped over the past quarter. Your goal is to address the issue constructively.',
          href: '/try-for-free',
        },
        {
          category: 'Sales & Negotiations',
          scenarioTitle: 'Handling a Price Objection',
          description: 'You are a sales professional on a call with a prospective client who is pushing back on price. Hold value and move the deal forward.',
          href: '/try-for-free',
        },
        {
          category: 'Customer Service',
          scenarioTitle: 'De-escalating a Frustrated Customer',
          description: 'A customer has experienced repeated issues with their account. They are frustrated and considering leaving. Resolve the situation.',
          href: '/try-for-free',
        },
      ]}
    />
  )
}
