import { cn } from '../../../lib/utils'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products, columns = 4, variant }) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <div className={cn('grid gap-6 md:gap-8', gridCols[columns] || gridCols[4])}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={variant} />
      ))}
    </div>
  )
}
