import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Customer Service',
  description:
    'Build empathy and resolution skills through realistic customer service conversation simulations tailored to your products and processes.',
  path: '/solutions/customer-service',
})

export default function CustomerServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Customer Service', href: '/solutions/customer-service' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Customer <em className="text-accent">Service</em>
          </>
        }
        subtitle="Build empathy and resolution skills through realistic customer service conversation simulations tailored to your products and processes."
      />

      <SplitContent
        eyebrow="Why it matters"
        heading="Every interaction shapes loyalty"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <FeatureGrid
        eyebrow="Capabilities"
        heading="Prepare teams for real customer moments"
        items={[
          {
            heading: 'Complaint resolution',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            heading: 'Empathy and de-escalation',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            heading: 'Product knowledge',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            heading: 'Process adherence',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
