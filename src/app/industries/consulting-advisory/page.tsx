import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Consulting & Advisory',
  description:
    'Realistic practice scenarios for consultants and advisors. Sharpen client engagement, stakeholder management, and advisory conversations.',
  path: '/industries/consulting-advisory',
})

export default function ConsultingAdvisoryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries/professional-services' },
          { name: 'Consulting & Advisory', href: '/industries/consulting-advisory' },
        ]}
      />
      <PageHero
        compact
        heading={
          <>
            Sharpen every <em className="text-accent">advisory</em> conversation
          </>
        }
        subtitle="Realistic practice scenarios for consultants and advisors. Sharpen client engagement, stakeholder management, and advisory conversations."
      />
      <SplitContent
        eyebrow="The challenge"
        heading="Advisory skills are hard to teach at scale"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SplitContent
        reversed
        eyebrow="The solution"
        heading="Practice that mirrors real client dynamics"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <CTA />
    </>
  )
}
