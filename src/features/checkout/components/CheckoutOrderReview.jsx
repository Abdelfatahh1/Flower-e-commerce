import { formatPrice } from '../../../lib/utils'
import { cartItems } from '../../cart/mockData/cartItems'

export function CheckoutOrderReview() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl">مراجعة الطلب</h2>
      <ul className="divide-y divide-blush/30">
        {cartItems.map(({ product, quantity }) => (
          <li key={product.id} className="flex gap-4 py-4">
            <img
              src={product.images[0]}
              alt=""
              className="h-16 w-14 rounded-xl object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-charcoal-soft">الكمية: {quantity}</p>
            </div>
            <p className="font-medium">{formatPrice(product.price * quantity)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
