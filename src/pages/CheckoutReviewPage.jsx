import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { Button } from '../components/ui/Button'
import { CheckoutOrderReview } from '../features/checkout/components/CheckoutOrderReview'
import { CheckoutOrderTotals } from '../features/checkout/components/CheckoutOrderTotals'
import { CheckoutStepIndicator } from '../features/checkout/components/CheckoutStepIndicator'
import { CheckoutCoupon } from '../features/checkout/components/CheckoutCoupon'

export function CheckoutReviewPage() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumb
        items={[
          { label: 'الرئيسية', to: '/' },
          { label: 'السلة', to: '/cart' },
          { label: 'مراجعة الطلب' },
        ]}
      />
      <h1 className="font-display text-4xl md:text-5xl">مراجعة الطلب</h1>
      <CheckoutStepIndicator currentStep={1} />
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8 rounded-3xl border border-blush/40 bg-white p-6 md:p-8">
          <CheckoutOrderReview />
          <CheckoutCoupon />
          <Link to="/checkout/payment" className="block border-t border-blush/30 pt-8">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              متابعة عملية الدفع
            </Button>
          </Link>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <CheckoutOrderTotals />
        </aside>
      </div>
    </Container>
  )
}
