interface AuthorBioProps {
  name: string
  role?: string
}

export function AuthorBio({ name, role }: AuthorBioProps) {
  return (
    <div className="mt-14 pt-8 border-t border-border">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-tint flex items-center justify-center flex-shrink-0">
          <span className="font-heading text-label text-accent">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
        </div>
        <div>
          <p className="text-body-sm font-body-medium text-copy leading-tight">
            {name}
          </p>
          {role && (
            <p className="text-caption text-copy-light mt-0.5">{role}</p>
          )}
        </div>
      </div>
    </div>
  )
}
