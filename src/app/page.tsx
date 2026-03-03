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
import { TexturePanel } from '@/components/texture-panel'

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
      <div data-section="product-mock"><ProductMock /></div>
      <div data-section="security"><Security /></div>
      <div data-section="why-ambr"><WhyAmbr /></div>
      <div data-section="testimonial"><Testimonial /></div>
      <div data-section="cta"><CTA /></div>
      <TexturePanel />
    </>
  )
}
