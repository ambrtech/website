import Link from 'next/link'
import Image from 'next/image'
import { Grid } from '@/components/grid'
import { LogoBar } from '@/components/sections/logo-bar'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-surface-white overflow-hidden pt-header">
      <Grid className="text-dark/[0.02]" dotSize={1} gap={40} />
      <div className="relative z-10 mx-auto w-full max-w-site px-container-mobile md:px-container flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-heading text-headline leading-[1.05] tracking-heading mb-12 opacity-0 animate-[clipReveal_1.5s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
              Customized AI roleplays for the conversations that <em className="text-accent">matter most</em>
            </h1>
            <p className="text-body text-copy-mid max-w-[520px] leading-[1.7] mb-10 opacity-0 animate-[fadeIn_1.2s_ease-out_0.6s_both]">
              Training platform for high-stakes workplace conversations. From
              sales negotiations to management feedback, your teams build real
              skills through ultra-realistic AI conversation simulations - all
              easily customizable to meet your specific training needs.
            </p>
            <div className="flex items-center gap-4 opacity-0 animate-[fadeIn_1.2s_ease-out_0.8s_both]">
              <Link
                href="/try-for-free"
                className="group relative inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Try for Free</span>
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 bg-noise mix-blend-overlay transition-opacity" />
              </Link>
              <Link
                href="/find-out-more"
                className="text-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
              >
                Find Out More →
              </Link>
            </div>
          </div>

          <div className="hidden lg:block opacity-0 animate-[clipReveal_1.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_both]">
            <Image
              src="/images/photography/hero-quiet-reflection.jpeg"
              alt="A woman at her desk in quiet reflection after a practice session, seen through indoor plant leaves with warm window light"
              width={720}
              height={480}
              priority
              className="w-full h-auto rounded-brand-lg"
            />
          </div>
        </div>
      </div>

      {/* Pinned to bottom of viewport */}
      <div className="relative z-10 shrink-0">
        <LogoBar />
      </div>
    </section>
  )
}
