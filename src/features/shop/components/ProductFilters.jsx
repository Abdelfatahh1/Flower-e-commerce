import { Search, X } from 'lucide-react'
import { categories } from '../mockData/categories'

export function ProductFilters() {
  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-soft" />
        <input
          type="search"
          placeholder="ابحث عن زهور..."
          className="w-full rounded-2xl border border-blush/60 bg-white py-3 ps-11 pe-4 transition-all duration-300 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
        />
      </div>

      <div>
        <h4 className="mb-4 font-display text-lg">التصنيفات</h4>
        <ul className="space-y-2">
          <li>
            <FilterChip active>الكل</FilterChip>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <FilterChip>{cat.name}</FilterChip>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-display text-lg">نطاق السعر</h4>
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="من"
            className="w-full rounded-xl border border-blush/60 px-3 py-2 text-sm focus:border-rose focus:outline-none"
          />
          <span className="text-charcoal-soft">—</span>
          <input
            type="number"
            placeholder="إلى"
            className="w-full rounded-xl border border-blush/60 px-3 py-2 text-sm focus:border-rose focus:outline-none"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-display text-lg">ترتيب حسب</h4>
        <select className="w-full rounded-2xl border border-blush/60 bg-white px-4 py-3 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20">
          <option>مميز</option>
          <option>السعر: من الأقل للأعلى</option>
          <option>السعر: من الأعلى للأقل</option>
          <option>الأعلى تقييماً</option>
          <option>الأحدث</option>
        </select>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-full border border-blush py-3 text-sm font-medium transition-all duration-300 hover:border-rose hover:text-rose"
      >
        <X className="h-4 w-4" />
        مسح الفلاتر
      </button>
    </div>
  )
}

function FilterChip({ children, active }) {
  return (
    <button
      type="button"
      className={
        active
          ? 'w-full rounded-xl bg-charcoal px-4 py-2.5 text-start text-sm text-cream'
          : 'w-full rounded-xl px-4 py-2.5 text-start text-sm text-charcoal-soft transition-all duration-300 hover:bg-cream-dark hover:text-charcoal'
      }
    >
      {children}
    </button>
  )
}
