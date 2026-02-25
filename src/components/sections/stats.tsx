import { Section } from './section'

const stats = [
  { value: '94%', label: 'of learners say simulations feel realistic' },
  { value: '3.2×', label: 'faster competency development vs. traditional roleplay' },
  { value: '78%', label: 'reduction in time-to-readiness for new hires' },
]

export function Stats() {
  return (
    <Section className="bg-accent-whisper">
      <div className="grid md:grid-cols-3 gap-12 md:gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.value}>
            <p className="font-heading text-5xl md:text-6xl tracking-tight text-accent mb-3">
              {stat.value}
            </p>
            <p className="text-copy-mid text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
