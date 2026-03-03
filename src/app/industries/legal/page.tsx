import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Legal',
  description:
    'Conversation simulation training for legal professionals. Practice client intake, negotiation, and stakeholder communication scenarios.',
  path: '/industries/legal',
})

export default function LegalPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries/professional-services' },
          { name: 'Legal', href: '/industries/legal' },
        ]}
      />
      <PageHero
        compact
        heading={
          <>
            Communication training for <em className="text-accent">legal</em> teams
          </>
        }
        subtitle="Conversation simulation training for legal professionals. Practice client intake, negotiation, and stakeholder communication scenarios."
      />
      <SplitContent
        eyebrow="The challenge"
        heading="Every conversation carries consequence"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SplitContent
        reversed
        eyebrow="The solution"
        heading="Safe practice for high-stakes dialogue"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <CTA />
    </>
  )
}
