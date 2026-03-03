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
    <Section className="bg-surface">
      <div className="mb-20 md:mb-32 max-w-2xl text-balance">
        <p className="text-xs font-body-medium uppercase tracking-eyebrow text-accent mb-4">
          Why Ambr
        </p>
        <h2 className="font-heading text-4xl md:text-5xl tracking-heading text-dark leading-[1.1]">
          Training that works because it feels real
        </h2>
      </div>
      
      <div className="space-y-24 md:space-y-40">
        {propositions.map((prop, index) => (
          <div 
            key={prop.eyebrow}
            className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <div className="max-w-xl">
                <p className="text-xs font-body-medium uppercase tracking-eyebrow text-accent mb-6">
                  {prop.eyebrow}
                </p>
                <h3 className="font-heading text-2xl md:text-4xl tracking-heading text-dark mb-6 leading-[1.2]">
                  {prop.heading}
                </h3>
                <p className="text-lg text-copy-mid leading-relaxed">
                  {prop.body}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full aspect-[16/10] bg-surface-white/50 backdrop-blur-sm rounded-brand border border-border flex items-center justify-center relative overflow-hidden group">
              {/* Visual abstraction placeholder - represents the high-end editorial feel */}
              <div className="absolute inset-0 bg-linear-to-tr from-accent-whisper/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-1/2 h-px bg-border absolute transform -rotate-12 translate-y-8" />
              <div className="w-1/3 h-px bg-border absolute transform rotate-45 -translate-x-12 -translate-y-12" />
              <div className="relative z-10 font-heading text-xs uppercase tracking-widest text-copy-faint/40 flex items-center gap-4">
                <span className="w-8 h-px bg-border" />
                Simulation Visualized
                <span className="w-8 h-px bg-border" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
