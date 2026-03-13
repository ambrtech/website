import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { Reveal } from '@/components/reveal'

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
    region: 'North America',
    languages: [
      'English (US)',
      'French (Canada)',
      'Spanish (US)',
    ],
  },
  {
    region: 'Latin America',
    languages: [
      'Portuguese (Brazil)',
    ],
  },
  {
    region: 'Europe',
    languages: [
      'English (UK)',
      'French (France)',
      'German',
      'Italian',
      'Spanish (Spain)',
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
    region: 'East & Southeast Asia',
    languages: [
      'Mandarin Chinese',
      'Japanese',
      'Korean',
      'Indonesian',
      'Thai',
      'Vietnamese',
    ],
  },
  {
    region: 'South Asia',
    languages: [
      'Hindi',
      'Bengali',
      'Gujarati',
      'Kannada',
      'Malayalam',
      'Marathi',
      'Tamil',
      'Telugu',
      'Urdu',
    ],
  },
  {
    region: 'Middle East & Africa',
    languages: ['Arabic', 'Turkish', 'Swahili'],
  },
]

/* Greetings in native scripts — decorative typographic element */
const greetings = [
  'Hello',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Hola',
  'Ol\u00e1',
  'Hej',
  '\u3053\u3093\u306b\u3061\u306f',
  '\uc548\ub155\ud558\uc138\uc694',
  '\u0928\u092e\u0938\u094d\u0924\u0947',
  '\u0645\u0631\u062d\u0628\u0627',
  '\u4f60\u597d',
  'Jambo',
  'Merhaba',
  'Xin ch\u00e0o',
  'Sawasdee',
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

      {/* ── Hero with decorative greetings ── */}
      <section className="relative pt-section-mobile md:pt-[120px] pb-section-mobile md:pb-[100px] px-container-mobile md:px-container overflow-hidden bg-surface-white">
        {/* Decorative greetings — positioned behind hero text */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-8 top-8 md:right-12 md:top-12 lg:right-24 lg:top-16 flex flex-col items-end gap-3 opacity-[0.045]">
            {greetings.slice(0, 8).map((greeting) => (
              <span
                key={greeting}
                className="font-heading text-title md:text-headline leading-none tracking-heading whitespace-nowrap"
              >
                {greeting}
              </span>
            ))}
          </div>
          <div className="absolute -left-4 bottom-4 md:left-8 md:bottom-8 lg:left-16 lg:bottom-12 flex flex-col items-start gap-3 opacity-[0.035]">
            {greetings.slice(8).map((greeting) => (
              <span
                key={greeting}
                className="font-heading text-section md:text-title leading-none tracking-heading whitespace-nowrap"
              >
                {greeting}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-site relative">
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Languages
            </p>
            <h1 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[800px] mb-6">
              Culturally adjusted. Not just{' '}
              <em className="text-accent">translated</em>.
            </h1>
            <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
              A difficult conversation in Tokyo doesn&apos;t follow the same norms as one in Mumbai, S&atilde;o Paulo, or New York. Ambr AI adapts to the culture, not just the language.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How Simulations Adapt ── */}
      <section className="py-section-mobile md:py-section px-container-mobile md:px-container border-t border-border">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                How Simulations Adapt
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[540px]">
                Every simulation is shaped by the culture it serves.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0">
            {adaptations.map((item, i) => (
              <Reveal key={item.heading} delay={i * 80}>
                <div
                  className={`h-full py-8 md:py-0 ${
                    i !== 0
                      ? 'border-t md:border-t-0 md:border-l border-border md:pl-8 lg:pl-12'
                      : ''
                  } ${i !== adaptations.length - 1 ? 'md:pr-8 lg:pr-12' : ''}`}
                >
                  <span className="font-heading text-title tracking-heading text-accent-soft leading-none mb-5 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                    {item.heading}
                  </h3>
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
      <section className="pt-section-mobile md:pt-section pb-10 md:pb-14 px-container-mobile md:px-container border-y border-border bg-surface-white">
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

          <div className="space-y-16 md:space-y-20">
            {regions.map((group, groupIndex) => (
              <Reveal key={group.region} delay={groupIndex * 60}>
                <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-6 md:gap-12">
                  {/* Region label — large serif anchor */}
                  <div className="md:pt-1">
                    <h3 className="font-heading text-section md:text-title leading-[1.1] tracking-heading text-dark">
                      {group.region}
                    </h3>
                    <p className="text-caption text-copy-faint mt-2">
                      {group.languages.length} language{group.languages.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  {/* Language list — structured grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-0">
                    {group.languages.map((lang) => (
                      <div
                        key={lang}
                        className="border-t border-border py-3.5 flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-soft shrink-0" />
                        <span className="text-body-sm text-dark">
                          {lang}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Growing callout */}
          <Reveal>
            <div className="mt-12 md:mt-14 border-l-[3px] border-accent-soft pl-6 py-1">
              <p className="text-body text-copy-mid leading-[1.75]">
                This list is growing. If you need a language not listed here, please{' '}
                <Link
                  href="/find-out-more"
                  className="text-accent font-body-medium hover:text-accent-hover transition-colors"
                >
                  get in touch
                </Link>
                {' - '}we may be able to support it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── For Global Organizations ── */}
      <section className="pt-12 md:pt-16 pb-section-mobile md:pb-section px-container-mobile md:px-container">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            {/* Decorative centered hairline */}
            <div className="w-12 h-px bg-accent-soft mx-auto mb-8" aria-hidden="true" />
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
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
    </>
  )
}
