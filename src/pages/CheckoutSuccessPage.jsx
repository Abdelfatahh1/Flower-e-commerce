import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function CheckoutSuccessPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center animate-fade-in">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sage/20">
        <CheckCircle className="h-12 w-12 text-sage" strokeWidth={1.5} />
      </div>
      <h1 className="font-display text-4xl md:text-5xl">شكراً لك!</h1>
      <p className="mt-4 max-w-md text-charcoal-soft">
        تم استلام طلبك بنجاح. ستصلك رسالة تأكيد على بريدك مع تفاصيل التوصيل.
      </p>
      <p className="mt-2 font-mono text-sm text-rose">طلب #BLM-28491</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/account/orders">
          <Button variant="primary">عرض الطلبات</Button>
        </Link>
        <Link to="/shop">
          <Button variant="secondary">متابعة التسوق</Button>
        </Link>
      </div>
    </Container>
  )
}
