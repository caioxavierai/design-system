import { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  loading?: boolean
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-snt-accent hover:bg-snt-coral text-white hover:shadow-snt-glow hover:-translate-y-px',
  secondary:
    'bg-snt-600 text-snt-tx1 border border-white/[0.09] hover:border-white/[0.16] hover:bg-snt-500 hover:-translate-y-px',
  ghost:
    'bg-transparent text-snt-tx2 border border-white/[0.09] hover:text-snt-tx1 hover:border-snt-accent/40 hover:bg-snt-accent/[0.04]',
  destructive:
    'bg-red-900/20 text-red-400 border border-red-900/30 hover:bg-red-900/30 hover:-translate-y-px',
}

export function Button({
  variant = 'primary',
  loading,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'relative inline-flex items-center gap-2 overflow-hidden',
        'font-mono text-[10px] uppercase tracking-[0.15em]',
        'px-6 py-3 rounded-[4px] transition-all duration-200',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:!transform-none',
        // shimmer sweep on hover
        'after:content-[""] after:absolute after:top-0 after:-left-full',
        'after:w-[60%] after:h-full after:transition-[left] after:duration-500',
        'after:bg-gradient-to-r after:from-transparent after:via-white/[0.08] after:to-transparent',
        'hover:after:left-[130%]',
        'focus-visible:outline-none focus-visible:shadow-snt-ring',
        variants[variant],
        className,
      ].join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          className="w-3 h-3 border border-white/30 border-t-current rounded-full animate-spin flex-shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
}
