import { products } from '../features/shop/mockData/products'
import { Container } from '../components/ui/Container'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { ProductGrid } from '../features/shop/components/ProductGrid'
import { ShopFiltersSidebar } from '../features/shop/components/ShopFiltersSidebar'
import { ShopMobileFilters } from '../features/shop/components/ShopMobileFilters'

export function ShopPage() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumb items={[{ label: 'الرئيسية', to: '/' }, { label: 'المتجر' }]} />
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl md:text-5xl">المتجر</h1>
          <p className="mt-2 text-charcoal-soft">{products.length} منتج</p>
        </div>
        <ShopMobileFilters />
      </div>
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <ShopFiltersSidebar />
        <ProductGrid products={products} columns={3} />
      </div>
    </Container>
  )
}
