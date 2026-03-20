'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import Image from 'next/image'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Training Nudge A: "Slack Notification"

   A notification bell badge appears and pulses, then
   morphs into a Slack-style workspace sidebar + message
   channel, revealing the Ambr AI training nudge as a
   Slack bot message. Captures the feeling of receiving
   a helpful nudge where you already work.
   ───────────────────────────────────────────────────── */

export function TrainingNudgeAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const notifBadge = el.querySelector('[data-notif-badge]')
      const notifDot = el.querySelector('[data-notif-dot]')
      const notifRing = el.querySelector('[data-notif-ring]')
      const slackShell = el.querySelector('[data-slack-shell]')
      const sidebar = el.querySelector('[data-sidebar]')
      const channelHeader = el.querySelector('[data-channel-header]')
      const message = el.querySelector('[data-message]')
      const botAvatar = el.querySelector('[data-bot-avatar]')
      const msgName = el.querySelector('[data-msg-name]')
      const msgBody = el.querySelector('[data-msg-body]')
      const progressBar = el.querySelector('[data-progress-bar]')
      const progressFill = el.querySelector('[data-progress-fill]')
      const ctaButtons = el.querySelector('[data-cta-buttons]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(notifBadge, { opacity: 0, scale: 0.5 })
      tl.set(notifDot, { opacity: 0, scale: 0 })
      tl.set(notifRing, { opacity: 0, scale: 0.8 })
      tl.set(slackShell, { opacity: 0, scale: 0.95 })
      tl.set(sidebar, { opacity: 0, x: -20 })
      tl.set(channelHeader, { opacity: 0, y: -8 })
      tl.set(message, { opacity: 0, y: 12 })
      tl.set(botAvatar, { opacity: 0, scale: 0.7 })
      tl.set(msgName, { opacity: 0 })
      tl.set(msgBody, { opacity: 0, y: 6 })
      tl.set(progressBar, { opacity: 0 })
      tl.set(progressFill, { scaleX: 0 })
      tl.set(ctaButtons, { opacity: 0, y: 8 })

      /* Phase 1: Notification bell/badge appears center-screen */
      tl.to(notifBadge, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      tl.to(notifDot, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(3)' }, '-=0.1')

      /* Phase 2: Notification ring pulses */
      tl.to(notifRing, { opacity: 0.6, scale: 1, duration: 0.3 }, '-=0.1')
      tl.to(notifRing, { opacity: 0, scale: 1.4, duration: 0.5, ease: 'power1.out' })

      /* Hold notification */
      tl.to({}, { duration: 0.6 })

      /* Phase 3: Badge shrinks away, Slack shell expands in */
      tl.to(notifBadge, { opacity: 0, scale: 0.3, duration: 0.3, ease: 'power2.in' })
      tl.to(slackShell, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.15')

      /* Phase 4: Sidebar slides in */
      tl.to(sidebar, { opacity: 1, x: 0, duration: 0.4 }, '-=0.2')

      /* Phase 5: Channel header appears */
      tl.to(channelHeader, { opacity: 1, y: 0, duration: 0.3 })

      /* Phase 6: Message assembles */
      tl.to(message, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(botAvatar, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '-=0.15')
      tl.to(msgName, { opacity: 1, duration: 0.2 }, '-=0.1')
      tl.to(msgBody, { opacity: 1, y: 0, duration: 0.4 }, '-=0.05')

      /* Phase 7: Progress bar fills */
      tl.to(progressBar, { opacity: 1, duration: 0.2 })
      tl.to(progressFill, { scaleX: 1, duration: 0.6, ease: 'power2.out' })

      /* Phase 8: CTA buttons appear */
      tl.to(ctaButtons, { opacity: 1, y: 0, duration: 0.35 })

      /* Hold — read the message */
      tl.to({}, { duration: 2.8 })

      /* Phase 9: Everything fades */
      tl.to(
        [slackShell, sidebar, channelHeader, message, botAvatar, msgName, msgBody, progressBar, ctaButtons],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="fill">
      {/* ── Notification badge (centered, appears first) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          data-notif-badge=""
          className="relative w-14 h-14 rounded-brand bg-surface-white border border-border flex items-center justify-center shadow-card"
          style={{ opacity: 0 }}
        >
          {/* Bell icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-copy-mid">
            <path
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Red dot */}
          <div
            data-notif-dot=""
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-surface-white"
            style={{ opacity: 0 }}
          />
          {/* Pulse ring */}
          <div
            data-notif-ring=""
            className="absolute inset-0 rounded-brand border-2 border-accent pointer-events-none"
            style={{ opacity: 0 }}
          />
        </div>
      </div>

      {/* ── Slack shell (expands after notification) ── */}
      <div
        data-slack-shell=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden flex"
        style={{ opacity: 0 }}
      >
        {/* Sidebar */}
        <div
          data-sidebar=""
          className="w-[72px] bg-dark shrink-0 py-4 px-2 flex flex-col items-center gap-3"
          style={{ opacity: 0 }}
        >
          {/* Workspace icon */}
          <div className="w-8 h-8 rounded-brand-sm bg-accent flex items-center justify-center mb-2">
            <span className="text-[10px] font-body-medium text-surface-white">AC</span>
          </div>
          {/* Channel icons */}
          <div className="w-7 h-7 rounded-brand-sm bg-surface-white/10 flex items-center justify-center">
            <span className="text-[9px] text-surface-white/50">#</span>
          </div>
          <div className="w-7 h-7 rounded-brand-sm bg-surface-white/10 flex items-center justify-center">
            <span className="text-[9px] text-surface-white/50">#</span>
          </div>
          <div className="w-7 h-7 rounded-brand-sm bg-accent/20 border border-accent/30 flex items-center justify-center relative">
            <span className="text-[9px] text-accent">A</span>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent" />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Channel header */}
          <div
            data-channel-header=""
            className="flex items-center gap-2 px-4 py-3 border-b border-border"
            style={{ opacity: 0 }}
          >
            <div className="w-5 h-5 rounded-brand-sm bg-accent-soft/30 flex items-center justify-center">
              <span className="text-[8px] font-body-medium text-accent">A</span>
            </div>
            <span className="text-caption font-body-medium text-dark">learning-and-development</span>
            <span className="text-[9px] text-copy-faint ml-1">via Ambr AI</span>
          </div>

          {/* Message area */}
          <div className="flex-1 px-4 py-4">
            <div
              data-message=""
              className="flex items-start gap-2.5"
              style={{ opacity: 0 }}
            >
              {/* Bot avatar */}
              <div
                data-bot-avatar=""
                className="w-8 h-8 rounded-brand-sm overflow-hidden shrink-0"
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
                {/* Name + timestamp */}
                <div
                  data-msg-name=""
                  className="flex items-baseline gap-2 mb-1"
                  style={{ opacity: 0 }}
                >
                  <span className="text-caption font-body-medium text-dark">Ambr AI</span>
                  <span className="text-[9px] text-copy-faint">10:24 AM</span>
                </div>

                {/* Message body */}
                <div
                  data-msg-body=""
                  className="p-3 rounded-brand-sm bg-surface border border-border space-y-2.5"
                  style={{ opacity: 0 }}
                >
                  <p className="text-caption text-copy-mid leading-relaxed">
                    Hi Sarah — you&apos;re 2 scenarios away from completing the
                    <span className="font-body-medium text-dark"> Performance Feedback</span> journey.
                  </p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div
                      data-progress-bar=""
                      className="flex-1 h-1.5 rounded-full bg-surface-alt overflow-hidden"
                      style={{ opacity: 0 }}
                    >
                      <div
                        data-progress-fill=""
                        className="h-full rounded-full bg-accent-soft origin-left"
                        style={{ width: '71%', transform: 'scaleX(0)' }}
                      />
                    </div>
                    <span className="text-caption text-copy-light shrink-0">5/7</span>
                  </div>

                  <p className="text-caption text-copy-light">
                    Next up: <span className="text-copy-mid">Delivering feedback to a defensive team member</span>
                  </p>

                  {/* CTA buttons */}
                  <div
                    data-cta-buttons=""
                    className="flex items-center gap-2 pt-1"
                    style={{ opacity: 0 }}
                  >
                    <span className="inline-block rounded-brand-sm bg-accent text-surface-white px-3.5 py-1.5 text-caption font-body-medium">
                      Start scenario
                    </span>
                    <span className="inline-block rounded-brand-sm border border-border px-3.5 py-1.5 text-caption text-copy-mid">
                      Remind me later
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
