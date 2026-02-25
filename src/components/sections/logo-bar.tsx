import Link from 'next/link'

const clients = [
  { name: 'Deloitte', serif: true },
  { name: 'Skyscanner', serif: false },
  { name: 'IWG', serif: false },
  { name: 'Browne Jacobson', serif: true },
  { name: 'DXC Technology', serif: false },
  { name: 'Citizen', serif: true },
]

export function LogoBar() {
  return (
    <div className="border-t border-border px-container-mobile md:px-container py-10">
      <div className="mx-auto max-w-site flex items-center gap-8 md:gap-14 flex-wrap">
        {clients.map((client) => (
          <span
            key={client.name}
            className={`text-sm text-dark/25 transition-opacity hover:opacity-55 select-none ${
              client.serif ? 'font-heading text-base tracking-heading' : 'font-body-medium tracking-wide uppercase text-xs'
            }`}
          >
            {client.name}
          </span>
        ))}
        <Link
          href="/customers"
          className="ml-auto text-xs text-copy-light border border-copy-faint rounded-brand-sm px-3.5 py-1.5 transition-all hover:text-dark hover:border-dark"
        >
          Our Customers
        </Link>
      </div>
    </div>
  )
}
