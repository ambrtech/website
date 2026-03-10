import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Professional Services',
  description:
    'AI conversation simulations designed for professional services firms. Build client-facing confidence across your advisory, audit, and consulting teams.',
  path: '/industries/professional-services',
})

export default function ProfessionalServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Professional Services', href: '/industries/professional-services' },
        ]}
      />
      <PageHero
        compact
        heading={
          <>
            Training for <em className="text-accent">professional</em> services teams
          </>
        }
        subtitle="AI conversation simulations designed for professional services firms. Build client-facing confidence across your advisory, audit, and consulting teams."
      />
      <SplitContent
        eyebrow="The challenge"
        heading="Client conversations carry high stakes"
        body="In professional services, every client interaction shapes trust. From delivering difficult audit findings to navigating scope negotiations, your people need to communicate with precision and confidence under pressure."
      />
      <SplitContent
        reversed
        eyebrow="The solution"
        heading="Realistic practice that builds real confidence"
        body="Ambr AI gives your teams a structured, private way to practice the conversations that matter most. Realistic voice simulations with AI characters that push back, adapt, and respond just like a real client or stakeholder would."
      />
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> firm.
          </>
        }
        subtitle="Practice the conversations that build client trust."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
