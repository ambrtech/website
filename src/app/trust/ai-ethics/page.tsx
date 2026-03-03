import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { SplitContent } from '@/components/sections/split-content'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'AI & Ethics',
  description:
    'Our approach to responsible AI. How Ambr AI ensures fairness, transparency, and ethical use in conversation simulation training.',
  path: '/trust/ai-ethics',
})

export default function AIEthicsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'AI Trust & Safety', href: '/trust/security-certifications' },
          { name: 'AI & Ethics', href: '/trust/ai-ethics' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            AI &amp; <em className="text-accent">Ethics</em>
          </>
        }
        subtitle="Our approach to responsible AI. How Ambr AI ensures fairness, transparency, and ethical use in conversation simulation training."
      />

      <Section>
        <Reveal>
          <div className="max-w-[680px]">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Responsible AI
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Built with people at the centre
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <SplitContent
        eyebrow="Our principles"
        heading="Fairness, transparency, and accountability"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />

      <CTA />
    </>
  )
}
