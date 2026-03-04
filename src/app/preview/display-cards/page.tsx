import { createMetadata } from '@/lib/metadata'
import DisplayCards from '@/components/ui/display-cards'
import { MessageCircle, Users, ShieldCheck } from 'lucide-react'

export const metadata = createMetadata({
  title: 'Preview: Display Cards',
  description: 'Stacked scenario display cards component preview.',
  path: '/preview/display-cards',
})

const scenarioCards = [
  {
    icon: <MessageCircle className="size-4 text-accent" />,
    category: 'Management & Leadership',
    title: 'Addressing Underperformance',
    description:
      'You are a manager having a conversation with a direct report whose performance has dropped over the past quarter. Your goal is to address the issue constructively.',
    className: [
      '[grid-area:stack] hover:-translate-y-10',
      'before:absolute before:w-full before:h-full before:rounded-brand before:content-[\'\']',
      'before:bg-blend-overlay before:bg-surface/50 before:outline-1 before:outline-border',
      'grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700',
      'hover:grayscale-0 before:left-0 before:top-0',
    ].join(' '),
  },
  {
    icon: <Users className="size-4 text-accent" />,
    category: 'Sales & Negotiations',
    title: 'Handling a Price Objection',
    description:
      'You are a sales professional on a call with a prospective client who is pushing back on price. Hold value and move the deal forward.',
    className: [
      '[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1',
      'before:absolute before:w-full before:h-full before:rounded-brand before:content-[\'\']',
      'before:bg-blend-overlay before:bg-surface/50 before:outline-1 before:outline-border',
      'grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700',
      'hover:grayscale-0 before:left-0 before:top-0',
    ].join(' '),
  },
  {
    icon: <ShieldCheck className="size-4 text-accent" />,
    category: 'Customer Service',
    title: 'De-escalating a Frustrated Customer',
    description:
      'A customer has experienced repeated issues with their account. They are frustrated and considering leaving. Resolve the situation.',
    className:
      '[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10',
  },
]

export default function DisplayCardsPreview() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="pt-32 pb-8 px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <p className="text-eyebrow font-body uppercase tracking-eyebrow text-accent mb-2">
            Component Preview
          </p>
          <h1 className="font-heading text-headline tracking-heading">
            Display Cards
          </h1>
          <p className="text-body text-copy-mid mt-3 max-w-xl">
            Stacked scenario cards with hover-to-reveal interaction. Each card
            represents a training scenario with a title and description.
          </p>
        </div>
      </div>

      <div className="flex min-h-[500px] w-full items-center justify-center py-section-mobile md:py-section">
        <div className="w-full max-w-3xl px-container-mobile md:px-container">
          <DisplayCards cards={scenarioCards} />
        </div>
      </div>
    </div>
  )
}
