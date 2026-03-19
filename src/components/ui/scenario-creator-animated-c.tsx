'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ---------------------------------------------------------
   Concept C: "Thought Bubble to Scenario"

   More abstract/editorial. A vague, human thought appears
   as a soft cloud of words, then sharpens and crystallizes
   into a structured scenario card — representing the
   transformation from "I have something I need to practice"
   to a ready-to-use simulation. Warm, almost poetic.
   --------------------------------------------------------- */

const thoughtWords = [
  { text: 'deadlines', x: '25%', y: '20%', size: 'text-body-sm', weight: 'font-body-medium' },
  { text: 'feedback', x: '55%', y: '15%', size: 'text-caption', weight: '' },
  { text: 'nervous', x: '15%', y: '45%', size: 'text-caption', weight: '' },
  { text: 'team member', x: '60%', y: '40%', size: 'text-body-sm', weight: 'font-body-medium' },
  { text: 'missed', x: '40%', y: '55%', size: 'text-caption', weight: '' },
  { text: 'relationship', x: '20%', y: '70%', size: 'text-caption', weight: '' },
  { text: 'improvement', x: '65%', y: '65%', size: 'text-caption', weight: '' },
]

export function ScenarioCreatorAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const thoughtCloud = el.querySelector('[data-thought-cloud]')
      const words = el.querySelectorAll('[data-word]')
      const transformLine = el.querySelector('[data-transform]')
      const card = el.querySelector('[data-card]')
      const cardItems = el.querySelectorAll('[data-card-item]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(thoughtCloud, { opacity: 0 })
      tl.set(words, { opacity: 0, scale: 0.6 })
      tl.set(transformLine, { scaleX: 0, opacity: 0 })
      tl.set(card, { opacity: 0, y: 30 })
      tl.set(cardItems, { opacity: 0, y: 10 })

      /* Phase 1: Thought cloud appears */
      tl.to(thoughtCloud, { opacity: 1, duration: 0.4 })

      /* Phase 2: Words drift in, scattered and soft */
      tl.to(words, {
        opacity: 0.6,
        scale: 1,
        duration: 0.5,
        stagger: {
          each: 0.15,
          from: 'random',
        },
        ease: 'power2.out',
      })

      /* Phase 3: Words gently float (continuous feel) */
      words.forEach((word, i) => {
        gsap.to(word, {
          y: `+=${6 + (i % 3) * 3}`,
          x: `+=${(i % 2 === 0 ? 4 : -4)}`,
          duration: 2 + (i % 3) * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        })
      })

      /* Phase 4: Hold on thought cloud */
      tl.to({}, { duration: 1.5 })

      /* Phase 5: Words converge toward center and fade */
      tl.to(words, {
        opacity: 0,
        scale: 0.3,
        x: '50%',
        y: '50%',
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.in',
      })

      /* Phase 6: Transform line draws through */
      tl.to(transformLine, { opacity: 1, duration: 0.1 })
      tl.to(transformLine, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })

      /* Phase 7: Cloud fades, card rises */
      tl.to(thoughtCloud, { opacity: 0, duration: 0.3 }, '-=0.2')
      tl.to(transformLine, { opacity: 0, duration: 0.3 })
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
      })

      /* Phase 8: Card content appears piece by piece */
      tl.to(cardItems, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.12,
      })

      /* Phase 9: Hold */
      tl.to({}, { duration: 3.5 })

      /* Phase 10: Fade out */
      tl.to([card, thoughtCloud], {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* ── Thought cloud: scattered words ── */}
      <div
        data-thought-cloud=""
        className="absolute inset-0"
        style={{ opacity: 0 }}
      >
        {/* Soft background wash */}
        <div className="absolute inset-x-8 inset-y-4 rounded-brand bg-accent-whisper/50 blur-2xl" />

        {/* Floating words */}
        {thoughtWords.map((word, i) => (
          <span
            key={i}
            data-word=""
            className={`absolute ${word.size} ${word.weight} text-copy-mid/70 font-body select-none`}
            style={{ left: word.x, top: word.y, opacity: 0 }}
          >
            {word.text}
          </span>
        ))}

        {/* Center prompt */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-caption text-copy-faint italic font-body">
            What do you need to practice?
          </p>
        </div>
      </div>

      {/* ── Transform line ── */}
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2">
        <div
          data-transform=""
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
          style={{ opacity: 0, transform: 'scaleX(0)' }}
        />
      </div>

      {/* ── Crystallized scenario card ── */}
      <div
        data-card=""
        className="absolute inset-0 px-5 py-6 md:px-7"
        style={{ opacity: 0 }}
      >
        <div className="rounded-brand bg-accent-whisper bg-noise-fine p-5" style={{ backgroundBlendMode: 'overlay' }}>
          {/* Eyebrow */}
          <div data-card-item="" className="flex items-center gap-2 mb-3" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Your Scenario
            </span>
          </div>

          {/* Title */}
          <h3
            data-card-item=""
            className="font-heading text-body tracking-heading text-dark mb-4 leading-snug"
            style={{ opacity: 0 }}
          >
            Giving constructive feedback on missed deadlines
          </h3>

          {/* Character */}
          <div data-card-item="" className="flex items-center gap-3 mb-4" style={{ opacity: 0 }}>
            <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent-soft flex items-center justify-center">
              <span className="font-heading text-caption text-accent">J</span>
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark">Jordan</p>
              <p className="text-[10px] text-copy-light">
                Defensive initially, opens up when heard
              </p>
            </div>
          </div>

          {/* Context */}
          <div data-card-item="" className="p-3 rounded-brand-sm bg-surface-white/60 border border-border mb-4" style={{ opacity: 0 }}>
            <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-1">
              Context
            </p>
            <p className="text-caption text-copy-mid leading-relaxed">
              Your direct report has missed two consecutive deadlines on a critical project.
              You value the relationship and want to address it constructively.
            </p>
          </div>

          {/* Objectives */}
          <div data-card-item="" className="space-y-1.5 mb-4" style={{ opacity: 0 }}>
            <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light">
              Objectives
            </p>
            <div className="flex items-start gap-2">
              <span className="text-accent/60 mt-0.5 shrink-0">1.</span>
              <span className="text-caption text-copy-mid leading-relaxed">
                Address performance concerns while preserving trust
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent/60 mt-0.5 shrink-0">2.</span>
              <span className="text-caption text-copy-mid leading-relaxed">
                Co-create an improvement plan
              </span>
            </div>
          </div>

          {/* Ready state */}
          <div data-card-item="" className="flex items-center justify-between pt-3 border-t border-accent-soft/30" style={{ opacity: 0 }}>
            <span className="text-[10px] text-copy-faint flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="2" y="5" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="0.8" />
                <path d="M3.5 5V3.5a1.5 1.5 0 013 0V5" stroke="currentColor" strokeWidth="0.8" />
              </svg>
              Private practice
            </span>
            <span className="inline-block text-caption font-body-medium text-surface-white bg-accent px-4 py-1.5 rounded-full">
              Start Conversation
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
