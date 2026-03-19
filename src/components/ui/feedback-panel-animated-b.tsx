'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept B: "The Coaching Margin"

   An editorial magazine-margin layout. Quantitative
   metrics (talk-listen as a stacked bar, pace as a
   typographic stat) sit at the top. Below, key coaching
   moments appear as annotated margin notes — abstract,
   warm, never text-heavy. The metaphor is an editor's
   annotations on your performance.
   ───────────────────────────────────────────────────── */

export function FeedbackPanelAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')

      // Metrics row
      const metricsRow = el.querySelector('[data-metrics]')
      const talkBar = el.querySelector('[data-talk-bar]')
      const listenBar = el.querySelector('[data-listen-bar]')
      const talkLabel = el.querySelector('[data-talk-label]')
      const listenLabel = el.querySelector('[data-listen-label]')
      const paceStat = el.querySelector('[data-pace-stat]')
      const paceCaption = el.querySelector('[data-pace-caption]')

      // Divider
      const divider = el.querySelector('[data-divider]')

      // Margin notes
      const notes = el.querySelectorAll('[data-note]')
      const noteDots = el.querySelectorAll('[data-note-dot]')
      const noteLines = el.querySelectorAll('[data-note-line]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(metricsRow, { opacity: 0 })
      tl.set(talkBar, { scaleX: 0 })
      tl.set(listenBar, { scaleX: 0 })
      tl.set([talkLabel, listenLabel], { opacity: 0 })
      tl.set(paceStat, { opacity: 0, y: 8 })
      tl.set(paceCaption, { opacity: 0 })
      tl.set(divider, { scaleX: 0 })
      tl.set(notes, { opacity: 0, x: -10 })
      tl.set(noteDots, { opacity: 0, scale: 0 })
      tl.set(noteLines, { scaleY: 0 })

      /* Phase 1: Background */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: Metrics row fades in */
      tl.to(metricsRow, { opacity: 1, duration: 0.3 })

      /* Phase 4: Talk-listen stacked bar fills */
      tl.to(talkBar, { scaleX: 1, duration: 0.7, ease: 'power2.out' })
      tl.to(listenBar, { scaleX: 1, duration: 0.7, ease: 'power2.out' }, '-=0.5')
      tl.to(talkLabel, { opacity: 1, duration: 0.25 }, '-=0.3')
      tl.to(listenLabel, { opacity: 1, duration: 0.25 }, '-=0.15')

      /* Phase 5: Pace stat */
      tl.to(paceStat, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')
      tl.to(paceCaption, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 6: Divider */
      tl.to(divider, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })

      /* Phase 7: Margin notes stagger in */
      notes.forEach((note, i) => {
        tl.to(noteDots[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(3)',
        }, i === 0 ? undefined : '-=0.2')
        tl.to(noteLines[i], {
          scaleY: 1,
          duration: 0.3,
          ease: 'power2.out',
        }, '-=0.15')
        tl.to(note, {
          opacity: 1,
          x: 0,
          duration: 0.4,
        }, '-=0.2')
      })

      /* Phase 8: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 9: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  const marginNotes = [
    {
      label: 'Empathy',
      text: 'Opened with genuine acknowledgement',
      grade: 'Strong',
    },
    {
      label: 'Structure',
      text: 'Clear framing, could improve closing',
      grade: 'Good',
    },
    {
      label: 'Tone',
      text: 'Calm and measured throughout',
      grade: 'Strong',
    },
  ]

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-7 md:px-8">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-5" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Session Feedback
          </span>
        </div>

        {/* Metrics row */}
        <div data-metrics="" className="mb-6" style={{ opacity: 0 }}>
          {/* Talk-listen stacked bar */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-detail font-body-medium text-copy-light uppercase tracking-eyebrow">
                Talk / Listen
              </span>
            </div>
            <div className="flex h-3 rounded-full overflow-hidden bg-surface-alt">
              <div
                data-talk-bar=""
                className="h-full bg-accent origin-left"
                style={{ width: '36%', transform: 'scaleX(0)' }}
              />
              <div
                data-listen-bar=""
                className="h-full bg-accent-soft origin-left"
                style={{ width: '64%', transform: 'scaleX(0)' }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span
                data-talk-label=""
                className="text-detail text-copy-mid"
                style={{ opacity: 0 }}
              >
                36% talking
              </span>
              <span
                data-listen-label=""
                className="text-detail text-copy-light"
                style={{ opacity: 0 }}
              >
                64% listening
              </span>
            </div>
          </div>

          {/* Pace stat */}
          <div className="flex items-baseline gap-2">
            <span
              data-pace-stat=""
              className="font-heading text-section text-dark tracking-heading leading-none"
              style={{ opacity: 0 }}
            >
              105
            </span>
            <span
              data-pace-caption=""
              className="text-caption text-copy-light"
              style={{ opacity: 0 }}
            >
              words per minute — steady, measured pace
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Margin notes */}
        <div className="space-y-4">
          {marginNotes.map((note, i) => (
            <div key={i} className="flex items-start gap-3">
              {/* Dot + vertical line */}
              <div className="flex flex-col items-center shrink-0 pt-0.5">
                <span
                  data-note-dot=""
                  className="w-2 h-2 rounded-full bg-accent"
                  style={{ opacity: 0 }}
                />
                {i < marginNotes.length - 1 && (
                  <span
                    data-note-line=""
                    className="w-[1.5px] bg-accent-soft/40 mt-1 origin-top"
                    style={{ height: '28px', transform: 'scaleY(0)' }}
                  />
                )}
              </div>

              {/* Note content */}
              <div data-note="" style={{ opacity: 0 }}>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-caption font-body-medium text-dark">
                    {note.label}
                  </span>
                  <span className="text-detail text-accent font-body-medium">
                    {note.grade}
                  </span>
                </div>
                <p className="text-caption text-copy-mid leading-relaxed">
                  {note.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
