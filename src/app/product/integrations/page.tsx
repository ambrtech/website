import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Integrations',
  description:
    'Connect Ambr AI with your existing LMS, HRIS, and workplace tools for seamless training deployment and reporting.',
  path: '/product/integrations',
})

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/ai-roleplay' },
          { name: 'Integrations', href: '/product/integrations' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Product"
        heading={
          <>
            Fits <em className="text-accent">seamlessly</em> into
            your existing stack
          </>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />

      <SplitContent
        eyebrow="Connectivity"
        heading="No disruption to your workflows"
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

      <FeatureGrid
        eyebrow="Integrations"
        heading="Connect with the tools you already use"
        items={[
          {
            heading: 'LMS integration',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
          },
          {
            heading: 'HRIS sync',
            description:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui cras mattis consectetur purus sit amet.',
          },
          {
            heading: 'SSO and authentication',
            description:
              'Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo vestibulum id ligula porta felis.',
          },
          {
            heading: 'Reporting and exports',
            description:
              'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
