import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Customisation',
  description:
    'Every Ambr AI simulation is bespoke to your organisation. Custom scenarios, language, culture, and context built specifically for your teams.',
  path: '/customisation',
})

export default function CustomisationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Customisation', href: '/customisation' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Every simulation is{' '}
            <em className="text-accent">bespoke</em> to your organisation
          </>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />

      <SplitContent
        eyebrow="Your context"
        heading="Built around how your people actually work"
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
        eyebrow="What we tailor"
        heading="Customisation that goes deeper than content"
        items={[
          {
            heading: 'Scenario design',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
          },
          {
            heading: 'Language and tone',
            description:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui cras mattis consectetur purus sit amet.',
          },
          {
            heading: 'Cultural context',
            description:
              'Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo vestibulum id ligula porta felis.',
          },
          {
            heading: 'Evaluation criteria',
            description:
              'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
