import { Section } from './section'

const steps = [
  {
    number: '01',
    heading: 'We learn your world',
    body: 'We work with your team to understand the conversations that matter — the scenarios, the nuance, the organisational context. This is the foundation everything is built on.',
  },
  {
    number: '02',
    heading: 'We build your simulations',
    body: 'Our team designs and builds voice-based simulations tailored to your specific use cases. Each one is reviewed, refined, and validated with your subject matter experts.',
  },
  {
    number: '03',
    heading: 'Your people practise and grow',
    body: 'Learners practise conversations in a safe, private environment — as many times as they need. Structured feedback and analytics track development over time.',
  },
]

export function HowItWorks() {
  return (
    <Section className="bg-surface-white">
      <div className="mb-16 md:mb-20 max-w-2xl">
        <p className="text-xs font-body-medium uppercase tracking-eyebrow text-accent mb-4">
          How it works
        </p>
        <h2 className="font-heading text-3xl md:text-5xl tracking-heading text-dark leading-tight">
          From your challenges to their confidence
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 md:gap-10">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <span className="block font-heading text-6xl text-accent-tint mb-6 select-none">
              {step.number}
            </span>
            <h3 className="font-heading text-xl md:text-2xl tracking-heading text-dark mb-4 leading-snug">
              {step.heading}
            </h3>
            <p className="text-copy-mid leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
