import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { Button } from '../components/ui/Button'
import { CheckoutShippingForm } from '../features/checkout/components/CheckoutForm'
import { CheckoutOrderReview } from '../features/checkout/components/CheckoutOrderReview'
import { CheckoutPayment } from '../features/checkout/components/CheckoutPayment'
import { CheckoutStepIndicator } from '../features/checkout/components/CheckoutStepIndicator'

export function CheckoutPaymentPage() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumb
        items={[
          { label: 'الرئيسية', to: '/' },
          { label: 'السلة', to: '/cart' },
          { label: 'مراجعة الطلب', to: '/checkout' },
          { label: 'الشحن والدفع' },
        ]}
      />
      <h1 className="font-display text-4xl md:text-5xl">الشحن والدفع</h1>
      <CheckoutStepIndicator currentStep={2} />
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-10 rounded-3xl border border-blush/40 bg-white p-6 md:p-8">
          <CheckoutShippingForm />
          <CheckoutPayment />
          <Link to="/checkout/success" className="block border-t border-blush/30 pt-8">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              إتمام الدفع
            </Button>
          </Link>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-blush/40 bg-white p-6 shadow-sm md:p-8">
            <CheckoutOrderReview />
          </div>
        </aside>
      </div>
    </Container>
  )
}
