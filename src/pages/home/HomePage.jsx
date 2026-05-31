import { getProductsByTag } from "../../features/shop/mockData/products";
import { HeroSection } from "./components/HeroSection";
import { CategoriesSection } from "../../features/product/components/CategoriesSection";
import { TrustSection } from "./components/TrustSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { CtaSection } from "./components/CtaSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <TrustSection />
      <ProductShowcase
        eyebrow="مختارات"
        title="المجموعة المميزة"
        subtitle="أحب التنسيقات لدى فريقنا"
        products={getProductsByTag("featured")}
        linkTo="/shop"
      />
      <ProductShowcase
        eyebrow="الأكثر رواجاً"
        title="رائج الآن"
        products={getProductsByTag("trending")}
        linkTo="/shop"
      />
      <CtaSection />
      <ProductShowcase
        eyebrow="وصل حديثاً"
        title="أحدث الإضافات"
        products={getProductsByTag("latest")}
        linkTo="/shop"
      />
      <ProductShowcase
        eyebrow="عروض خاصة"
        title="تخفيضات"
        products={getProductsByTag("sale")}
        linkTo="/shop?tag=sale"
      />
    </>
  );
}
