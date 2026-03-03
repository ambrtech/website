import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Accounting, Audit & Tax',
  description:
    'AI-powered training simulations for accounting, audit, and tax professionals. Practice complex client discussions with confidence.',
  path: '/industries/accounting-audit-tax',
})

export default function AccountingAuditTaxPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries/professional-services' },
          { name: 'Accounting, Audit & Tax', href: '/industries/accounting-audit-tax' },
        ]}
      />
      <PageHero
        compact
        heading={
          <>
            Confident client conversations in <em className="text-accent">accounting</em>
          </>
        }
        subtitle="AI-powered training simulations for accounting, audit, and tax professionals. Practice complex client discussions with confidence."
      />
      <SplitContent
        eyebrow="The challenge"
        heading="Technical expertise alone is not enough"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SplitContent
        reversed
        eyebrow="The solution"
        heading="Simulations tailored to your practice areas"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <CTA />
    </>
  )
}
