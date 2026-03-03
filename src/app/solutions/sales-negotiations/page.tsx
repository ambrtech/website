import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Sales & Negotiations',
  description:
    'Sharpen deal-closing conversations with AI-powered sales simulation training. Practice objection handling, discovery, and negotiation scenarios.',
  path: '/solutions/sales-negotiations',
})

export default function SalesNegotiationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Sales & Negotiations', href: '/solutions/sales-negotiations' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Sales &amp; <em className="text-accent">Negotiations</em>
          </>
        }
        subtitle="Sharpen deal-closing conversations with AI-powered sales simulation training. Practice objection handling, discovery, and negotiation scenarios."
      />

      <SplitContent
        eyebrow="Why it matters"
        heading="Every conversation is a revenue moment"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <FeatureGrid
        eyebrow="Capabilities"
        heading="Train for the moments that close deals"
        items={[
          {
            heading: 'Objection handling',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            heading: 'Discovery calls',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            heading: 'Price negotiation',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            heading: 'Stakeholder alignment',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
