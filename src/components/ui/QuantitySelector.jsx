import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/utils'

export function QuantitySelector({ value = 1, size = 'md' }) {
  const isSmall = size === 'sm'

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-blush/60 bg-white',
        isSmall ? 'gap-1 p-1' : 'gap-2 p-1.5'
      )}
      aria-label={`الكمية: ${value}`}
    >
      <span
        className={cn(
          'rounded-full p-1.5 text-charcoal-soft',
          isSmall ? 'p-1.5' : 'p-2'
        )}
        aria-hidden
      >
        <Minus className={isSmall ? 'h-3 w-3' : 'h-4 w-4'} />
      </span>
      <span className={cn('min-w-[2ch] text-center font-medium', isSmall ? 'text-sm' : 'text-base')}>
        {value}
      </span>
      <span
        className={cn(
          'rounded-full p-1.5 text-charcoal-soft',
          isSmall ? 'p-1.5' : 'p-2'
        )}
        aria-hidden
      >
        <Plus className={isSmall ? 'h-3 w-3' : 'h-4 w-4'} />
      </span>
    </div>
  )
}
