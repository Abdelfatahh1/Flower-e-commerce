import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../../lib/utils'

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  linkTo,
  linkLabel = 'عرض الكل',
  align = 'start',
  className,
}) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-4 sm:mb-12',
        align === 'center' && 'items-center text-center',
        align === 'between' && 'sm:flex-row sm:items-end sm:justify-between',
        className
      )}
    >
      <div className={cn(align === 'center' && 'max-w-2xl')}>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium text-rose">{eyebrow}</p>
        )}
        <h2 className="font-display text-4xl font-medium text-charcoal md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-charcoal-soft md:text-lg">{subtitle}</p>
        )}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors hover:text-rose"
        >
          {linkLabel}
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>
      )}
    </div>
  )
}
