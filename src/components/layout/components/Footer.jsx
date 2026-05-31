import { Link } from "react-router-dom";
import { Share2, Globe, Mail } from "lucide-react";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { footerLinks } from "../../../features/account/mockData/navigation";

export function Footer() {
  return (
    <footer className="border-t border-blush/30 bg-charcoal text-cream">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link to="/" className="font-display text-3xl font-semibold">
              بلوم<span className="text-blush-deep">يه</span>
            </Link>
            <p className="mt-4 max-w-md text-cream/70">
              نصنع لحظات الجمال بزهور حرفية. باقات فاخرة تُوصَل بعناية فائقة في
              أنحاء الجمهورية.
            </p>
            <div className="mt-6 flex gap-4">
              {[Share2, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 hover:border-blush-deep hover:bg-blush-deep/20"
                  aria-label="رابط تواصل"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <h3 className="font-display text-2xl">اشتركي في نشرتنا</h3>
            <p className="mt-2 text-sm text-cream/70">
              عروض حصرية وإلهام زهري أسبوعياً.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 border-cream/20 bg-white/10 text-cream placeholder:text-cream/40"
              />
              <Button variant="rose" type="button">
                اشتراك
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-medium text-blush-deep">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} بلوميه. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream">
              الخصوصية
            </a>
            <a href="#" className="hover:text-cream">
              الشروط
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
