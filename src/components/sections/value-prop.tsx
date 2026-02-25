import { Section } from './section'

const propositions = [
  {
    eyebrow: 'Customised to you',
    heading: 'Built around your scenarios, not generic templates',
    body: 'Every simulation is designed from your real workplace conversations — the difficult feedback session, the complex sales objection, the sensitive HR discussion. Your language. Your context. Your culture.',
  },
  {
    eyebrow: 'Voice-first',
    heading: 'Practice by speaking, not clicking',
    body: 'Your people practise by actually having the conversation out loud — building the muscle memory that transfers to real situations. No multiple choice. No scripts. Just realistic, adaptive dialogue.',
  },
  {
    eyebrow: 'Measurable outcomes',
    heading: 'Evidence your L&D investment is working',
    body: 'Every session generates structured data on competency development, conversation patterns, and confidence progression. Give your stakeholders the evidence they need.',
  },
]

export function ValueProp() {
  return (
    <Section>
      <div className="mb-16 md:mb-20 max-w-2xl">
        <p className="text-xs font-body-medium uppercase tracking-eyebrow text-accent mb-4">
          Why Ambr
        </p>
        <h2 className="font-heading text-3xl md:text-5xl tracking-heading text-dark leading-tight">
          Training that works because it feels real
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 md:gap-10">
        {propositions.map((prop) => (
          <div key={prop.eyebrow}>
            <p className="text-xs font-body-medium uppercase tracking-eyebrow text-accent mb-4">
              {prop.eyebrow}
            </p>
            <h3 className="font-heading text-xl md:text-2xl tracking-heading text-dark mb-4 leading-snug">
              {prop.heading}
            </h3>
            <p className="text-copy-mid leading-relaxed">
              {prop.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
