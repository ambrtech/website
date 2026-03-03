import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { Waveform } from '@/components/waveform'

interface BentoShowcaseProps {
  eyebrow?: string
  heading?: React.ReactNode
  subtitle?: string
}

/**
 * BentoShowcase displays multiple product surfaces in an asymmetric grid,
 * showing the breadth of the platform at a glance. Each panel is a stylised
 * abstraction of a real product surface — not a screenshot, but enough
 * visual fidelity to convey what the product does.
 */
export function BentoShowcase({ eyebrow, heading, subtitle }: BentoShowcaseProps) {
  return (
    <Section>
      {(eyebrow || heading) && (
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark mb-6">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
                {subtitle}
              </p>
            )}
          </Reveal>
        </div>
      )}

      <Reveal slow>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Large panel: active simulation */}
          <div className="col-span-2 row-span-2 rounded-brand-lg bg-surface-white border border-border p-6 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[400px]">
            <div>
              <div className="flex items-center gap-1.5 text-eyebrow-sm uppercase tracking-eyebrow text-accent font-body-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Live simulation
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center">
                  <span className="font-heading text-body-sm text-copy-mid">MC</span>
                </div>
                <div>
                  <p className="text-body-sm font-body-medium text-dark">Maria Chen</p>
                  <p className="text-caption text-copy-light">VP Procurement</p>
                </div>
              </div>
            </div>
            <div>
              <Waveform />
              <div className="bg-surface rounded-brand-sm border border-border px-4 py-3 text-caption text-copy-mid italic leading-relaxed">
                &ldquo;Walk me through why we&apos;d add another platform at this stage?&rdquo;
              </div>
            </div>
          </div>

          {/* Top-right: feedback scores */}
          <div className="col-span-1 rounded-brand-lg bg-surface-white border border-border p-5 md:p-6 flex flex-col">
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-4">
              Feedback
            </span>
            <div className="space-y-3 flex-1">
              {(['Structure', 'Tone', 'Clarity', 'Empathy'] as const).map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-caption text-copy-mid w-16 shrink-0">{label}</span>
                  <div className="flex-1 h-1 rounded-full bg-surface-alt overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent-soft"
                      style={{ width: `${[85, 70, 60, 78][i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top-right-right: languages */}
          <div className="col-span-1 rounded-brand-lg bg-surface-white border border-border p-5 md:p-6">
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-4 block">
              Languages
            </span>
            <p className="font-heading text-stat-label tracking-heading text-dark leading-none mb-2">30+</p>
            <p className="text-caption text-copy-light leading-relaxed">
              Culturally adjusted, not just translated
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['EN', 'FR', 'DE', 'ES', 'JA', 'KO'].map((lang) => (
                <span key={lang} className="text-eyebrow-sm font-body-medium text-copy-mid bg-surface-alt px-2 py-0.5 rounded-brand-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom-left: scenarios */}
          <div className="col-span-1 rounded-brand-lg bg-surface-white border border-border p-5 md:p-6">
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-3 block">
              Scenarios
            </span>
            <div className="space-y-2">
              {['Enterprise pitch', 'Difficult feedback', 'Client retention'].map((s, i) => (
                <div key={s} className={`text-caption px-2.5 py-1.5 rounded-brand-sm border ${
                  i === 0
                    ? 'border-accent/20 bg-accent-whisper text-accent font-body-medium'
                    : 'border-border bg-surface text-copy-mid'
                }`}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-right: team stats */}
          <div className="col-span-1 rounded-brand-lg bg-dark border border-dark-mid p-5 md:p-6 text-surface-white">
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-4 block">
              This month
            </span>
            <div className="space-y-3">
              <div>
                <p className="font-heading text-section tracking-heading leading-none">247</p>
                <p className="text-caption text-copy-light">Sessions completed</p>
              </div>
              <div>
                <p className="font-heading text-section tracking-heading leading-none">89%</p>
                <p className="text-caption text-copy-light">Completion rate</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
