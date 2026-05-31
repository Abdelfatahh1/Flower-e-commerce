import { mockNotifications } from '../../features/account/mockData/orders'
import { AccountPageShell } from '../../features/account/components/AccountPageShell'
import { cn } from '../../lib/utils'

export function NotificationsPage() {
  return (
    <AccountPageShell>
      <div>
        <h2 className="font-display text-3xl">الإشعارات</h2>
        <ul className="mt-8 space-y-3">
          {mockNotifications.map((n) => (
            <li
              key={n.id}
              className={cn(
                'rounded-2xl border p-5',
                n.read
                  ? 'border-blush/30 bg-white'
                  : 'border-rose/30 bg-rose/5 shadow-sm'
              )}
            >
              <p className="font-medium">{n.title}</p>
              <p className="mt-1 text-sm text-charcoal-soft">{n.message}</p>
              <p className="mt-2 text-xs text-charcoal-soft/70">{n.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </AccountPageShell>
  )
}
