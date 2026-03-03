import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Admin Experience',
  description:
    'Manage, track and measure conversation training across your teams with intuitive admin tools and actionable analytics.',
  path: '/product/admin-experience',
})

export default function AdminExperiencePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/ai-roleplay' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Product"
        heading={
          <>
            Complete <em className="text-accent">visibility</em> across
            every conversation
          </>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />

      <SplitContent
        eyebrow="For administrators"
        heading="Tools that make training measurable"
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
        eyebrow="Features"
        heading="Everything you need to manage training"
        items={[
          {
            heading: 'Team dashboards',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
          },
          {
            heading: 'Performance analytics',
            description:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui cras mattis consectetur purus sit amet.',
          },
          {
            heading: 'Scenario management',
            description:
              'Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo vestibulum id ligula porta felis.',
          },
          {
            heading: 'Role-based access',
            description:
              'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
