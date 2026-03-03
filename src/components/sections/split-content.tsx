import { Section } from './section'
import { Reveal } from '@/components/reveal'

function TextureBlock() {
  return (
    <div className="w-full aspect-[4/3] rounded-brand bg-accent-whisper border border-border relative overflow-hidden">
      <div className="absolute w-1/2 h-px bg-accent-soft/30 -rotate-12 top-1/2 left-1/4" />
      <div className="absolute w-1/3 h-px bg-accent-soft/30 rotate-45 top-1/3 left-1/6" />
      <div className="absolute w-2/5 h-px bg-accent-soft/20 rotate-12 bottom-1/3 right-1/6" />
    </div>
  )
}

interface SplitContentProps {
  eyebrow?: string
  heading: React.ReactNode
  children?: React.ReactNode
  body?: string
  reversed?: boolean
  visualContent?: React.ReactNode
}

export function SplitContent({
  eyebrow,
  heading,
  children,
  body,
  reversed = false,
  visualContent,
}: SplitContentProps) {
  const textBlock = (
    <div>
      {eyebrow && (
        <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
        {heading}
      </h2>
      <div className="text-body text-copy-mid leading-[1.75] space-y-4">
        {children ?? (body && <p>{body}</p>)}
      </div>
    </div>
  )

  const visualBlock = <div>{visualContent ?? <TextureBlock />}</div>

  return (
    <Section>
      <Reveal>
        <div
          className={`grid gap-12 md:gap-20 items-start ${
            reversed
              ? 'md:grid-cols-[1.2fr_1fr]'
              : 'md:grid-cols-[1fr_1.2fr]'
          }`}
        >
          {reversed ? (
            <>
              {visualBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {visualBlock}
            </>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
