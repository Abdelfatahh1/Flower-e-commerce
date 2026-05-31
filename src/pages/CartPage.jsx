import { cartItems } from '../features/cart/mockData/cartItems'
import { Container } from '../components/ui/Container'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { CartItemRow } from '../features/cart/components/CartItemRow'
import { OrderSummary } from '../features/cart/components/OrderSummary'

const subtotal = cartItems.reduce(
  (sum, { product, quantity }) => sum + product.price * quantity,
  0
)

export function CartPage() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumb items={[{ label: 'الرئيسية', to: '/' }, { label: 'السلة' }]} />
      <h1 className="font-display text-4xl md:text-5xl">سلة التسوق</h1>
      <p className="mt-2 text-charcoal-soft">{cartItems.length} منتجات</p>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <ul className="space-y-6">
          {cartItems.map(({ product, quantity }) => (
            <CartItemRow key={product.id} product={product} quantity={quantity} />
          ))}
        </ul>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <OrderSummary subtotal={subtotal} />
        </div>
      </div>
    </Container>
  )
}
