'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept C: "Org Chart Assembly"

   A top-down organisational view: a single group header
   appears at the top, then user cards cascade downward in
   a branching layout — like an org chart being drawn.
   Lines connect the group to its members. Then a second
   group slides in alongside, sharing some members.
   --------------------------------------------------------- */

const primaryGroup = {
  name: 'Sales Team',
  count: 24,
  members: [
    { initials: 'SK', name: 'Sarah Kim', role: 'Manager' },
    { initials: 'JH', name: 'James Hall', role: 'Account Exec' },
    { initials: 'MP', name: 'Marcus Price', role: 'SDR' },
  ],
}

const secondaryGroup = {
  name: 'London Office',
  count: 38,
  sharedMembers: ['SK', 'JH'],
}

export function UserGroupsAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const header = el.querySelector('[data-header]')
      const groupNode = el.querySelector('[data-group-node]')
      const connectors = el.querySelectorAll('[data-connector]')
      const memberCards = el.querySelectorAll('[data-member-card]')
      const memberAvatars = el.querySelectorAll('[data-member-avatar]')
      const memberNames = el.querySelectorAll('[data-member-name]')
      const memberRoles = el.querySelectorAll('[data-member-role]')
      const secondGroup = el.querySelector('[data-second-group]')
      const sharedBadges = el.querySelectorAll('[data-shared]')
      const footer = el.querySelector('[data-footer]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -6 })
      tl.set(groupNode, { opacity: 0, scale: 0.8 })
      tl.set(connectors, { scaleY: 0 })
      tl.set(memberCards, { opacity: 0, y: 10 })
      tl.set(memberAvatars, { opacity: 0, scale: 0.5 })
      tl.set(memberNames, { opacity: 0, x: -6 })
      tl.set(memberRoles, { opacity: 0 })
      tl.set(secondGroup, { opacity: 0, x: 16 })
      tl.set(sharedBadges, { opacity: 0, scale: 0.7 })
      tl.set(footer, { opacity: 0, y: 6 })

      /* Phase 1: Card fades in */
      tl.to(card, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: Primary group node appears */
      tl.to(groupNode, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2)' })

      /* Phase 4: Connector lines draw down */
      tl.to(connectors, {
        scaleY: 1,
        duration: 0.35,
        stagger: 0.1,
        ease: 'power2.out',
      })

      /* Phase 5: Member cards cascade in */
      memberCards.forEach((_, i) => {
        const offset = i === 0 ? '+=0.05' : '-=0.15'
        tl.to(memberCards[i], { opacity: 1, y: 0, duration: 0.35 }, offset)
        tl.to(memberAvatars[i], { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '-=0.25')
        tl.to(memberNames[i], { opacity: 1, x: 0, duration: 0.25 }, '-=0.15')
        tl.to(memberRoles[i], { opacity: 1, duration: 0.2 }, '-=0.1')
      })

      /* Phase 6: Second group slides in */
      tl.to(secondGroup, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, '+=0.2')

      /* Phase 7: Shared membership badges */
      tl.to(sharedBadges, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.12,
        ease: 'back.out(2)',
      })

      /* Phase 8: Footer */
      tl.to(footer, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 9: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 10: Fade out */
      tl.to(card, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      <div
        data-card=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine px-5 py-5"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Header */}
        <span
          data-header=""
          className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light block mb-4"
          style={{ opacity: 0 }}
        >
          Organization
        </span>

        {/* Primary group node */}
        <div className="flex justify-center mb-1">
          <div
            data-group-node=""
            className="inline-flex items-center gap-2 px-4 py-2 rounded-brand-sm bg-accent/10 border border-accent-soft"
            style={{ opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-caption font-body-medium text-dark">{primaryGroup.name}</span>
            <span className="text-detail text-copy-faint">{primaryGroup.count}</span>
          </div>
        </div>

        {/* Connector lines */}
        <div className="flex justify-center gap-16 mb-1">
          {primaryGroup.members.map((_, i) => (
            <div
              key={i}
              data-connector=""
              className="w-px h-5 bg-accent-soft origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          ))}
        </div>

        {/* Member cards */}
        <div className="flex justify-center gap-3 mb-4">
          {primaryGroup.members.map((member) => (
            <div
              key={member.initials}
              data-member-card=""
              className="flex flex-col items-center gap-1.5 p-2.5 rounded-brand-sm bg-surface-white border border-border min-w-[85px]"
              style={{ opacity: 0 }}
            >
              <div
                data-member-avatar=""
                className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center"
                style={{ opacity: 0 }}
              >
                <span className="text-detail font-body-medium text-copy-mid">{member.initials}</span>
              </div>
              <p
                data-member-name=""
                className="text-detail font-body-medium text-dark text-center leading-tight"
                style={{ opacity: 0 }}
              >
                {member.name}
              </p>
              <p
                data-member-role=""
                className="text-[9px] text-copy-faint text-center"
                style={{ opacity: 0 }}
              >
                {member.role}
              </p>
              {/* Shared badge — only for members in both groups */}
              {secondaryGroup.sharedMembers.includes(member.initials) && (
                <span
                  data-shared=""
                  className="text-[8px] px-1.5 py-0.5 rounded-full bg-accent-tint border border-accent-soft/40 text-copy-mid"
                  style={{ opacity: 0 }}
                >
                  +{secondaryGroup.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Secondary group */}
        <div
          data-second-group=""
          className="flex items-center gap-2 p-3 rounded-brand-sm border border-border bg-surface-white"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent-soft shrink-0" />
          <div className="flex-1">
            <p className="text-caption font-body-medium text-dark">{secondaryGroup.name}</p>
            <p className="text-detail text-copy-faint">{secondaryGroup.count} members &middot; 2 shared with Sales Team</p>
          </div>
          <div className="flex -space-x-1.5">
            {secondaryGroup.sharedMembers.map((initials) => (
              <span
                key={initials}
                className="w-5 h-5 rounded-full bg-accent-tint border border-accent-whisper flex items-center justify-center text-[7px] font-body-medium text-copy-mid"
              >
                {initials}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p
          data-footer=""
          className="text-caption text-copy-light mt-3"
          style={{ opacity: 0 }}
        >
          Users can belong to multiple groups
        </p>
      </div>
    </MockFrame>
  )
}
