import { SlidersHorizontal } from 'lucide-react'
import { ProductFilters } from './ProductFilters'

export function ShopMobileFilters() {
  return (
    <details className="lg:hidden">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-blush px-5 py-2.5 text-sm font-medium transition-all hover:border-rose">
        <SlidersHorizontal className="h-4 w-4" />
        الفلاتر
      </summary>
      <div className="fixed inset-0 z-50 mt-4">
        <span className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />
        <aside className="drawer-panel-start animate-slide-in-start">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl">الفلاتر</h2>
            <summary className="cursor-pointer text-sm font-medium text-rose list-none">
              تم
            </summary>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ProductFilters />
          </div>
        </aside>
      </div>
    </details>
  )
}
