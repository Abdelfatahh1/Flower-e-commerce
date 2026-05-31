import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { QuantitySelector } from "../../../components/ui/QuantitySelector";
import { formatPrice, calcDiscount, cn } from "../../../lib/utils";
import { ProductTrustBadges } from "./ProductTrustBadges";
//دي صفحة البرودكت ديتيلز وهيتعملها سيبارات
export function ProductInfo({ product }) {
  const discount = calcDiscount(product.price, product.originalPrice);

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      {product.badge && <Badge variant={product.badge} className="mb-4" />}
      <h1 className="font-display text-4xl md:text-5xl">{product.name}</h1>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(product.rating) ? "fill-current" : "opacity-30",
              )}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal-soft">
          {product.rating} ({product.reviews} تقييم)
        </span>
      </div>
      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-3xl">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-charcoal-soft line-through">
              {formatPrice(product.originalPrice)}
            </span>
            {discount > 0 && (
              <span className="rounded-full bg-rose/10 px-3 py-1 text-sm font-medium text-rose">
                وفر {discount}%
              </span>
            )}
          </>
        )}
      </div>
      <p className="mt-6 leading-relaxed text-charcoal-soft">
        {product.description}
      </p>

      {product.colors?.length > 0 && (
        <div className="mt-8">
          <p className="mb-3 text-sm font-medium">اللون</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                className="rounded-full border border-blush px-4 py-2 text-sm transition-all hover:border-rose hover:bg-cream-dark"
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <QuantitySelector value={1} />
        <Link to="/cart" className="min-w-[200px] flex-1">
          <Button variant="primary" size="lg" className="w-full">
            أضف إلى السلة
          </Button>
        </Link>
        <Link
          to="/wishlist"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-blush transition-all duration-300 hover:scale-105 hover:border-rose"
          aria-label="المفضلة"
        >
          <Heart className="h-5 w-5" />
        </Link>
      </div>

      <ProductTrustBadges />
    </div>
  );
}
