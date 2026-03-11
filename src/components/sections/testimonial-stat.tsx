import { Reveal } from '@/components/reveal'

interface TestimonialStatProps {
  stat: { value: string; label: string }
  testimonials: { quote: string; role: string; company: string }[]
  className?: string
}

export function TestimonialStat({ stat, testimonials, className }: TestimonialStatProps) {
  return (
    <section className={`py-section-mobile md:py-section px-container-mobile md:px-container ${className ?? ''}`}>
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
            <div>
              <p className="font-heading text-stat leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="text-copy-light mt-2 text-stat-label">
                {stat.label}
              </p>
            </div>

            <div className="md:col-span-2 space-y-10">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="border-l-2 border-accent-soft pl-6">
                  <p className="font-heading text-quote leading-[1.4] tracking-heading mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="text-body-sm text-copy-light">
                    {t.role}, {t.company}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
