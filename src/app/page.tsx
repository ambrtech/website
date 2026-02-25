import { createMetadata } from '@/lib/metadata'
import { OrganizationJsonLd } from '@/components/json-ld'
import { Hero } from '@/components/sections/hero'
import { LogoBar } from '@/components/sections/logo-bar'
import { ValueProp } from '@/components/sections/value-prop'
import { Stats } from '@/components/sections/stats'
import { HowItWorks } from '@/components/sections/how-it-works'
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
      <Hero />
      <LogoBar />
      <ValueProp />
      <Stats />
      <HowItWorks />
      <Testimonial />
      <CTA />
    </>
  )
}
