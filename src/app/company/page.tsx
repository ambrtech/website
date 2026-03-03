import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { OrganizationJsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Company',
  description:
    'Meet the team behind Ambr AI. Building bespoke voice-based AI conversation simulations for enterprise workplace training.',
  path: '/company',
})

export default function CompanyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Company', href: '/company' },
        ]}
      />

      <OrganizationJsonLd />

      <PageHero
        compact
        heading={
          <>
            The <em className="text-accent">people</em> behind Ambr AI
          </>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />

      <SplitContent
        eyebrow="Our story"
        heading="Founded on a belief that practice changes performance"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
          odio dui. Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p>
          Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis
          ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
          Donec ullamcorper nulla non metus auctor fringilla.
        </p>
      </SplitContent>

      <CTA />
    </>
  )
}
