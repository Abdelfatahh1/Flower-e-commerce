import { ProductFilters } from './ProductFilters'

export function ShopFiltersSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-3xl border border-blush/40 bg-white p-6 shadow-sm">
        <ProductFilters />
      </div>
    </aside>
  )
}
