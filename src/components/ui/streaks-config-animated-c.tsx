'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept C: "Step-by-Step Setup Wizard"

   Presents the engagement configuration as a guided
   setup flow — three numbered steps that the admin
   walks through. Each step builds on the last: choose
   frequency, pick channels, set digest preferences.
   Feels like a thoughtful onboarding experience.
   ───────────────────────────────────────────────────── */

function CheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="currentColor" className="text-accent" />
      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StreaksConfigAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')

      // Step 1
      const step1 = el.querySelector('[data-step-1]')
      const step1Num = el.querySelector('[data-step-1-num]')
      const step1Check = el.querySelector('[data-step-1-check]')
      const step1Content = el.querySelector('[data-step-1-content]')
      const freqOptions = el.querySelectorAll('[data-freq-opt]')
      const freqHighlight = el.querySelector('[data-freq-highlight]')

      // Step 2
      const step2 = el.querySelector('[data-step-2]')
      const step2Num = el.querySelector('[data-step-2-num]')
      const step2Check = el.querySelector('[data-step-2-check]')
      const step2Content = el.querySelector('[data-step-2-content]')
      const channelChecks = el.querySelectorAll('[data-channel-check]')

      // Step 3
      const step3 = el.querySelector('[data-step-3]')
      const step3Num = el.querySelector('[data-step-3-num]')
      const step3Check = el.querySelector('[data-step-3-check]')
      const step3Content = el.querySelector('[data-step-3-content]')
      const digestToggle = el.querySelector('[data-digest-toggle]')
      const digestKnob = el.querySelector('[data-digest-knob]')

      // Done
      const doneMessage = el.querySelector('[data-done]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set([step1, step2, step3], { opacity: 0, y: 8 })
      tl.set([step1Num, step2Num, step3Num], { opacity: 1 })
      tl.set([step1Check, step2Check, step3Check], { opacity: 0, scale: 0 })
      tl.set([step1Content, step2Content, step3Content], { opacity: 0 })
      tl.set(freqOptions, { opacity: 0 })
      tl.set(freqHighlight, { opacity: 0 })
      tl.set(channelChecks, { opacity: 0, scale: 0 })
      tl.set(digestToggle, { backgroundColor: 'var(--color-surface-alt)' })
      tl.set(digestKnob, { x: 0 })
      tl.set(doneMessage, { opacity: 0, y: 8 })

      /* Phase 1: Card + header */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 2: Step 1 — Choose frequency */
      tl.to(step1, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(step1Content, { opacity: 1, duration: 0.25 })
      tl.to(freqOptions, { opacity: 1, duration: 0.2, stagger: 0.06 })
      // Select "Weekly"
      tl.to(freqHighlight, { opacity: 1, duration: 0.3 })
      // Mark step 1 complete
      tl.to(step1Num, { opacity: 0, duration: 0.15 })
      tl.to(step1Check, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.5)' }, '-=0.1')

      /* Phase 3: Step 2 — Pick channels */
      tl.to(step2, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(step2Content, { opacity: 1, duration: 0.25 })
      // Channel checkboxes tick
      tl.to(channelChecks, { opacity: 1, scale: 1, duration: 0.2, stagger: 0.12, ease: 'back.out(3)' })
      // Mark step 2 complete
      tl.to(step2Num, { opacity: 0, duration: 0.15 })
      tl.to(step2Check, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.5)' }, '-=0.1')

      /* Phase 4: Step 3 — Admin digest */
      tl.to(step3, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(step3Content, { opacity: 1, duration: 0.25 })
      // Toggle on
      tl.to(digestToggle, { backgroundColor: 'var(--color-accent)', duration: 0.3 })
      tl.to(digestKnob, { x: 16, duration: 0.3, ease: 'power2.out' }, '-=0.3')
      // Mark step 3 complete
      tl.to(step3Num, { opacity: 0, duration: 0.15 })
      tl.to(step3Check, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.5)' }, '-=0.1')

      /* Phase 5: Done message */
      tl.to(doneMessage, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 6: Hold */
      tl.to({}, { duration: 2.8 })

      /* Phase 7: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-step-1], [data-step-2], [data-step-3], [data-done]'),
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-6">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-2" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Engagement Setup
          </span>
        </div>

        {/* Title */}
        <h3
          data-title=""
          className="font-heading text-body text-dark tracking-heading leading-snug mb-5"
          style={{ opacity: 0 }}
        >
          Configure engagement in three steps
        </h3>

        {/* Steps */}
        <div className="space-y-3">
          {/* Step 1: Frequency */}
          <div data-step-1="" className="p-3 rounded-brand-sm bg-surface-white/60 border border-border" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                <span
                  data-step-1-num=""
                  className="text-detail font-body-medium text-accent w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center"
                >
                  1
                </span>
                <span data-step-1-check="" className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0 }}>
                  <CheckCircle />
                </span>
              </div>
              <span className="text-caption font-body-medium text-dark">Choose frequency</span>
            </div>
            <div data-step-1-content="" style={{ opacity: 0 }}>
              <div className="flex gap-2 ml-8">
                {(['Weekly', 'Fortnightly', 'Monthly'] as const).map((freq, i) => (
                  <div
                    key={freq}
                    data-freq-opt=""
                    className={`relative flex-1 text-center py-1.5 rounded-brand-sm text-detail ${
                      i === 0 ? 'text-dark font-body-medium' : 'border border-border text-copy-light'
                    }`}
                    style={{ opacity: 0 }}
                  >
                    {i === 0 && (
                      <div
                        data-freq-highlight=""
                        className="absolute inset-0 rounded-brand-sm bg-accent-whisper border border-accent-soft/40"
                        style={{ opacity: 0 }}
                      />
                    )}
                    <span className="relative">{freq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Channels */}
          <div data-step-2="" className="p-3 rounded-brand-sm bg-surface-white/60 border border-border" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                <span
                  data-step-2-num=""
                  className="text-detail font-body-medium text-accent w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center"
                >
                  2
                </span>
                <span data-step-2-check="" className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0 }}>
                  <CheckCircle />
                </span>
              </div>
              <span className="text-caption font-body-medium text-dark">Pick channels</span>
            </div>
            <div data-step-2-content="" style={{ opacity: 0 }}>
              <div className="space-y-1.5 ml-8">
                {(['Email', 'Slack', 'Microsoft Teams'] as const).map((channel) => (
                  <div key={channel} className="flex items-center gap-2">
                    <div
                      data-channel-check=""
                      className="w-3.5 h-3.5 rounded-sm bg-accent flex items-center justify-center"
                      style={{ opacity: 0 }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-detail text-copy-mid">{channel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Admin digest */}
          <div data-step-3="" className="p-3 rounded-brand-sm bg-surface-white/60 border border-border" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                <span
                  data-step-3-num=""
                  className="text-detail font-body-medium text-accent w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center"
                >
                  3
                </span>
                <span data-step-3-check="" className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0 }}>
                  <CheckCircle />
                </span>
              </div>
              <span className="text-caption font-body-medium text-dark">Admin digest</span>
            </div>
            <div data-step-3-content="" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between ml-8">
                <span className="text-detail text-copy-mid">Weekly insights summary</span>
                <div
                  data-digest-toggle=""
                  className="w-9 h-5 rounded-full relative border border-border"
                >
                  <div
                    data-digest-knob=""
                    className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Done message */}
        <div
          data-done=""
          className="mt-4 p-3 rounded-brand-sm bg-accent-tint/40 border border-accent-soft/20 text-center"
          style={{ opacity: 0 }}
        >
          <p className="text-caption text-dark font-body-medium">Engagement configured</p>
          <p className="text-detail text-copy-mid mt-0.5">
            Your team will receive weekly reminders across all channels
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
