'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept B: "Group Buckets"

   Three group cards appear first as empty containers, then
   user avatar pills sort themselves into the appropriate
   groups — visually showing the admin's organisation
   structure being populated. Users with multiple groups
   appear in multiple buckets.
   --------------------------------------------------------- */

const groups = [
  {
    name: 'Sales Team',
    members: [
      { initials: 'SK', name: 'Sarah K.' },
      { initials: 'JH', name: 'James H.' },
      { initials: 'RA', name: 'Riya A.' },
      { initials: 'MP', name: 'Marcus P.' },
    ],
  },
  {
    name: 'London Office',
    members: [
      { initials: 'SK', name: 'Sarah K.' },
      { initials: 'RA', name: 'Riya A.' },
      { initials: 'DW', name: 'Dana W.' },
    ],
  },
  {
    name: 'New Managers',
    members: [
      { initials: 'RA', name: 'Riya A.' },
      { initials: 'TL', name: 'Tom L.' },
    ],
  },
]

export function UserGroupsAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const header = el.querySelector('[data-header]')
      const groupCards = el.querySelectorAll('[data-group-card]')
      const groupNames = el.querySelectorAll('[data-group-name]')
      const groupCounts = el.querySelectorAll('[data-group-count]')
      const memberPills = el.querySelectorAll('[data-member-pill]')
      const divider = el.querySelector('[data-divider]')
      const totalLine = el.querySelector('[data-total]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -6 })
      tl.set(groupCards, { opacity: 0, y: 12, scale: 0.95 })
      tl.set(groupNames, { opacity: 0 })
      tl.set(groupCounts, { opacity: 0 })
      tl.set(memberPills, { opacity: 0, scale: 0.6, y: 6 })
      tl.set(divider, { scaleX: 0 })
      tl.set(totalLine, { opacity: 0, y: 6 })

      /* Phase 1: Card appears */
      tl.to(card, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 3: Group cards rise up as empty containers */
      tl.to(groupCards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.15,
        ease: 'power2.out',
      })

      /* Phase 4: Group names appear */
      tl.to(groupNames, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.2')

      /* Phase 5: Members populate into groups — staggered across all groups */
      tl.to(memberPills, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.06,
        ease: 'back.out(2)',
      }, '+=0.1')

      /* Phase 6: Counts appear */
      tl.to(groupCounts, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.08,
      })

      /* Phase 7: Divider draws, total line appears */
      tl.to(divider, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })
      tl.to(totalLine, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')

      /* Phase 8: Hold */
      tl.to({}, { duration: 2.8 })

      /* Phase 9: Fade out */
      tl.to(card, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      <div
        data-card=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine px-5 py-5"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Header */}
        <div className="mb-4">
          <span
            data-header=""
            className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
            style={{ opacity: 0 }}
          >
            Groups
          </span>
        </div>

        {/* Group buckets */}
        <div className="space-y-3">
          {groups.map((group) => (
            <div
              key={group.name}
              data-group-card=""
              className="p-3 rounded-brand-sm border border-border bg-surface-white"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-2">
                <p
                  data-group-name=""
                  className="text-caption font-body-medium text-dark"
                  style={{ opacity: 0 }}
                >
                  {group.name}
                </p>
                <span
                  data-group-count=""
                  className="text-detail text-copy-faint"
                  style={{ opacity: 0 }}
                >
                  {group.members.length} members
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.members.map((member) => (
                  <span
                    key={`${group.name}-${member.initials}`}
                    data-member-pill=""
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface border border-border text-detail font-body-medium text-copy-mid"
                    style={{ opacity: 0 }}
                  >
                    <span className="w-4 h-4 rounded-full bg-accent-soft/60 flex items-center justify-center text-[8px] font-body-medium text-dark shrink-0">
                      {member.initials}
                    </span>
                    {member.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider + total */}
        <div
          data-divider=""
          className="h-px bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mt-4 mb-2.5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
        <p
          data-total=""
          className="text-caption text-copy-light"
          style={{ opacity: 0 }}
        >
          142 users across 3 groups
        </p>
      </div>
    </MockFrame>
  )
}
