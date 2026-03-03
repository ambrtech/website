import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'What is AI Roleplay',
  description:
    'Discover how AI-powered conversation simulations transform workplace training with realistic, voice-based practice scenarios.',
  path: '/product/ai-roleplay',
})

export default function AIRoleplayPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/ai-roleplay' },
          { name: 'What is AI Roleplay', href: '/product/ai-roleplay' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Product"
        heading={
          <>
            Realistic practice for the conversations
            that <em className="text-accent">matter</em>
          </>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />

      <SplitContent
        eyebrow="The challenge"
        heading="Traditional roleplay doesn't scale"
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
        eyebrow="Capabilities"
        heading="What makes AI roleplay different"
        items={[
          {
            heading: 'Voice-first interaction',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
          },
          {
            heading: 'Adaptive responses',
            description:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui cras mattis consectetur purus sit amet.',
          },
          {
            heading: 'Bespoke scenarios',
            description:
              'Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo vestibulum id ligula porta felis.',
          },
          {
            heading: 'Instant feedback',
            description:
              'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
