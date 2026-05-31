import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { QuantitySelector } from '../../../components/ui/QuantitySelector'
import { formatPrice } from '../../../lib/utils'

export function CartItemRow({ product, quantity }) {
  return (
    <li className="flex flex-col gap-4 rounded-3xl border border-blush/40 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
      <Link to={`/product/${product.slug}`} className="shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-32 w-28 rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to={`/product/${product.slug}`} className="font-display text-xl hover:text-rose">
            {product.name}
          </Link>
          <p className="mt-1 font-medium">{formatPrice(product.price)}</p>
        </div>
        <div className="mt-4 flex items-center gap-6 sm:mt-0">
          <QuantitySelector value={quantity} />
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-charcoal-soft"
            aria-label="حذف"
          >
            <Trash2 className="h-4 w-4" />
            حذف
          </button>
        </div>
      </div>
      <p className="text-end font-medium sm:w-28">
        {formatPrice(product.price * quantity)}
      </p>
    </li>
  )
}
