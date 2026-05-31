import { Link } from 'react-router-dom'
import { Package, Heart, Bell } from 'lucide-react'
import { mockUser } from '../../features/account/mockData/user'
import { mockOrders } from '../../features/account/mockData/orders'
import { AccountPageShell } from '../../features/account/components/AccountPageShell'
import { formatPrice } from '../../lib/utils'

export function DashboardPage() {
  const recentOrder = mockOrders[0]

  return (
    <AccountPageShell>
      <div className="space-y-8">
        <div className="rounded-3xl border border-blush/40 bg-gradient-to-br from-cream-dark to-white p-8">
          <p className="text-sm text-charcoal-soft">مرحباً،</p>
          <h2 className="font-display text-3xl">
            {mockUser.firstName} {mockUser.lastName}
          </h2>
          <p className="mt-2 text-charcoal-soft">{mockUser.email}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Package, label: 'الطلبات', value: mockOrders.length, to: '/account/orders' },
            { icon: Heart, label: 'المفضلة', value: '٣', to: '/wishlist' },
            { icon: Bell, label: 'الإشعارات', value: '٢ جديد', to: '/account/notifications' },
          ].map(({ icon: Icon, label, value, to }) => (
            <Link
              key={label}
              to={to}
              className="rounded-3xl border border-blush/40 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-rose" strokeWidth={1.5} />
              <p className="mt-4 font-display text-2xl">{value}</p>
              <p className="text-sm text-charcoal-soft">{label}</p>
            </Link>
          ))}
        </div>
        {recentOrder && (
          <div className="rounded-3xl border border-blush/40 bg-white p-6">
            <h3 className="font-display text-xl">آخر طلب</h3>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-medium">{recentOrder.id}</p>
                <p className="text-sm text-charcoal-soft">{recentOrder.date}</p>
              </div>
              <span className="rounded-full bg-sage/20 px-3 py-1 text-sm text-sage">
                {recentOrder.statusLabel}
              </span>
              <p className="font-display text-xl">{formatPrice(recentOrder.total)}</p>
            </div>
            <Link
              to="/account/orders"
              className="mt-4 inline-block text-sm font-medium text-rose hover:underline"
            >
              عرض كل الطلبات ←
            </Link>
          </div>
        )}
      </div>
    </AccountPageShell>
  )
}
