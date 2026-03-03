import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Management & Leadership',
  description:
    'Develop confident, effective leaders through realistic AI conversation simulations. Practice feedback, coaching, and difficult management conversations.',
  path: '/solutions/management-leadership',
})

export default function ManagementLeadershipPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Management & Leadership', href: '/solutions/management-leadership' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Management &amp; <em className="text-accent">Leadership</em>
          </>
        }
        subtitle="Develop confident, effective leaders through realistic AI conversation simulations. Practice feedback, coaching, and difficult management conversations."
      />

      <SplitContent
        eyebrow="Why it matters"
        heading="Conversations that shape culture"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <FeatureGrid
        eyebrow="Capabilities"
        heading="Built for every leadership moment"
        items={[
          {
            heading: 'Performance feedback',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            heading: 'Coaching conversations',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            heading: 'Difficult discussions',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            heading: 'Team alignment',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
