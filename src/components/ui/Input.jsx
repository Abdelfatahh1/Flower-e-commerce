import { cn } from '../../lib/utils'

export function Input({ label, error, className, id, ...props }) {
  const inputId = id || label?.replace(/\s/g, '-')
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-charcoal">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full rounded-2xl border border-blush/60 bg-white px-4 py-3 text-charcoal text-end',
          'placeholder:text-charcoal-soft/50 transition-all duration-300',
          'focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20',
          error && 'border-red-400',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export function Textarea({ label, className, id, rows = 4, ...props }) {
  const inputId = id || label?.replace(/\s/g, '-')
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-charcoal">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        className={cn(
          'w-full resize-none rounded-2xl border border-blush/60 bg-white px-4 py-3 text-charcoal text-end',
          'placeholder:text-charcoal-soft/50 transition-all duration-300',
          'focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20',
          className
        )}
        {...props}
      />
    </div>
  )
}

export function Select({ label, options, className, id, ...props }) {
  const inputId = id || label?.replace(/\s/g, '-')
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-charcoal">
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={cn(
          'w-full rounded-2xl border border-blush/60 bg-white px-4 py-3 text-charcoal',
          'transition-all duration-300 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20',
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
