import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { Badge } from '../../../components/ui/Badge'
import { Button } from '../../../components/ui/Button'
import { formatPrice, calcDiscount, cn } from '../../../lib/utils'

export function ProductCard({ product, variant = 'default' }) {
  const discount = calcDiscount(product.price, product.originalPrice)
  const isCompact = variant === 'compact'

  return (
    <article className="group relative">
      <Link
        to={`/product/${product.slug}`}
        className="block overflow-hidden rounded-3xl bg-cream-dark shadow-sm transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <div className="absolute start-4 top-4">
              <Badge variant={product.badge} />
            </div>
          )}
          {discount > 0 && (
            <div className="absolute end-4 top-4 rounded-full bg-charcoal/80 px-2.5 py-1 text-xs font-medium text-cream backdrop-blur-sm">
              -{discount}%
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
            <Link to="/cart" className="flex-1">
              <Button variant="primary" size="sm" className="w-full">
                <ShoppingBag className="h-4 w-4" />
                أضف
              </Button>
            </Link>
            <Link
              to="/wishlist"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-105"
              aria-label="أضف للمفضلة"
            >
              <Heart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Link>
      <div className={cn('mt-4', isCompact && 'mt-3')}>
        <Link to={`/product/${product.slug}`}>
          <h3
            className={cn(
              'font-display text-charcoal transition-colors hover:text-rose',
              isCompact ? 'text-lg' : 'text-xl'
            )}
          >
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-medium text-charcoal">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-charcoal-soft line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {!isCompact && (
          <div className="mt-1 flex items-center gap-1 text-sm text-charcoal-soft">
            <span className="text-gold">★</span>
            <span>{product.rating}</span>
            <span>({product.reviews} تقييم)</span>
          </div>
        )}
      </div>
    </article>
  )
}
