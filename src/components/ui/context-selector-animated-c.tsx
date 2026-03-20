'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept C: "The Character Dossier"

   An editorial, magazine-spread approach. The character is
   presented as a dossier being assembled — a large initial,
   name, then behavioral dimensions fill in like a profile
   page being printed. Warm, analog, minimal. Feels like a
   casting brief rather than a form.
   --------------------------------------------------------- */

const dimensions = [
  { label: 'Directness', value: 78 },
  { label: 'Emotional range', value: 45 },
  { label: 'Resistance', value: 85 },
  { label: 'Adaptability', value: 30 },
]

const backstory = [
  'Experienced procurement manager',
  'Comparing multiple vendors',
  'Tight budget, justifies every expense',
  'Values quality but price is decisive',
]

export function ContextSelectorAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const monogram = el.querySelector('[data-monogram]')
      const nameEl = el.querySelector('[data-name]')
      const subtitle = el.querySelector('[data-subtitle]')
      const divider1 = el.querySelector('[data-divider-1]')
      const dimLabel = el.querySelector('[data-dim-label]')
      const dimBars = el.querySelectorAll('[data-dim-bar]')
      const dimFills = el.querySelectorAll('[data-dim-fill]')
      const dimValues = el.querySelectorAll('[data-dim-value]')
      const divider2 = el.querySelector('[data-divider-2]')
      const storyLabel = el.querySelector('[data-story-label]')
      const storyLines = el.querySelectorAll('[data-story-line]')
      const stamp = el.querySelector('[data-stamp]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(monogram, { opacity: 0, scale: 0.3, rotation: -15 })
      tl.set(nameEl, { opacity: 0, y: 12 })
      tl.set(subtitle, { opacity: 0, y: 8 })
      tl.set(divider1, { scaleX: 0 })
      tl.set(dimLabel, { opacity: 0 })
      tl.set(dimBars, { opacity: 0 })
      tl.set(dimFills, { scaleX: 0 })
      tl.set(dimValues, { opacity: 0 })
      tl.set(divider2, { scaleX: 0 })
      tl.set(storyLabel, { opacity: 0 })
      tl.set(storyLines, { opacity: 0, x: -8 })
      tl.set(stamp, { opacity: 0, scale: 0.5, rotation: -20 })

      /* Phase 1: Warm background card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Large monogram lands with weight */
      tl.to(monogram, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(1.5)',
      })

      /* Phase 3: Name + subtitle */
      tl.to(nameEl, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2')
      tl.to(subtitle, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')

      /* Phase 4: First divider */
      tl.to(divider1, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })

      /* Phase 5: Behavioral dimensions — bars fill to different widths */
      tl.to(dimLabel, { opacity: 1, duration: 0.25 })
      tl.to(dimBars, { opacity: 1, duration: 0.25, stagger: 0.08 })
      tl.to(dimFills, {
        scaleX: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
      })
      tl.to(dimValues, {
        opacity: 1,
        duration: 0.2,
        stagger: 0.08,
      }, '-=0.3')

      /* Phase 6: Second divider + backstory */
      tl.to(divider2, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })
      tl.to(storyLabel, { opacity: 1, duration: 0.25 })
      tl.to(storyLines, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.15,
      })

      /* Phase 7: Approval stamp lands */
      tl.to(stamp, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'back.out(2)',
      })

      /* Phase 8: Hold */
      tl.to({}, { duration: 3.0 })

      /* Phase 9: Fade out */
      tl.to(bg, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      />

      <div className="relative px-6 py-7 md:px-8">
        {/* Top: Monogram + Identity */}
        <div className="flex items-start gap-5 mb-4">
          {/* Large monogram — the editorial centrepiece */}
          <div
            data-monogram=""
            className="w-16 h-16 rounded-brand-sm bg-accent/10 border border-accent-soft/40 flex items-center justify-center shrink-0"
            style={{ opacity: 0 }}
          >
            <span className="font-heading text-section text-accent tracking-heading">L</span>
          </div>

          <div className="flex-1 pt-1">
            <h3
              data-name=""
              className="font-heading text-body tracking-heading text-dark mb-0.5"
              style={{ opacity: 0 }}
            >
              Lucas Ferreira
            </h3>
            <p
              data-subtitle=""
              className="text-caption text-copy-light"
              style={{ opacity: 0 }}
            >
              Cost-Conscious Procurement Manager
            </p>
          </div>
        </div>

        {/* Divider 1 */}
        <div
          data-divider-1=""
          className="h-px bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Behavioral dimensions with horizontal bars */}
        <div className="mb-4">
          <p
            data-dim-label=""
            className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-3"
            style={{ opacity: 0 }}
          >
            Behavioral Dimensions
          </p>
          <div className="space-y-2.5">
            {dimensions.map((dim) => (
              <div key={dim.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-caption text-copy-mid">{dim.label}</span>
                  <span
                    data-dim-value=""
                    className="text-[10px] font-body-medium text-accent tabular-nums"
                    style={{ opacity: 0 }}
                  >
                    {dim.value}%
                  </span>
                </div>
                <div
                  data-dim-bar=""
                  className="h-1.5 rounded-full bg-surface-white overflow-hidden"
                  style={{ opacity: 0 }}
                >
                  <div
                    data-dim-fill=""
                    className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent origin-left"
                    style={{ transform: `scaleX(0)`, width: `${dim.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider 2 */}
        <div
          data-divider-2=""
          className="h-px bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Backstory */}
        <div className="mb-4">
          <p
            data-story-label=""
            className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2"
            style={{ opacity: 0 }}
          >
            Character Background
          </p>
          <div className="space-y-1.5">
            {backstory.map((line, i) => (
              <p
                key={i}
                data-story-line=""
                className="text-caption text-copy-mid leading-relaxed flex items-start gap-2"
                style={{ opacity: 0 }}
              >
                <span className="text-accent-soft mt-px shrink-0">&mdash;</span>
                <span>{line}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Approval stamp */}
        <div className="flex justify-end">
          <div
            data-stamp=""
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-soft/50 bg-accent-whisper"
            style={{ opacity: 0 }}
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] font-body-medium text-accent uppercase tracking-eyebrow">
              Character Ready
            </span>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
