'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept A: "Toggle Configuration"

   An admin settings panel where toggle switches animate
   on, frequency pills get selected, and a progress bar
   fills to show target configuration. Each section
   activates in sequence — streaks, reminders, digest.
   ───────────────────────────────────────────────────── */

export function StreaksConfigAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')

      // Streaks section
      const streaksCard = el.querySelector('[data-streaks-card]')
      const streaksToggle = el.querySelector('[data-streaks-toggle]')
      const streaksKnob = el.querySelector('[data-streaks-knob]')
      const freqPills = el.querySelectorAll('[data-freq]')
      const selectedPill = el.querySelector('[data-freq-selected]')
      const targetBar = el.querySelector('[data-target-bar]')
      const targetLabel = el.querySelector('[data-target-label]')

      // Reminders section
      const remindersCard = el.querySelector('[data-reminders-card]')
      const remindersToggle = el.querySelector('[data-reminders-toggle]')
      const remindersKnob = el.querySelector('[data-reminders-knob]')
      const channels = el.querySelectorAll('[data-channel]')

      // Digest section
      const digestCard = el.querySelector('[data-digest-card]')
      const digestToggle = el.querySelector('[data-digest-toggle]')
      const digestKnob = el.querySelector('[data-digest-knob]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(streaksCard, { opacity: 0, y: 10 })
      tl.set(streaksToggle, { backgroundColor: 'var(--color-surface-alt)' })
      tl.set(streaksKnob, { x: 0 })
      tl.set(freqPills, { opacity: 0 })
      tl.set(selectedPill, { opacity: 0 })
      tl.set(targetBar, { scaleX: 0 })
      tl.set(targetLabel, { opacity: 0 })
      tl.set(remindersCard, { opacity: 0, y: 10 })
      tl.set(remindersToggle, { backgroundColor: 'var(--color-surface-alt)' })
      tl.set(remindersKnob, { x: 0 })
      tl.set(channels, { opacity: 0, scale: 0.8 })
      tl.set(digestCard, { opacity: 0, y: 10 })
      tl.set(digestToggle, { backgroundColor: 'var(--color-surface-alt)' })
      tl.set(digestKnob, { x: 0 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 2: Streaks card appears */
      tl.to(streaksCard, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })

      /* Toggle slides on */
      tl.to(streaksToggle, { backgroundColor: 'var(--color-accent)', duration: 0.3 })
      tl.to(streaksKnob, { x: 16, duration: 0.3, ease: 'power2.out' }, '-=0.3')

      /* Frequency pills appear, then "Weekly" gets selected */
      tl.to(freqPills, { opacity: 1, duration: 0.25, stagger: 0.08 })
      tl.to(selectedPill, { opacity: 1, duration: 0.3 }, '-=0.1')

      /* Target bar fills */
      tl.to(targetLabel, { opacity: 1, duration: 0.25 })
      tl.to(targetBar, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Reminders card */
      tl.to(remindersCard, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      tl.to(remindersToggle, { backgroundColor: 'var(--color-accent)', duration: 0.3 })
      tl.to(remindersKnob, { x: 16, duration: 0.3, ease: 'power2.out' }, '-=0.3')
      tl.to(channels, { opacity: 1, scale: 1, duration: 0.25, stagger: 0.1, ease: 'back.out(2)' })

      /* Phase 4: Digest card */
      tl.to(digestCard, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      tl.to(digestToggle, { backgroundColor: 'var(--color-accent)', duration: 0.3 })
      tl.to(digestKnob, { x: 16, duration: 0.3, ease: 'power2.out' }, '-=0.3')

      /* Phase 5: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 6: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-streaks-card], [data-reminders-card], [data-digest-card]'),
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
        <div data-eyebrow="" className="flex items-center gap-2 mb-4" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Engagement Settings
          </span>
        </div>

        {/* Streaks */}
        <div
          data-streaks-card=""
          className="p-4 rounded-brand-sm border border-border bg-surface-white/60 space-y-3 mb-3"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption font-body-medium text-dark">Streaks</p>
              <p className="text-detail text-copy-faint">Encourage regular engagement</p>
            </div>
            <div
              data-streaks-toggle=""
              className="w-9 h-5 rounded-full relative border border-border"
            >
              <div
                data-streaks-knob=""
                className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm"
              />
            </div>
          </div>

          {/* Frequency selector */}
          <div className="relative flex gap-2">
            {(['Weekly', 'Fortnightly', 'Monthly'] as const).map((freq, i) => (
              <div
                key={freq}
                data-freq=""
                className={`flex-1 text-center py-2 rounded-brand-sm text-caption relative ${
                  i === 0 ? 'text-dark' : 'border border-border text-copy-light'
                }`}
                style={{ opacity: 0 }}
              >
                {i === 0 && (
                  <div
                    data-freq-selected=""
                    className="absolute inset-0 rounded-brand-sm bg-accent-whisper border border-accent-soft/40"
                    style={{ opacity: 0 }}
                  />
                )}
                <span className="relative font-body-medium">{freq}</span>
              </div>
            ))}
          </div>

          {/* Target */}
          <div>
            <p
              data-target-label=""
              className="text-caption text-copy-mid mb-1.5"
              style={{ opacity: 0 }}
            >
              Target: 2 scenarios per week
            </p>
            <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
              <div
                data-target-bar=""
                className="h-full rounded-full bg-accent"
                style={{ width: '40%', transformOrigin: 'left', transform: 'scaleX(0)' }}
              />
            </div>
          </div>
        </div>

        {/* Reminders */}
        <div
          data-reminders-card=""
          className="p-4 rounded-brand-sm border border-border bg-surface-white/60 space-y-3 mb-3"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption font-body-medium text-dark">Reminders</p>
              <p className="text-detail text-copy-faint">Via email, Slack, or Microsoft Teams</p>
            </div>
            <div
              data-reminders-toggle=""
              className="w-9 h-5 rounded-full relative border border-border"
            >
              <div
                data-reminders-knob=""
                className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {(['Email', 'Slack', 'Teams'] as const).map((channel) => (
              <span
                key={channel}
                data-channel=""
                className="text-detail px-2 py-1 rounded-brand-sm bg-accent-whisper border border-accent-soft/30 text-copy-mid"
                style={{ opacity: 0 }}
              >
                {channel}
              </span>
            ))}
          </div>
        </div>

        {/* Admin digest */}
        <div
          data-digest-card=""
          className="p-4 rounded-brand-sm border border-border bg-surface-white/60"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption font-body-medium text-dark">Admin digest</p>
              <p className="text-detail text-copy-faint">Weekly summary of insights and engagement</p>
            </div>
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
    </MockFrame>
  )
}
