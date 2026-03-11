import { Reveal } from '@/components/reveal'

interface ContrastSplitProps {
  leftHeading: React.ReactNode
  leftBody?: string
  rightHeading: React.ReactNode
  rightBody: string
  leftBg?: string
  rightBg?: string
  className?: string
}

export function ContrastSplit({
  leftHeading,
  leftBody,
  rightHeading,
  rightBody,
  leftBg = 'bg-surface',
  rightBg = 'bg-surface-white',
  className,
}: ContrastSplitProps) {
  return (
    <section className={`py-section-mobile md:py-section px-container-mobile md:px-container ${className ?? ''}`}>
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-2 rounded-brand-lg overflow-hidden">
            <div className={`${leftBg} p-8 md:p-12 lg:p-16`}>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                {leftHeading}
              </h2>
              {leftBody && (
                <p className="text-body text-copy-mid leading-[1.75]">
                  {leftBody}
                </p>
              )}
            </div>
            <div className={`${rightBg} p-8 md:p-12 lg:p-16`}>
              <h3 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                {rightHeading}
              </h3>
              <p className="text-body text-copy-mid leading-[1.75]">
                {rightBody}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
