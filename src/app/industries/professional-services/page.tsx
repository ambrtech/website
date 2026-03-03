import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Professional Services',
  description:
    'AI conversation simulations designed for professional services firms. Build client-facing confidence across your advisory, audit, and consulting teams.',
  path: '/industries/professional-services',
})

export default function ProfessionalServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries/professional-services' },
          { name: 'Professional Services', href: '/industries/professional-services' },
        ]}
      />
      <PageHero
        compact
        heading={
          <>
            Training for <em className="text-accent">professional</em> services teams
          </>
        }
        subtitle="AI conversation simulations designed for professional services firms. Build client-facing confidence across your advisory, audit, and consulting teams."
      />
      <SplitContent
        eyebrow="The challenge"
        heading="Client conversations carry high stakes"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SplitContent
        reversed
        eyebrow="The solution"
        heading="Realistic practice that builds real confidence"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <CTA />
    </>
  )
}
