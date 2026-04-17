import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  shimmer?: boolean
  glow?: boolean
  className?: string
}

export function Card({ children, shimmer, glow, className = '' }: CardProps) {
  return (
    <div
      className={[
        'rounded-[4px] p-7 transition-all duration-[350ms]',
        shimmer
          ? 'shimmer-border bg-snt-700 hover:shadow-snt-glow'
          : glow
          ? 'bg-snt-700 border border-white/[0.09] hover:border-snt-accent/25 hover:shadow-snt-glow'
          : 'bg-snt-700 border border-white/[0.09] hover:border-white/[0.16] hover:shadow-snt-md',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function CardTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-mono text-[9px] uppercase tracking-[0.15em] text-snt-accent bg-snt-accent/10 border border-snt-accent/20 px-2 py-0.5 rounded-[2px] mb-4">
      {children}
    </span>
  )
}

export function CardFooter({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between pt-4 mt-4 border-t border-white/[0.09] font-mono text-[9px] uppercase tracking-[0.12em] text-snt-tx3">
      {children}
    </div>
  )
}
