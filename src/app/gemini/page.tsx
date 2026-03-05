"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function GeminiShowcase() {
  return (
    <div 
      className="min-h-screen bg-surface font-body text-copy selection:bg-secondary-soft/30"
      style={{
        // Injecting the proposed design tokens via CSS variables
        ['--color-accent' as any]: '#B05921', // Deeper Amber
        ['--color-accent-soft' as any]: '#DDA88B',
        ['--color-secondary' as any]: '#4A5D4E', // Proposed Green
        ['--color-surface' as any]: '#F5F5F2', // Warm Oat
        ['--color-surface-taupe' as any]: '#8C837A', // Mid-tone for contrast
        ['--color-copy' as any]: '#1C1C1A',
      }}
    >
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-noise-fine mix-blend-multiply" />

      {/* Nav Placeholder */}
      <nav className="relative z-50 h-20 flex items-center justify-between px-container max-w-site mx-auto">
        <div className="text-logo font-heading tracking-tight">Ambr<span className="text-accent italic">AI</span></div>
        <div className="flex gap-8 items-center text-nav font-body-medium uppercase tracking-eyebrow text-copy/60">
          <Link href="#" className="hover:text-copy transition-colors">Product</Link>
          <Link href="#" className="hover:text-copy transition-colors">Company</Link>
          <Link href="#" className="px-5 py-2 rounded-brand-sm border border-copy/10 hover:border-accent transition-colors">Login</Link>
        </div>
      </nav>

      {/* Hero Section: Extreme Contrast & Lomography */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-site mx-auto px-container grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
          <div className="relative z-10 pb-12">
            <p className="text-[0.65rem] font-body-medium uppercase tracking-[0.25em] text-secondary mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-secondary/30" />
              Bespoke Enterprise Simulations
            </p>
            <h1 className="font-heading text-display leading-[0.88] tracking-tight mb-16">
              Conversations <br />
              that actually <br />
              <em className="text-accent italic font-normal serif-swash">matter.</em>
            </h1>
            <p className="text-[1.15rem] text-copy/70 max-w-[480px] leading-[1.8] mb-12 font-body font-light">
              AI voice practice that feels less like a platform and more like a partner. 
              Built for teams who care about the nuance of every human interaction.
            </p>
            <Link href="#" className="inline-flex items-center gap-6 group">
              <span className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-surface transition-transform group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </span>
              <span className="text-label font-body-medium uppercase tracking-eyebrow group-hover:text-accent transition-colors">Start a conversation</span>
            </Link>
          </div>

          <div className="relative group">
            {/* Lomography Framing: Bleed and Foreground abstraction */}
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-700">
               <Image 
                src="/images/photography/hero-quiet-reflection.jpeg" 
                alt="Human-centric photography"
                fill
                className="object-cover grayscale-[0.2] sepia-[0.1]"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply" />
            </div>
            {/* Secondary smaller photo overlapping for "Editorial" look */}
            <div className="absolute -left-20 -bottom-12 w-1/2 aspect-square rounded-[2px] overflow-hidden shadow-xl -rotate-2 group-hover:rotate-0 transition-transform duration-700 delay-100 border-[8px] border-surface">
              <Image 
                src="/images/photography/practice-phone-booth.png" 
                alt="Candid moment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The "Green" Section: Mid-tone Visual Rhythm */}
      <section className="bg-secondary text-surface py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-noise-coarse" />
        <div className="max-w-site mx-auto px-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-square">
               <Image 
                src="/images/photography/testimonial-woman-smiling.png" 
                alt="Warmth and confidence"
                fill
                className="object-cover rounded-[2px] filter-faded"
              />
            </div>
            <div>
              <h2 className="font-heading text-title leading-tight mb-8">
                The AI is the infrastructure. <br />
                The human is the <em className="text-accent-soft italic font-normal">hero.</em>
              </h2>
              <p className="text-body text-surface/80 leading-relaxed mb-12">
                We don&apos;t build technology to impress your CISO. We build it to empower 
                your L&D champions. Every simulation is customized to your culture, 
                your language, and your specific workplace challenges.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-surface/10">
                <div>
                  <div className="text-stat font-heading leading-none mb-2">94%</div>
                  <div className="text-eyebrow text-surface/60 uppercase tracking-widest">Confidence lift</div>
                </div>
                <div>
                  <div className="text-stat font-heading leading-none mb-2">3.5x</div>
                  <div className="text-eyebrow text-surface/60 uppercase tracking-widest">Engagement rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Don't Tell: Abstracted, Print-like UI */}
      <section className="py-32 bg-surface">
        <div className="max-w-site mx-auto px-container text-center mb-24">
          <p className="text-eyebrow font-body-medium uppercase tracking-[0.3em] text-copy/40 mb-6">Actionable Insights</p>
          <h2 className="font-heading text-headline tracking-tight">Feedback that looks like <br /> <em className="text-secondary italic">expert coaching.</em></h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Abstracted UI: No shadows, no chrome, just typography and space */}
          <div className="bg-surface-white border border-copy/5 p-12 md:p-20 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full blur-3xl" />
            
            <div className="flex justify-between items-start mb-16 border-b border-copy/5 pb-8">
              <div>
                <div className="text-[0.6rem] font-body-medium uppercase tracking-[0.2em] text-copy/40 mb-2">Session ID: #AMBR-9442</div>
                <div className="text-label font-body-medium text-secondary">Advanced Negotiation Simulation</div>
              </div>
              <div className="text-right">
                <div className="text-[0.6rem] font-body-medium uppercase tracking-[0.2em] text-copy/40 mb-2">Outcome</div>
                <div className="text-label font-body-medium text-accent">Strong Rapport Established</div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div className="font-heading text-body-sm text-copy/60 italic">Tone & Presence</div>
                <div className="text-body leading-relaxed">
                  Your opening was confident, but the transition into the pricing discussion 
                  felt <span className="underline decoration-accent/30 underline-offset-4">hurried</span>. 
                  Try slowing down your pacing by 15% during key concessions to signal authority.
                </div>
              </div>
              
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div className="font-heading text-body-sm text-copy/60 italic">Strategic Alignment</div>
                <div className="space-y-6">
                  <div className="text-body leading-relaxed">
                    You successfully identified the client&apos;s core anxiety regarding implementation 
                    risk. This is a significant improvement from previous sessions.
                  </div>
                  {/* Subtle, print-like bars */}
                  <div className="flex gap-2 h-1 items-end">
                    <div className="w-full h-full bg-secondary" />
                    <div className="w-full h-full bg-secondary" />
                    <div className="w-full h-full bg-secondary" />
                    <div className="w-full h-full bg-copy/5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Injected Photo for "Social Proof/Humanity" in the UI */}
            <div className="mt-20 pt-12 border-t border-copy/5 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full overflow-hidden grayscale relative">
                 <Image src="/images/photography/testimonial-woman-smiling.png" alt="Coach" fill className="object-cover" />
              </div>
              <div className="text-[0.8rem] text-copy/60 leading-tight">
                <span className="text-copy font-body-medium">Coach AI Notes:</span> &ldquo;The empathy gap we identified in Session 2 is closing. The candidate is now actively listening for emotional cues.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-surface text-center px-container">
        <div className="max-w-2xl mx-auto p-16 border border-copy/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-reveal" />
          <h2 className="relative z-10 font-heading text-title mb-8">Ready to evolve your <br /> team&apos;s <em className="text-accent italic">conversations?</em></h2>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#" className="w-full sm:w-auto px-10 py-4 bg-dark text-surface text-sm uppercase tracking-widest hover:bg-accent transition-colors">Book a consultation</Link>
            <Link href="#" className="w-full sm:w-auto px-10 py-4 border border-copy/10 text-sm uppercase tracking-widest hover:border-copy transition-colors">See all features</Link>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-copy/5 bg-surface text-copy/40">
        <div className="max-w-site mx-auto px-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-logo font-heading tracking-tight text-copy/20 grayscale">Ambr AI</div>
          <div className="flex gap-12 text-[0.65rem] font-body-medium uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-copy transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-copy transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-copy transition-colors">Security</Link>
          </div>
          <div className="text-[0.65rem]">© 2026 Ambr AI. All rights reserved.</div>
        </div>
      </footer>

      {/* Global CSS overrides for the swash italic feel */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500&display=swap');
        
        .serif-swash {
          font-family: 'Lora', serif;
          font-style: italic;
          position: relative;
        }

        /* Subtle underline for accented words */
        .serif-swash::after {
          content: '';
          position: absolute;
          bottom: 0.1em;
          left: -0.1em;
          right: -0.1em;
          height: 0.05em;
          background: var(--color-accent);
          opacity: 0.15;
          z-index: -1;
        }
      `}</style>
    </div>
  )
}
