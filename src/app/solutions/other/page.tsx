import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Other Solutions',
  description:
    'Explore additional AI conversation training scenarios. Custom simulations for any workplace conversation your teams need to master.',
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
            Other <em className="text-accent">Solutions</em>
          </>
        }
        subtitle="Explore additional AI conversation training scenarios. Custom simulations for any workplace conversation your teams need to master."
      />

      <SplitContent
        eyebrow="Why it matters"
        heading="If your team talks, we can help them practise"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <FeatureGrid
        eyebrow="Capabilities"
        heading="Simulations for every scenario"
        items={[
          {
            heading: 'Onboarding conversations',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            heading: 'Compliance and policy',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            heading: 'Cross-cultural communication',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            heading: 'Bespoke scenarios',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
