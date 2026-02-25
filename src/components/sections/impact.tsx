import { Reveal } from '@/components/reveal'

export function Impact() {
  return (
    <section className="border-y border-border py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Impact
              </p>
              <p className="text-body text-copy-mid leading-[1.7]">
                Teams using Ambr AI onboard new hires faster, run more practice reps, and
                report the highest realism ratings of any AI simulation platform they&apos;ve
                evaluated.
              </p>
            </div>
            <div className="text-right">
              <p className="font-heading text-stat leading-none tracking-tight">
                78%
              </p>
              <p className="font-body text-copy-light mt-2 text-stat-label font-body-normal">
                faster onboarding for new hires
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
