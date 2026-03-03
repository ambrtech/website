import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'How It Works',
  description:
    'From initial brief to live simulations in days. Learn how Ambr AI builds custom training scenarios tailored to your organisation.',
  path: '/product/how-it-works',
})

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/ai-roleplay' },
          { name: 'How It Works', href: '/product/how-it-works' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Product"
        heading={
          <>
            From brief to live simulations
            in <em className="text-accent">days</em>
          </>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />

      <SplitContent
        eyebrow="The process"
        heading="Built around your real scenarios"
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
        eyebrow="Steps"
        heading="How we get you live"
        items={[
          {
            heading: 'Discovery and brief',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
          },
          {
            heading: 'Scenario design',
            description:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui cras mattis consectetur purus sit amet.',
          },
          {
            heading: 'Configuration and testing',
            description:
              'Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo vestibulum id ligula porta felis.',
          },
          {
            heading: 'Launch and iterate',
            description:
              'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
