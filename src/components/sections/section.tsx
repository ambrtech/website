interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-section-mobile md:py-section ${className}`}>
      <div className="mx-auto max-w-site px-container-mobile md:px-container">
        {children}
      </div>
    </section>
  )
}
