import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Statement() {
  return (
    <section className="py-section-lg md:py-section-xl px-container-mobile md:px-container">
      <div className="mx-auto max-w-site grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-center">
        <Reveal>
          <h2 className="font-heading text-title leading-[1.2] tracking-heading max-w-[640px]">
            Every simulation is built around <em className="text-accent">your</em> world. Your products. Your objections. Your playbook.
          </h2>
        </Reveal>
        <Reveal slow>
          <Image
            src="/images/photography/statement-team-conversation.png"
            alt="Two colleagues in genuine conversation at a cafe table, one gesturing while explaining, the other listening over coffee"
            width={800}
            height={533}
            className="w-full h-auto rounded-brand-lg"
          />
        </Reveal>
      </div>
    </section>
  )
}
