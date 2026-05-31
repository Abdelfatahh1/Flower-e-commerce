import { Link } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts, products } from '../features/shop/mockData/products'
import { getPathSlug } from '../lib/utils'
import { Container } from '../components/ui/Container'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { ProductGallery } from '../features/product/components/ProductGallery'
import { ProductInfo } from '../features/product/components/ProductInfo'
import { ReviewsSection } from '../features/product/components/ReviewsSection'
import { ProductGrid } from '../features/shop/components/ProductGrid'

export function ProductPage() {
  const slug = getPathSlug('product')
  const product = getProductBySlug(slug)
  const related = product ? getRelatedProducts(product.id) : products.slice(0, 4)

  if (!product) {
    return (
      <Container className="py-20 text-center">
        <h1 className="font-display text-3xl">المنتج غير موجود</h1>
        <Link to="/shop" className="mt-6 inline-block text-rose hover:underline">
          العودة للمتجر
        </Link>
      </Container>
    )
  }

  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: 'الرئيسية', to: '/' },
            { label: 'المتجر', to: '/shop' },
            { label: product.name },
          ]}
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        <ReviewsSection />
      </Container>
      <section className="border-t border-blush/30 bg-cream-dark py-16 md:py-24">
        <Container>
          <h2 className="mb-10 font-display text-3xl md:text-4xl">قد يعجبك أيضاً</h2>
          <ProductGrid products={related.length ? related : products.slice(0, 4)} />
        </Container>
      </section>
    </>
  )
}
