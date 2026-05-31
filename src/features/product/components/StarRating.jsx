import { Star } from 'lucide-react'
import { cn } from '../../../lib/utils'

export function StarRating({ value, onChange, hoverValue, onHover, onHoverLeave }) {
  return (
    <div
      className="flex gap-1"
      role="radiogroup"
      aria-label="تقييم المنتج"
      onMouseLeave={onHoverLeave}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1
        const filled = starValue <= (hoverValue ?? value)
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={value === starValue}
            aria-label={`${starValue} من 5`}
            onClick={() => onChange(starValue)}
            onMouseEnter={() => onHover?.(starValue)}
            className="rounded-full p-0.5 transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/40"
          >
            <Star
              className={cn(
                'h-7 w-7 transition-colors duration-200',
                filled ? 'fill-gold text-gold' : 'text-blush-deep/60 hover:text-gold/70'
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
