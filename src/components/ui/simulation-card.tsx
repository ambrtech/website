'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SimulationCardProps {
  /** Layout variant. */
  layout?: 'horizontal' | 'stacked' | 'pill' | 'live-call' | 'scenario' | 'photo-warm' | 'photo-duotone' | 'photo-muted'
  /** Character name displayed in the card. */
  characterName: string
  /** Character role/relationship context. */
  characterRole: string
  /** 1-2 letter initials for the avatar circle. */
  characterInitials: string
  /** Benefit-oriented title — what you'll practice, not the scenario name. */
  title: string
  /** Brief scenario context (1-2 sentences). */
  description?: string
  /** Estimated duration, e.g. "~5 min". */
  duration?: string
  /** Difficulty level, e.g. "Standard" or "Advanced". */
  difficulty?: string
  /** Social proof count, e.g. "2,847 conversations this week". */
  socialProof?: string
  /** Click handler — triggers modal/iframe to demo. */
  onClick?: () => void
  /** Alternative: link to external demo URL. */
  href?: string
  /** Optional character headshot image path (replaces initials). */
  characterImage?: string
  /** Background photography image path (for photo-* layouts). */
  backgroundImage?: string
}

export function SimulationCard({
  layout = 'horizontal',
  characterName,
  characterRole,
  characterInitials,
  title,
  description,
  duration,
  difficulty,
  socialProof,
  onClick,
  href,
  characterImage,
  backgroundImage,
}: SimulationCardProps) {
  const metadata = [duration, difficulty].filter(Boolean).join(' · ')

  const photoLayouts = ['photo-warm', 'photo-duotone', 'photo-muted'] as const

  const layoutMap: Record<string, React.ReactNode> = {
    horizontal: (
      <HorizontalLayout
        characterName={characterName}
        characterRole={characterRole}
        characterInitials={characterInitials}
        title={title}
        description={description}
        metadata={metadata}
        socialProof={socialProof}
      />
    ),
    stacked: (
      <StackedLayout
        characterName={characterName}
        characterRole={characterRole}
        characterInitials={characterInitials}
        title={title}
        description={description}
        metadata={metadata}
        socialProof={socialProof}
      />
    ),
    pill: (
      <PillLayout
        characterName={characterName}
        characterInitials={characterInitials}
      />
    ),
    'live-call': (
      <LiveCallLayout
        characterName={characterName}
        characterInitials={characterInitials}
        title={title}
        socialProof={socialProof}
      />
    ),
    scenario: (
      <ScenarioLayout
        characterName={characterName}
        characterInitials={characterInitials}
        title={title}
        description={description}
        socialProof={socialProof}
      />
    ),
    'photo-warm': (
      <PhotoLayout
        variant="warm"
        characterName={characterName}
        characterInitials={characterInitials}
        characterImage={characterImage}
        title={title}
        socialProof={socialProof}
        backgroundImage={backgroundImage}
      />
    ),
    'photo-duotone': (
      <PhotoLayout
        variant="duotone"
        characterName={characterName}
        characterInitials={characterInitials}
        characterImage={characterImage}
        title={title}
        socialProof={socialProof}
        backgroundImage={backgroundImage}
      />
    ),
    'photo-muted': (
      <PhotoLayout
        variant="muted"
        characterName={characterName}
        characterInitials={characterInitials}
        characterImage={characterImage}
        title={title}
        socialProof={socialProof}
        backgroundImage={backgroundImage}
      />
    ),
  }

  const content = layoutMap[layout]

  const baseStyles: Record<string, string> = {
    horizontal:
      'group block w-full text-left border border-border bg-surface-white rounded-brand-lg overflow-hidden transition-all duration-normal hover:border-accent-soft hover:shadow-card hover:-translate-y-px cursor-pointer',
    stacked:
      'group block w-full text-left border border-border bg-surface-white rounded-brand-lg overflow-hidden transition-all duration-normal hover:border-accent-soft hover:shadow-card hover:-translate-y-px cursor-pointer',
    pill: 'group inline-flex items-center text-left bg-surface-white border border-border rounded-full transition-all duration-normal hover:border-accent-soft hover:shadow-card cursor-pointer',
    'live-call':
      'group block w-full text-left bg-dark rounded-brand-lg overflow-hidden transition-all duration-normal hover:shadow-xl hover:-translate-y-px cursor-pointer',
    scenario:
      'group block w-full text-left border border-border bg-surface-white rounded-brand-lg overflow-hidden transition-all duration-normal hover:border-accent-soft hover:shadow-card hover:-translate-y-px cursor-pointer',
    'photo-warm':
      'group block w-full text-left rounded-brand-lg overflow-hidden transition-all duration-normal hover:shadow-xl hover:-translate-y-px cursor-pointer relative',
    'photo-duotone':
      'group block w-full text-left rounded-brand-lg overflow-hidden transition-all duration-normal hover:shadow-xl hover:-translate-y-px cursor-pointer relative',
    'photo-muted':
      'group block w-full text-left rounded-brand-lg overflow-hidden transition-all duration-normal hover:shadow-xl hover:-translate-y-px cursor-pointer relative',
  }

  const className = baseStyles[layout]

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  )
}

