'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Grid } from '@/components/grid'
import { LogoBar } from '@/components/sections/logo-bar'
import { ImageReveal } from '@/components/animations/image-reveal'
import { SimulationCard } from '@/components/ui/simulation-card'
import { Reveal } from '@/components/reveal'

/* ── Mic icon (inline, keeps hero self-contained) ── */

function MicIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

/* ── Compact mobile demo card ── */

function MobileDemoCard() {
  return (
    <Link
      href="/try-for-free"
      className="group flex items-center gap-4 p-4 rounded-brand-lg border border-border bg-surface-white shadow-card hover:border-accent-soft hover:-translate-y-px transition-all duration-normal"
    >
      {/* Avatar with online dot */}
      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-soft">
          <Image
            src="/images/team/zoe-headshot.png"
            alt="Sarah"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface-white animate-[pulse-breath_3.5s_ease-in-out_infinite]" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-heading text-label tracking-heading text-dark leading-snug">
          Sarah is waiting
        </p>
        <p className="text-caption text-copy-mid mt-0.5 line-clamp-1">
          Navigate a difficult performance conversation
        </p>
      </div>

      {/* Mic CTA */}
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 group-hover:bg-accent-hover transition-colors animate-[cta-glow_3s_ease-in-out_2s_infinite]">
        <MicIcon className="w-4.5 h-4.5 text-surface-white" />
      </div>
    </Link>
  )
}

/* ── Hero ── */

export function Hero() {
  return (
    <section className="relative min-h-[auto] lg:min-h-screen flex flex-col bg-surface-white overflow-hidden pt-header">
      <Grid className="text-dark/[0.02]" dotSize={1} gap={40} />
      <div className="relative z-10 mx-auto w-full max-w-site px-container-mobile md:px-container flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal delay={400}>
              <h1 className="font-heading text-headline leading-[1.05] tracking-heading mb-12">
                Customized AI roleplays for the conversations that <em className="text-accent">matter most</em>
              </h1>
            </Reveal>
            <Reveal delay={600}>
              <p className="text-body text-copy-mid max-w-[520px] leading-[1.7] mb-10">
                Training platform for high-stakes workplace conversations. From
                sales negotiations to management feedback, your teams build real
                skills through ultra-realistic AI conversation simulations - all
                easily customizable to meet your specific training needs.
              </p>
            </Reveal>

            {/* Secondary link only — demo card is the primary CTA */}
            <Reveal delay={800}>
              <Link
                href="/find-out-more"
                className="text-sm font-body-medium text-copy-mid hover:text-accent transition-colors"
              >
                Find Out More →
              </Link>
            </Reveal>

            {/* Mobile: compact demo card below the text */}
            <div className="lg:hidden mt-10">
              <Reveal delay={1000}>
                <MobileDemoCard />
              </Reveal>
            </div>
          </div>

          {/* Desktop: dark photo treatment */}
          <ImageReveal direction="right" duration={1.6} delay={0.5} immediate className="hidden lg:block">
            <SimulationCard
              layout="photo-warm"
              characterName="Sarah"
              characterRole="Team Lead"
              characterInitials="SL"
              characterImage="/images/team/zoe-headshot.png"
              backgroundImage="/images/photography/glass-tower-pair-at-window.png"
              title="Navigate a difficult performance conversation"
              socialProof="2,847 conversations this week"
              href="/try-for-free"
            />
          </ImageReveal>
        </div>
      </div>

      {/* Pinned to bottom of viewport */}
      <div className="relative z-10 shrink-0 mt-12 lg:mt-0">
        <LogoBar />
      </div>
    </section>
  )
}
