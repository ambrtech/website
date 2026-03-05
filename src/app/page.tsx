import { createMetadata } from '@/lib/metadata'
import { OrganizationJsonLd } from '@/components/json-ld'
import { Hero } from '@/components/sections/hero'
import { LogoBar } from '@/components/sections/logo-bar'
import { Statement } from '@/components/sections/statement'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Impact } from '@/components/sections/impact'
import { SplitContent } from '@/components/sections/split-content'
import { ProductScreenshot, MockFeedbackPanel } from '@/components/sections/product-screenshot'
import { EditorialFeature } from '@/components/sections/editorial-feature'
import { SecurityBadges } from '@/components/sections/security-badges'
import { WhyAmbr } from '@/components/sections/why-ambr'
import { Testimonial } from '@/components/sections/testimonial'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Ambr AI',
  description:
    'Bespoke voice-based AI conversation simulations for enterprise workplace training.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <div data-section="hero"><Hero /></div>
      <div data-section="logo-bar"><LogoBar /></div>
      <div data-section="statement"><Statement /></div>
      <div data-section="how-it-works"><HowItWorks /></div>
      <div data-section="impact"><Impact /></div>
      <div data-section="feedback">
        <SplitContent
          eyebrow="Coaching"
          heading={<>Feedback that actually changes <em className="text-accent italic font-light">behaviour</em></>}
          visualContent={
            <ProductScreenshot tint>
              <MockFeedbackPanel />
            </ProductScreenshot>
          }
        >
          <p>
            Every conversation ends with structured, personalised coaching: tone, pacing,
            word choice, approach, and delivery. Not a score. Not a summary. Actionable
            insight your people can apply immediately.
          </p>
        </SplitContent>
      </div>
      <div data-section="editorial">
        <EditorialFeature
          eyebrow="The platform"
          heading={<>Everything your team needs, in <em className="text-accent italic font-light">one place</em></>}
          subtitle="Voice simulations, structured feedback, team analytics, and 30+ languages — all from a single dashboard."
        />
      </div>
      <div data-section="security">
        <SecurityBadges
          variant="dark"
          heading="Enterprise-grade security and controls."
          description="Ambr AI meets the highest industry standards for security and compliance. Complete data isolation, role-based access controls, and full audit trails. Your conversation data is yours — always."
          href="/security/compliance"
          badges={[
            { icon: '/icons/badge-iso.svg', label: 'ISO 27001', href: '/security/compliance' },
            { icon: '/icons/badge-gdpr.svg', label: 'GDPR', href: '/security/compliance' },
            { icon: '/icons/badge-eu-ai-act.png', label: 'EU AI Act', href: '/security/compliance', wide: true },
          ]}
        />
      </div>
      <div data-section="why-ambr"><WhyAmbr /></div>
      <div data-section="testimonial"><Testimonial /></div>
      <div data-section="cta"><CTA /></div>
    </>
  )
}
