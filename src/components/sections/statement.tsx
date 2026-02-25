import { Reveal } from '@/components/reveal'

export function Statement() {
  return (
    <section className="py-section-xl md:py-section-2xl px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <h2 className="font-heading text-title leading-[1.2] tracking-heading max-w-[800px]">
            Every simulation is built around <em className="text-accent">your</em> world. Your products. Your objections. Your playbook.
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
