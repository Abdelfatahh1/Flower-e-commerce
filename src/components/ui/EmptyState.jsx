import { Link } from 'react-router-dom'
import { Button } from './Button'

export function EmptyState({ icon: Icon, title, description, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center animate-fade-in">
      {Icon && (
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cream-dark">
          <Icon className="h-10 w-10 text-blush-deep" strokeWidth={1.25} />
        </div>
      )}
      <h2 className="font-display text-3xl text-charcoal">{title}</h2>
      <p className="mt-3 max-w-md text-charcoal-soft">{description}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="mt-8">
          <Button variant="primary">{actionLabel}</Button>
        </Link>
      )}
    </div>
  )
}
