import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="مسار التنقل" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-soft">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <ChevronLeft className="h-4 w-4 text-blush-deep" />}
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-rose">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
