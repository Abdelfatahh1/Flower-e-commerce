import { Link } from 'react-router-dom'
import { Container } from '../../../components/ui/Container'
import { Button } from '../../../components/ui/Button'

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal px-8 py-16 text-center md:px-16 md:py-24">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1400&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-sm text-blush-deep">لفترة محدودة</p>
            <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
              تخفيضات الربيع — حتى ٣٠٪
            </h2>
            <p className="mt-4 text-cream/80">
              زيّني مساحتك بزهور موسمية بقيمة استثنائية.
            </p>
            <Link to="/shop?tag=sale" className="mt-8 inline-block">
              <Button variant="rose" size="lg">
                تسوقي العروض
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
