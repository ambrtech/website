'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import Image from 'next/image'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Training Nudge B: "Teams Notification"

   A Microsoft Teams-style notification toast slides in
   from the top-right of a desktop mockup, then unfolds
   into the full Teams chat view with the Ambr AI bot
   message. Captures that moment of a notification
   arriving on your desktop during the workday.
   ───────────────────────────────────────────────────── */

export function TrainingNudgeAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const desktopBg = el.querySelector('[data-desktop-bg]')
      const toast = el.querySelector('[data-toast]')
      const toastIcon = el.querySelector('[data-toast-icon]')
      const toastText = el.querySelector('[data-toast-text]')
      const teamsShell = el.querySelector('[data-teams-shell]')
      const teamsSidebar = el.querySelector('[data-teams-sidebar]')
      const teamsHeader = el.querySelector('[data-teams-header]')
      const msgAvatar = el.querySelector('[data-msg-avatar]')
      const msgContent = el.querySelector('[data-msg-content]')
      const nudgeCard = el.querySelector('[data-nudge-card]')
      const nudgeProgress = el.querySelector('[data-nudge-progress]')
      const nudgeCta = el.querySelector('[data-nudge-cta]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(desktopBg, { opacity: 0 })
      tl.set(toast, { opacity: 0, y: -30, x: 20 })
      tl.set(toastIcon, { opacity: 0, scale: 0.5 })
      tl.set(toastText, { opacity: 0 })
      tl.set(teamsShell, { opacity: 0, scale: 0.94 })
      tl.set(teamsSidebar, { opacity: 0, x: -16 })
      tl.set(teamsHeader, { opacity: 0, y: -6 })
      tl.set(msgAvatar, { opacity: 0, scale: 0.7 })
      tl.set(msgContent, { opacity: 0, y: 8 })
      tl.set(nudgeCard, { opacity: 0, y: 6 })
      tl.set(nudgeProgress, { scaleX: 0 })
      tl.set(nudgeCta, { opacity: 0, y: 6 })

      /* Phase 1: Desktop background appears */
      tl.to(desktopBg, { opacity: 1, duration: 0.4, ease: 'power1.out' })

      /* Phase 2: Toast notification slides down from top-right */
      tl.to(toast, { opacity: 1, y: 0, x: 0, duration: 0.45, ease: 'power2.out' })
      tl.to(toastIcon, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '-=0.2')
      tl.to(toastText, { opacity: 1, duration: 0.25 }, '-=0.1')

      /* Hold toast — read it */
      tl.to({}, { duration: 1.4 })

      /* Phase 3: Toast slides away, Teams shell expands */
      tl.to(toast, { opacity: 0, y: -16, duration: 0.3, ease: 'power2.in' })
      tl.to(desktopBg, { opacity: 0, duration: 0.2 }, '-=0.1')
      tl.to(teamsShell, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')

      /* Phase 4: Teams sidebar slides in */
      tl.to(teamsSidebar, { opacity: 1, x: 0, duration: 0.35 }, '-=0.2')
      tl.to(teamsHeader, { opacity: 1, y: 0, duration: 0.3 }, '-=0.15')

      /* Phase 5: Message appears */
      tl.to(msgAvatar, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' })
      tl.to(msgContent, { opacity: 1, y: 0, duration: 0.35 }, '-=0.1')

      /* Phase 6: Nudge card unfolds */
      tl.to(nudgeCard, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(nudgeProgress, { scaleX: 1, duration: 0.6, ease: 'power2.out' })
      tl.to(nudgeCta, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Hold — read the full message */
      tl.to({}, { duration: 2.8 })

      /* Phase 7: Everything fades */
      tl.to(
        [teamsShell, teamsSidebar, teamsHeader, msgAvatar, msgContent, nudgeCard, nudgeCta],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="compact">
      {/* ── Desktop background (subtle, represents a workspace) ── */}
      <div
        data-desktop-bg=""
        className="absolute inset-0 rounded-brand bg-surface-alt overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Fake desktop chrome — taskbar hint */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-dark/[0.04] border-t border-border" />
        {/* Placeholder window shapes */}
        <div className="absolute top-8 left-4 right-4 bottom-12 rounded-brand-sm bg-surface-white/60 border border-border" />
      </div>

      {/* ── Toast notification ── */}
      <div
        data-toast=""
        className="absolute top-4 right-4 z-10 w-[220px] flex items-start gap-2.5 p-3 rounded-brand-sm bg-surface-white border border-border shadow-card"
        style={{ opacity: 0 }}
      >
        <div
          data-toast-icon=""
          className="w-7 h-7 rounded-brand-sm bg-accent-soft/40 flex items-center justify-center shrink-0"
          style={{ opacity: 0 }}
        >
          <span className="text-[10px] font-body-medium text-accent">A</span>
        </div>
        <div
          data-toast-text=""
          className="min-w-0"
          style={{ opacity: 0 }}
        >
          <p className="text-[10px] font-body-medium text-dark leading-tight">Ambr AI</p>
          <p className="text-[9px] text-copy-mid leading-snug mt-0.5">
            You&apos;re 2 scenarios away from completing Performance Feedback
          </p>
        </div>
      </div>

      {/* ── Teams shell ── */}
      <div
        data-teams-shell=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden flex"
        style={{ opacity: 0 }}
      >
        {/* Teams sidebar */}
        <div
          data-teams-sidebar=""
          className="w-[60px] bg-dark/[0.03] border-r border-border shrink-0 py-3 flex flex-col items-center gap-2.5"
          style={{ opacity: 0 }}
        >
          {/* Activity */}
          <div className="w-7 h-7 rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-copy-faint">
              <path d="M7 1v6l4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          {/* Chat — highlighted */}
          <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center relative">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
              <path d="M2 3h10v6a1 1 0 0 1-1 1H5l-3 2.5V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent" />
          </div>
          {/* Teams */}
          <div className="w-7 h-7 rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-copy-faint">
              <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="9.5" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1" />
              <path d="M1 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div
            data-teams-header=""
            className="flex items-center gap-2 px-4 py-3 border-b border-border"
            style={{ opacity: 0 }}
          >
            <div className="w-5 h-5 rounded bg-accent-soft/30 flex items-center justify-center">
              <span className="text-[8px] font-body-medium text-accent">A</span>
            </div>
            <span className="text-caption font-body-medium text-dark">Ambr AI</span>
            <span className="text-[9px] text-copy-faint">Bot</span>
          </div>

          {/* Message area */}
          <div className="flex-1 px-4 py-4">
            <div className="flex items-start gap-2.5">
              {/* Avatar */}
              <div
                data-msg-avatar=""
                className="w-8 h-8 rounded overflow-hidden shrink-0"
                style={{ opacity: 0 }}
              >
                <Image
                  src="/ambr/a-mark-accent.png"
                  alt="Ambr AI"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                {/* Name + time */}
                <div
                  data-msg-content=""
                  className="mb-2"
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-caption font-body-medium text-dark">Ambr AI</span>
                    <span className="text-[9px] text-copy-faint">10:24 AM</span>
                  </div>
                  <p className="text-caption text-copy-mid leading-relaxed">
                    Hi Sarah — time for your next practice session!
                  </p>
                </div>

                {/* Nudge card */}
                <div
                  data-nudge-card=""
                  className="p-3 rounded-brand-sm bg-surface border border-border space-y-2.5"
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-caption font-body-medium text-dark">Performance Feedback</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-surface-alt overflow-hidden">
                      <div
                        data-nudge-progress=""
                        className="h-full rounded-full bg-accent-soft origin-left"
                        style={{ width: '71%', transform: 'scaleX(0)' }}
                      />
                    </div>
                    <span className="text-caption text-copy-light shrink-0">5/7</span>
                  </div>

                  <p className="text-caption text-copy-light">
                    Next: <span className="text-copy-mid">Delivering feedback to a defensive team member</span>
                  </p>

                  <div
                    data-nudge-cta=""
                    className="flex items-center gap-2 pt-0.5"
                    style={{ opacity: 0 }}
                  >
                    <span className="inline-block rounded-brand-sm bg-accent text-surface-white px-3.5 py-1.5 text-caption font-body-medium">
                      Open in Ambr AI
                    </span>
                    <span className="inline-block rounded-brand-sm border border-border px-3.5 py-1.5 text-caption text-copy-mid">
                      Snooze
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
