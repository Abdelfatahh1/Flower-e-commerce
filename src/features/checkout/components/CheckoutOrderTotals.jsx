import { formatPrice } from '../../../lib/utils'
import { cartItems } from '../../cart/mockData/cartItems'

const subtotal = cartItems.reduce(
  (sum, { product, quantity }) => sum + product.price * quantity,
  0
)
const shipping = subtotal >= 1500 ? 0 : 120

export function getCheckoutTotals() {
  return { subtotal, shipping, total: subtotal + shipping }
}

export function CheckoutOrderTotals() {
  const { subtotal, shipping, total } = getCheckoutTotals()

  return (
    <div className="rounded-3xl border border-blush/40 bg-white p-6 shadow-sm">
      <h3 className="font-display text-xl">إجمالي الطلب</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-charcoal-soft">المجموع</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-charcoal-soft">الشحن</dt>
          <dd>{shipping === 0 ? 'مجاني' : formatPrice(shipping)}</dd>
        </div>
        <div className="flex justify-between border-t border-blush/30 pt-2 text-lg font-medium">
          <dt>الإجمالي</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
    </div>
  )
}
