import { cn } from '../../lib/utils'

const variants = {
  primary: 'bg-charcoal text-cream hover:bg-rose-dark shadow-md hover:shadow-lg',
  secondary:
    'bg-cream-dark text-charcoal border border-blush hover:border-rose hover:text-rose-dark',
  outline:
    'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream',
  ghost: 'text-charcoal hover:bg-cream-dark',
  rose: 'bg-rose text-cream hover:bg-rose-dark shadow-md hover:shadow-lg',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300',
        'hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
