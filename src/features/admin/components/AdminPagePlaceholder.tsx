import type { ReactNode } from "react"

type AdminPagePlaceholderProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function AdminPagePlaceholder({
  eyebrow,
  title,
  description,
  children,
}: AdminPagePlaceholderProps) {
  return (
    <section className="max-w-5xl">
      <p className="mb-2 text-[10px] tracking-[0.22em] uppercase text-black/40">{eyebrow}</p>
      <h1
        className="text-4xl md:text-5xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-black/55">{description}</p>
      {children}
    </section>
  )
}
