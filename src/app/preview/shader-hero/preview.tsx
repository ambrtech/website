"use client"

import Link from 'next/link'
import Image from 'next/image'
import ShaderBackground from '@/components/ui/shader-background'
import { Reveal } from '@/components/reveal'

export function ShaderHeroPreview() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Shader replaces the static bg-surface-white + Grid */}
      <ShaderBackground />

      <div className="relative z-10 mx-auto w-full max-w-site px-container-mobile md:px-container">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal delay={300}>
              <p className="text-caption font-body-medium uppercase tracking-eyebrow text-copy-light mb-10 eyebrow-hairline">
                AI voice simulation for enterprise teams
              </p>
            </Reveal>
            <Reveal delay={400}>
              <h1 className="font-heading text-display leading-[0.95] tracking-tight mb-12">
                Conversations<br />
                <em className="text-accent">perfected.</em>
              </h1>
            </Reveal>
            <Reveal delay={600}>
              <p className="text-lg text-copy-mid max-w-[520px] leading-[1.7] mb-10">
                The world&apos;s most realistic AI conversation practice. Custom-built
                around your organisation, your scenarios, and the conversations
                that drive your business.
              </p>
            </Reveal>
            <Reveal delay={750}>
              <Link
                href="/contact"
                className="group relative inline-block rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 bg-noise mix-blend-overlay transition-opacity" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={500} className="hidden lg:block">
            <Image
              src="/images/photography/hero-quiet-reflection.jpeg"
              alt="A woman at her desk in quiet reflection after a practice session, seen through indoor plant leaves with warm window light"
              width={720}
              height={480}
              priority
              className="w-full h-auto rounded-brand-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
