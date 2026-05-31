import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Button } from "../../../components/ui/Button";
import { heroStats } from "../mockData/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div className="animate-slide-up">
          <p className="mb-4 text-sm font-medium text-rose">زهور فاخرة</p>
          <h1 className="font-display text-5xl font-medium leading-tight text-charcoal md:text-6xl lg:text-7xl">
            فن في
            <span className="block italic text-rose"> كل بتلة</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-charcoal-soft text-balance">
            باقات وتنسيقات نباتية مصنوعة يدوياً لأجمل لحظات الحياة — تُوصَل
            بعناية لا تُضاهى.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/shop">
              <Button variant="primary" size="lg">
                تسوقي المجموعة
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop?tag=sale">
              <Button variant="secondary" size="lg">
                عروض التخفيض
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex gap-10 border-t border-blush/40 pt-10">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-charcoal">
                  {stat.value}
                </p>
                <p className="text-sm text-charcoal-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&amp;q=80"
              alt="باقة زهور فاخرة"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -start-6 hidden rounded-2xl bg-white p-4 shadow-xl md:block animate-fade-in">
            <p className="text-xs text-rose">وصل حديثاً</p>
            <p className="font-display text-lg">مجموعة الربيع</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
