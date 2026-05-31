import { Link } from 'react-router-dom'
import { formatPrice } from '../../../lib/utils'
import { Button } from '../../../components/ui/Button'

export function OrderSummary({
  subtotal,
  shipping = 120,
  showCheckoutButton = true,
  checkoutLabel = 'إتمام الشراء',
}) {
  const total = subtotal + shipping

  return (
    <div className="rounded-3xl border border-blush/40 bg-white p-6 shadow-sm lg:p-8">
      <h3 className="font-display text-2xl">ملخص الطلب</h3>
      <dl className="mt-6 space-y-4">
        <div className="flex justify-between text-charcoal-soft">
          <dt>المجموع الفرعي</dt>
          <dd className="font-medium text-charcoal">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-charcoal-soft">
          <dt>الشحن</dt>
          <dd className="font-medium text-charcoal">
            {shipping === 0 ? 'مجاني' : formatPrice(shipping)}
          </dd>
        </div>
        <div className="border-t border-blush/30 pt-4">
          <div className="flex justify-between text-lg">
            <dt className="font-medium">الإجمالي</dt>
            <dd className="font-display text-2xl text-charcoal">{formatPrice(total)}</dd>
          </div>
        </div>
      </dl>
      {showCheckoutButton && subtotal > 0 && (
        <Link to="/checkout" className="mt-8 block">
          <Button variant="primary" className="w-full">
            {checkoutLabel}
          </Button>
        </Link>
      )}
      <p className="mt-4 text-center text-xs text-charcoal-soft">
        دفع آمن · إرجاع مجاني خلال ٧ أيام
      </p>
    </div>
  )
}
