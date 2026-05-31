import { cn, badgeLabels } from '../../lib/utils'

const styles = {
  sale: 'bg-rose text-cream',
  new: 'bg-sage text-cream',
  bestseller: 'bg-gold/90 text-charcoal',
  default: 'bg-charcoal text-cream',
}

export function Badge({ children, variant = 'default', className }) {
  const label = badgeLabels[variant] || children
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-medium',
        styles[variant] || styles.default,
        className
      )}
    >
      {label}
    </span>
  )
}
