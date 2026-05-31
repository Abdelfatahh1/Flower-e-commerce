import { Link } from 'react-router-dom'
import { categories } from '../../shop/mockData/categories'
import { Container } from '../../../components/ui/Container'
import { SectionHeader } from '../../../components/ui/SectionHeader'

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="المجموعات"
          title="تسوقي حسب التصنيف"
          subtitle="اختيارات منتقاة لكل مناسبة"
          linkTo="/shop"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                <h3 className="font-display text-lg md:text-xl">{cat.name}</h3>
                <p className="text-xs text-cream/80">{cat.count} منتج</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