/* ── Avatar ── */

function Avatar({
  initials,
  size = 'md',
  online,
}: {
  initials: string
  size?: 'sm' | 'md' | 'lg'
  online?: boolean
}) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const textSizes = {
    sm: 'text-caption',
    md: 'text-body-sm',
    lg: 'text-label',
  }

  return (
    <div className="relative shrink-0">
      <div
        className={`${sizeClasses[size]} rounded-full bg-accent-whisper border-2 border-accent-soft flex items-center justify-center`}
      >
        <span className={`font-heading ${textSizes[size]} text-accent tracking-heading`}>
          {initials}
        </span>
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface-white animate-[pulse-breath_3.5s_ease-in-out_infinite]" />
      )}
    </div>
  )
}

/* ── Avatar (dark variant for live-call) ── */

function AvatarDark({ initials }: { initials: string }) {
  return (
    <div className="w-20 h-20 rounded-full bg-surface/10 border-2 border-surface/20 flex items-center justify-center shrink-0">
      <span className="font-heading text-title text-surface/80 tracking-heading">
        {initials}
      </span>
    </div>
  )
}

/* ── Friction reducer ── */

function FrictionText() {
  return (
    <p className="text-caption text-copy-faint">
      No account required · Just 5 minutes
    </p>
  )
}

/* ── Social proof badge ── */

function SocialProofBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-caption text-copy-light">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
      {text}
    </span>
  )
}

/* ── Mic icon ── */

function MicIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

/* ── Phone icon ── */

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/* ── Horizontal layout ── */

interface LayoutProps {
  characterName: string
  characterRole: string
  characterInitials: string
  title: string
  description?: string
  metadata: string
  socialProof?: string
}

