import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { wishlistItems } from '../features/wishlist/mockData/wishlistItems'
import { Container } from '../components/ui/Container'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { Button } from '../components/ui/Button'
import { formatPrice } from '../lib/utils'

export function WishlistPage() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumb items={[{ label: 'الرئيسية', to: '/' }, { label: 'المفضلة' }]} />
      <h1 className="font-display text-4xl md:text-5xl">المفضلة</h1>
      <p className="mt-2 text-charcoal-soft">{wishlistItems.length} منتجات محفوظة</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((product) => (
          <li
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-blush/40 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <Link to={`/product/${product.slug}`} className="block">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-5">
              <Link to={`/product/${product.slug}`} className="font-display text-xl hover:text-rose">
                {product.name}
              </Link>
              <p className="mt-1 font-medium">{formatPrice(product.price)}</p>
              <div className="mt-4 flex gap-2">
                <Link to="/cart" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full">
                    <ShoppingBag className="h-4 w-4" />
                    أضف للسلة
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" type="button">
                  إزالة
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
