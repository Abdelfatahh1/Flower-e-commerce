import { mockOrders } from '../../features/account/mockData/orders'
import { AccountPageShell } from '../../features/account/components/AccountPageShell'
import { formatPrice, cn } from '../../lib/utils'

const statusStyles = {
  delivered: 'bg-sage/20 text-sage',
  shipped: 'bg-gold/20 text-charcoal',
}

export function OrdersPage() {
  return (
    <AccountPageShell>
      <div>
        <h2 className="font-display text-3xl">سجل الطلبات</h2>
        <p className="mt-2 text-charcoal-soft">{mockOrders.length} طلبات</p>
        <ul className="mt-8 space-y-4">
          {mockOrders.map((order) => (
            <li
              key={order.id}
              className="rounded-3xl border border-blush/40 bg-white p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-charcoal-soft">{order.date}</p>
                </div>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-sm',
                    statusStyles[order.status] || 'bg-blush/50 text-rose-dark'
                  )}
                >
                  {order.statusLabel}
                </span>
                <p className="font-display text-2xl">{formatPrice(order.total)}</p>
              </div>
              <ul className="mt-4 space-y-2 border-t border-blush/30 pt-4">
                {order.items.map((item, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </AccountPageShell>
  )
}
