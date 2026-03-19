'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ---------------------------------------------------------
   Concept A: "The Persona Emerges"

   An editorial character card assembles piece by piece:
   avatar initials appear, name types in, role badge slides,
   personality trait pills pop in one by one, then a
   behavior-pattern meter fills. The character feels like
   it's being composed by hand — warm, crafted, deliberate.
   --------------------------------------------------------- */

import { HelpCircle, ListChecks, Cpu } from 'lucide-react'

const traits = [
  { label: 'Skeptical', Icon: HelpCircle },
  { label: 'Demanding', Icon: ListChecks },
  { label: 'Technical', Icon: Cpu },
]

const behaviorPatterns = [
  'Asks for data before accepting claims',
  'Challenges assumptions directly',
  'Becomes receptive when shown evidence',
]

export function ContextSelectorAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const avatar = el.querySelector('[data-avatar]')
      const avatarInitial = el.querySelector('[data-avatar-initial]')
      const nameChars = el.querySelectorAll('[data-name-char]')
      const roleBadge = el.querySelector('[data-role]')
      const divider = el.querySelector('[data-divider]')
      const traitLabel = el.querySelector('[data-trait-label]')
      const traitPills = el.querySelectorAll('[data-trait]')
      const behaviorLabel = el.querySelector('[data-behavior-label]')
      const behaviorRows = el.querySelectorAll('[data-behavior]')
      const meterFill = el.querySelector('[data-meter-fill]')
      const readyBadge = el.querySelector('[data-ready]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0, y: 20 })
      tl.set(avatar, { opacity: 0, scale: 0.5 })
      tl.set(avatarInitial, { opacity: 0, scale: 0.5 })
      tl.set(nameChars, { opacity: 0, y: 8 })
      tl.set(roleBadge, { opacity: 0, x: -12 })
      tl.set(divider, { scaleX: 0 })
      tl.set(traitLabel, { opacity: 0 })
      tl.set(traitPills, { opacity: 0, scale: 0.7, y: 6 })
      tl.set(behaviorLabel, { opacity: 0 })
      tl.set(behaviorRows, { opacity: 0, x: -10 })
      tl.set(meterFill, { scaleX: 0 })
      tl.set(readyBadge, { opacity: 0, scale: 0.8 })

      /* Phase 1: Card container appears */
      tl.to(card, { opacity: 1, y: 0, duration: 0.5 })

      /* Phase 2: Avatar circle scales in, then initial appears */
      tl.to(avatar, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2)' })
      tl.to(avatarInitial, { opacity: 1, scale: 1, duration: 0.3 }, '-=0.15')

      /* Phase 3: Name types in character by character */
      tl.to(nameChars, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power1.out',
      })

      /* Phase 4: Role badge slides in */
      tl.to(roleBadge, { opacity: 1, x: 0, duration: 0.4 }, '-=0.1')

      /* Phase 5: Divider draws */
      tl.to(divider, { scaleX: 1, duration: 0.45, ease: 'power2.inOut' })

      /* Phase 6: Personality section */
      tl.to(traitLabel, { opacity: 1, duration: 0.3 })
      tl.to(traitPills, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: 'back.out(2)',
      })

      /* Phase 7: Behavior patterns */
      tl.to(behaviorLabel, { opacity: 1, duration: 0.3 }, '-=0.1')
      tl.to(behaviorRows, {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.2,
      })

      /* Phase 8: Completeness meter fills */
      tl.to(meterFill, {
        scaleX: 1,
        duration: 0.7,
        ease: 'power2.out',
      })

      /* Phase 9: Ready badge appears */
      tl.to(readyBadge, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'back.out(2)',
      })

      /* Phase 10: Hold for reading */
      tl.to({}, { duration: 3.0 })

      /* Phase 11: Fade out */
      tl.to(card, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  const name = 'Lucas'
  const role = 'Cost-Conscious Procurement Manager'

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      <div
        data-card=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine px-6 py-7 md:px-8"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Top: Avatar + Identity */}
        <div className="flex items-center gap-4 mb-4">
          <div
            data-avatar=""
            className="w-14 h-14 rounded-full bg-accent/15 border-2 border-accent-soft flex items-center justify-center shrink-0"
            style={{ opacity: 0 }}
          >
            <span
              data-avatar-initial=""
              className="font-heading text-body text-accent"
              style={{ opacity: 0 }}
            >
              L
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Name — typed character by character */}
            <div className="flex items-baseline gap-px mb-1">
              {name.split('').map((char, i) => (
                <span
                  key={i}
                  data-name-char=""
                  className="font-heading text-body tracking-heading text-dark inline-block"
                  style={{ opacity: 0 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            {/* Role badge */}
            <span
              data-role=""
              className="text-caption text-copy-light font-body leading-tight"
              style={{ opacity: 0 }}
            >
              {role}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-px bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Personality traits */}
        <div className="mb-5">
          <p
            data-trait-label=""
            className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2.5"
            style={{ opacity: 0 }}
          >
            Personality
          </p>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <span
                key={trait.label}
                data-trait=""
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-white border border-border text-caption font-body-medium text-dark"
                style={{ opacity: 0 }}
              >
                <trait.Icon className="w-3.5 h-3.5 text-accent" />
                {trait.label}
              </span>
            ))}
          </div>
        </div>

        {/* Behavior patterns */}
        <div className="mb-5">
          <p
            data-behavior-label=""
            className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2.5"
            style={{ opacity: 0 }}
          >
            Behavior Patterns
          </p>
          <div className="space-y-1.5">
            {behaviorPatterns.map((pattern, i) => (
              <div
                key={i}
                data-behavior=""
                className="flex items-start gap-2 text-caption text-copy-mid leading-relaxed"
                style={{ opacity: 0 }}
              >
                <span className="text-accent/60 mt-px shrink-0">&bull;</span>
                <span>{pattern}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Completeness meter */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow">
              Character completeness
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-white overflow-hidden">
            <div
              data-meter-fill=""
              className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </div>

        {/* Ready badge */}
        <div className="flex justify-end">
          <span
            data-ready=""
            className="inline-flex items-center gap-1.5 text-caption font-body-medium text-accent"
            style={{ opacity: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.5 7.2L6.2 8.8L9.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ready to use
          </span>
        </div>
      </div>
    </div>
  )
}
