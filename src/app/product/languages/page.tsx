import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Reveal } from '@/components/reveal'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Languages',
  description:
    'Ambr AI supports 30+ languages with cultural adaptation — not just translation. Simulations reflect local norms, communication styles, and workplace expectations.',
  path: '/product/languages',
})

/* ────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────── */

const adaptations = [
  {
    heading: 'Communication style',
    description:
      'Direct vs. indirect. Formal vs. informal. The role of hierarchy, deference, and how disagreement is expressed.',
  },
  {
    heading: 'Scenario structure',
    description:
      'How feedback conversations, negotiations, and customer interactions typically unfold in that culture.',
  },
  {
    heading: 'Character behavior',
    description:
      'How the AI character responds, pushes back, or escalates, reflecting local workplace norms.',
  },
]

interface LanguageRegion {
  region: string
  languages: string[]
}

const regions: LanguageRegion[] = [
  {
    region: 'Europe',
    languages: [
      'English (UK)',
      'English (US)',
      'French (France)',
      'French (Canada)',
      'German',
      'Italian',
      'Spanish (Spain)',
      'Spanish (US)',
      'Portuguese (Brazil)',
      'Dutch (Netherlands)',
      'Dutch (Belgium)',
      'Polish',
      'Swedish',
      'Norwegian',
      'Danish',
      'Finnish',
      'Ukrainian',
      'Russian',
    ],
  },
  {
    region: 'Asia-Pacific',
    languages: [
      'Mandarin Chinese',
      'Japanese',
      'Korean',
      'Hindi',
      'Bengali',
      'Gujarati',
      'Kannada',
      'Malayalam',
      'Marathi',
      'Tamil',
      'Telugu',
      'Urdu',
      'Indonesian',
      'Thai',
      'Vietnamese',
    ],
  },
  {
    region: 'Middle East & Africa',
    languages: ['Arabic', 'Turkish', 'Swahili'],
  },
]

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */

export default function LanguagesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Languages', href: '/product/languages' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Languages"
        heading={
          <>
            Culturally adjusted. Not just{' '}
            <em className="text-accent">translated</em>.
          </>
        }
        subtitle="A difficult conversation in Tokyo doesn't follow the same norms as one in Mumbai, S&atilde;o Paulo, or New York. Ambr AI adapts to the culture, not just the language."
      />

      {/* ── How Simulations Adapt ── */}
      <section className="pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-10 md:mb-12">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                How Simulations Adapt
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[540px]">
                Every simulation is shaped by the culture it serves.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {adaptations.map((item, i) => (
              <Reveal key={item.heading} delay={i * 80}>
                <div className="border border-border rounded-brand p-8 h-full">
                  <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-4">
                    {item.heading}
                  </p>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supported Languages ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container bg-surface-alt">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                Supported Languages
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[540px]">
                30+ languages across every major region.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-12 md:space-y-16">
            {regions.map((group) => (
              <Reveal key={group.region}>
                <div>
                  <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                    {group.region}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.languages.map((lang) => (
                      <span
                        key={lang}
                        className="inline-block bg-surface-white border border-border rounded-brand-sm px-4 py-2 text-body-sm text-dark"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Growing callout */}
          <Reveal>
            <div className="mt-12 md:mt-16 border-l-[3px] border-accent-soft pl-6 py-1">
              <p className="text-body text-copy-mid leading-[1.75]">
                This list is growing. If you need a language not listed here,{' '}
                <Link
                  href="/contact"
                  className="text-accent font-body-medium hover:text-accent-hover transition-colors"
                >
                  get in touch
                </Link>
                . We may already support it or can add it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── For Global Organizations ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-site max-w-[720px] text-center">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              For Global Organizations
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              One platform. One admin experience. One reporting dashboard.
            </h2>
            <p className="text-body text-copy-mid leading-[1.75] mb-10">
              Consistent quality across every language and region, with training
              that respects local differences.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/try-for-free"
                className="inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
              >
                Try for free
              </Link>
              <Link
                href="/product/how-it-works"
                className="inline-block rounded-brand-sm border border-border px-8 py-3.5 text-sm font-body-medium text-dark transition-all hover:border-dark hover:-translate-y-px"
              >
                Find out more
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
