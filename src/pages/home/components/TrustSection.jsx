import { Truck, Shield, Sparkles, Leaf } from 'lucide-react'
import { Container } from '../../../components/ui/Container'
import { trustFeatures } from '../mockData/content'

const icons = [Truck, Leaf, Shield, Sparkles]

export function TrustSection() {
  return (
    <section className="border-y border-blush/30 bg-cream-dark py-16 md:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature, i) => {
            const Icon = icons[i]
            return (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/30 text-rose transition-colors group-hover:bg-rose group-hover:text-cream">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl">{feature.title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
