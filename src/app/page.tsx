import { createMetadata } from '@/lib/metadata'
import { OrganizationJsonLd } from '@/components/json-ld'
import { Hero } from '@/components/sections/hero'
import { LogoBar } from '@/components/sections/logo-bar'
import { Statement } from '@/components/sections/statement'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Impact } from '@/components/sections/impact'
import { ProductMock } from '@/components/sections/product-mock'
import { Security } from '@/components/sections/security'
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
      <Hero />
      <LogoBar />
      <Statement />
      <HowItWorks />
      <Impact />
      <ProductMock />
      <Security />
      <WhyAmbr />
      <Testimonial />
      <CTA />
    </>
  )
}
