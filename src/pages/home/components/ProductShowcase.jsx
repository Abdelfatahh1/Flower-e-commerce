import { Container } from '../../../components/ui/Container'
import { SectionHeader } from '../../../components/ui/SectionHeader'
import { ProductGrid } from '../../../features/shop/components/ProductGrid'

export function ProductShowcase({ eyebrow, title, subtitle, products, linkTo }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          linkTo={linkTo}
          align="between"
        />
        <ProductGrid products={products} />
      </Container>
    </section>
  )
}
