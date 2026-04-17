import { ReactNode } from 'react'

type BadgeVariant = 'active' | 'warn' | 'error' | 'neutral' | 'accent'

const badgeStyles: Record<BadgeVariant, string> = {
  active:  'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  warn:    'text-amber-400 border-amber-400/30 bg-amber-400/10',
  error:   'text-red-400 border-red-400/30 bg-red-400/10',
  neutral: 'text-snt-tx3 border-white/[0.09] bg-snt-600',
  accent:  'text-snt-accent border-snt-accent/30 bg-snt-accent/10',
}

interface BadgeProps {
  variant?: BadgeVariant
  pulse?: boolean
  dot?: boolean
  children: ReactNode
}

export function Badge({ variant = 'neutral', pulse, dot = true, children }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em]',
        'px-2.5 py-1 rounded-full border leading-none',
        badgeStyles[variant],
      ].join(' ')}
    >
      {dot && (
        <span
          className={['w-1.5 h-1.5 rounded-full bg-current flex-shrink-0', pulse ? 'animate-snt-blink' : ''].join(' ')}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
