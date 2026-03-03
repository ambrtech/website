import { Section } from './section'

const stats = [
  { value: '94%', label: 'of learners say simulations feel realistic' },
  { value: '3.2×', label: 'faster competency development vs. traditional roleplay' },
  { value: '78%', label: 'reduction in time-to-readiness for new hires' },
]

export function Stats() {
  return (
    <Section className="bg-dark">
      <div className="grid md:grid-cols-3 gap-16 md:gap-10">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center text-center group">
            <p className="font-heading text-6xl md:text-8xl tracking-tight text-accent-soft mb-4 transition-transform duration-500 group-hover:scale-110">
              {stat.value}
            </p>
            <div className="w-12 h-px bg-accent/30 mb-6" />
            <p className="text-surface-white/70 text-xs md:text-sm leading-relaxed max-w-[240px] uppercase tracking-widest font-body-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
