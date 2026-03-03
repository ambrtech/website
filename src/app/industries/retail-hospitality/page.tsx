import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Retail & Hospitality',
  description:
    'AI training simulations for retail and hospitality teams. Build customer service skills through realistic conversation practice.',
  path: '/industries/retail-hospitality',
})

export default function RetailHospitalityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries/professional-services' },
          { name: 'Retail & Hospitality', href: '/industries/retail-hospitality' },
        ]}
      />
      <PageHero
        compact
        heading={
          <>
            Elevate every <em className="text-accent">customer</em> interaction
          </>
        }
        subtitle="AI training simulations for retail and hospitality teams. Build customer service skills through realistic conversation practice."
      />
      <SplitContent
        eyebrow="The challenge"
        heading="Consistency across every frontline team"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SplitContent
        reversed
        eyebrow="The solution"
        heading="Scalable practice for service excellence"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <CTA />
    </>
  )
}