function HorizontalLayout({
  characterName,
  characterRole,
  characterInitials,
  title,
  description,
  metadata,
  socialProof,
}: LayoutProps) {
  return (
    <div className="flex items-center gap-5 p-5 md:p-6">
      <Avatar initials={characterInitials} online />

      <div className="flex-1 min-w-0">
        <p className="font-heading text-label tracking-heading text-dark leading-snug">
          {title}
        </p>
        <p className="text-caption text-copy-mid mt-1">
          {characterName} · {characterRole}
        </p>
        {description && (
          <p className="text-body-sm text-copy-light leading-relaxed mt-2 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center gap-3 mt-2">
          {metadata && <p className="text-caption text-copy-faint">{metadata}</p>}
          {metadata && socialProof && <span className="text-copy-faint">·</span>}
          {socialProof && <SocialProofBadge text={socialProof} />}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="inline-flex items-center gap-2 text-label font-body-medium text-dark group-hover:text-accent transition-colors duration-normal">
          <span>Try it now</span>
          <span className="text-accent group-hover:translate-x-0.5 transition-transform duration-normal">
            &rarr;
          </span>
        </span>
        <span className="text-caption text-copy-faint hidden sm:block">No account required</span>
      </div>
    </div>
  )
}

/* ── Stacked layout ── */

function StackedLayout({
  characterName,
  characterRole,
  characterInitials,
  title,
  description,
  metadata,
  socialProof,
}: LayoutProps) {
  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-5">
        <Avatar initials={characterInitials} online />
        <div className="min-w-0">
          <p className="text-body-sm font-body-medium text-dark">{characterName}</p>
          <p className="text-caption text-copy-light">{characterRole}</p>
        </div>
      </div>

      <div className="h-px bg-border mb-5" />

      <p className="font-heading text-label tracking-heading text-dark leading-snug mb-3">
        {title}
      </p>

      {description && (
        <p className="text-body-sm text-copy-mid leading-relaxed mb-4">
          {description}
        </p>
      )}

      {socialProof && (
        <div className="mb-5">
          <SocialProofBadge text={socialProof} />
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-label font-body-medium text-dark group-hover:text-accent transition-colors duration-normal">
          <span>Try it now</span>
          <span className="text-accent group-hover:translate-x-0.5 transition-transform duration-normal">
            &rarr;
          </span>
        </span>
        <FrictionText />
      </div>
    </div>
  )
}

/* ── Pill layout ── */

function PillLayout({
  characterName,
  characterInitials,
}: {
  characterName: string
  characterInitials: string
}) {
  return (
    <div className="flex items-center gap-3 py-2 pl-2 pr-5">
      <Avatar initials={characterInitials} size="sm" online />
      <div className="min-w-0">
        <p className="text-caption font-body-medium text-dark leading-tight">
          Try a conversation
        </p>
        <p className="text-caption text-copy-light leading-tight">
          {characterName} is ready
        </p>
      </div>
      <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center ml-1 group-hover:bg-accent-hover transition-colors duration-normal shrink-0">
        <PhoneIcon />
      </div>
    </div>
  )
}

/* ── Live call layout ── */

function LiveCallLayout({
  characterName,
  characterInitials,
  title,
  socialProof,
}: {
  characterName: string
  characterInitials: string
  title: string
  socialProof?: string
}) {
  return (
    <div className="p-8 md:p-10 text-center">
      <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-surface/50 mb-6">
        Interactive Demo
      </p>

      <div className="flex justify-center mb-6">
        <AvatarDark initials={characterInitials} />
      </div>

      <p className="font-heading text-title tracking-heading text-surface mb-2">
        {characterName} is waiting
      </p>
      <p className="text-body-sm text-surface/60 mb-8 max-w-xs mx-auto">
        {title}
      </p>

      <div className="inline-flex items-center gap-3 bg-accent text-surface-white px-6 py-3.5 rounded-brand-sm font-body-medium text-body-sm group-hover:bg-accent-hover transition-colors duration-normal">
        <MicIcon className="w-5 h-5" />
        <span>Connect and start talking</span>
      </div>

      <div className="flex items-center justify-center gap-4 mt-5">
        <p className="text-caption text-surface/40">
          No account required · Just 5 minutes
        </p>
      </div>

      {socialProof && (
        <div className="flex justify-center mt-3">
          <span className="inline-flex items-center gap-1.5 text-caption text-surface/40">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            {socialProof}
          </span>
        </div>
      )}
    </div>
  )
}

/* ── Scenario layout ── */

function ScenarioLayout({
  characterName,
  characterInitials,
  title,
  description,
  socialProof,
}: {
  characterName: string
  characterInitials: string
  title: string
  description?: string
  socialProof?: string
}) {
  return (
    <div className="p-6 md:p-8">
      <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent mb-5 block">
        Interactive Demo
      </span>

      <div className="flex items-center gap-4 mb-5">
        <Avatar initials={characterInitials} size="lg" online />
        <p className="text-body-sm font-body-medium text-dark">{characterName}</p>
      </div>

      <p className="font-heading text-section leading-[1.2] tracking-heading text-dark mb-3">
        {title}
      </p>

      {description && (
        <p className="text-body-sm text-copy-mid leading-relaxed mb-5">
          {description}
        </p>
      )}

      <div className="flex items-center gap-3 bg-accent text-surface-white px-5 py-3 rounded-brand-sm font-body-medium text-body-sm group-hover:bg-accent-hover transition-colors duration-normal w-fit">
        <MicIcon />
        <span>Start live simulation</span>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <FrictionText />
        {socialProof && (
          <>
            <span className="text-copy-faint">·</span>
            <SocialProofBadge text={socialProof} />
          </>
        )}
      </div>
    </div>
  )
}

/* ── Character avatar with image ── */

function AvatarImage({
  src,
  name,
  size = 'md',
}: {
  src: string
  name: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  }

  return (
    <div className="relative shrink-0">
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-surface-white/30`}
      >
        <Image
          src={src}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface-white/30 animate-[pulse-breath_3.5s_ease-in-out_infinite]" />
    </div>
  )
}

/* ── Photo background layouts ── */

const photoVariantConfig = {
  warm: {
    overlay: 'bg-gradient-to-b from-dark/45 via-dark/40 to-dark/70',
    imageClass: 'saturate-[0.4] brightness-[0.6] sepia-[0.2] blur-[1.5px]',
    label: 'Warm overlay',
  },
  duotone: {
    overlay: 'bg-gradient-to-b from-accent/30 via-dark/50 to-dark/75',
    imageClass: 'saturate-0 brightness-[0.8]',
    label: 'Duotone',
  },
  muted: {
    overlay: 'bg-gradient-to-b from-surface/20 via-dark/40 to-dark/80',
    imageClass: 'saturate-[0.3] brightness-[0.7] contrast-[1.1]',
    label: 'Muted',
  },
} as const

function PhotoLayout({
  variant,
  characterName,
  characterInitials,
  characterImage,
  title,
  socialProof,
  backgroundImage,
}: {
  variant: 'warm' | 'duotone' | 'muted'
  characterName: string
  characterInitials: string
  characterImage?: string
  title: string
  socialProof?: string
  backgroundImage?: string
}) {
  const v = photoVariantConfig[variant]
  const bgSrc = backgroundImage ?? '/images/photography/hero-quiet-reflection.jpeg'

  return (
    <div className="relative min-h-[420px] flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={bgSrc}
          alt=""
          fill
          className={`object-cover ${v.imageClass}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className={`absolute inset-0 ${v.overlay}`} />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 text-center flex-1 flex flex-col items-center justify-center">
        <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-surface-white/50 mb-6">
          Interactive Demo
        </p>

        <div className="flex justify-center mb-6">
          {characterImage ? (
            <AvatarImage src={characterImage} name={characterName} size="lg" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-surface-white/10 border-2 border-surface-white/20 flex items-center justify-center shrink-0">
              <span className="font-heading text-body-sm text-surface-white/70 tracking-heading">
                {characterInitials}
              </span>
            </div>
          )}
        </div>

        <p className="font-heading text-title tracking-heading text-surface-white mb-2">
          {characterName} is waiting
        </p>
        <p className="text-body text-surface-white/60 mb-8 max-w-sm mx-auto leading-relaxed">
          {title}
        </p>

        <div className="inline-flex items-center gap-3 bg-accent text-surface-white px-6 py-3.5 rounded-brand-sm font-body-medium text-body-sm group-hover:bg-accent-hover transition-colors duration-normal">
          <MicIcon className="w-5 h-5" />
          <span>Connect and start talking</span>
        </div>

        <div className="flex items-center justify-center gap-4 mt-5">
          <p className="text-caption text-surface-white/40">
            No account required · Just 5 minutes
          </p>
        </div>

        {socialProof && (
          <div className="flex justify-center mt-3">
            <span className="inline-flex items-center gap-1.5 text-caption text-surface-white/40">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              {socialProof}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
