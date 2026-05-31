import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingBag, Heart, User, Search, X } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { cn } from "../../../lib/utils";
import { mainNavLinks } from "../../../features/account/mockData/navigation";
import { cartBadgeCount } from "../../../features/cart/mockData/cartItems";
import { wishlistBadgeCount } from "../../../features/wishlist/mockData/wishlistItems";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="font-display text-2xl font-semibold tracking-wide text-charcoal md:text-3xl"
        >
          لمسة<span className="text-rose">ةة</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex h-screen">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-rose"
                    : "text-charcoal-soft hover:text-charcoal",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link to="/shop" className="icon-btn hidden sm:flex" aria-label="بحث">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/wishlist" className="icon-btn" aria-label="المفضلة">
            <Heart className="h-5 w-5" />
            <span className="icon-badge">{wishlistBadgeCount}</span>
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="السلة">
            <ShoppingBag className="h-5 w-5" />
            <span className="icon-badge">{cartBadgeCount}</span>
          </Link>
          <Link
            to="/login"
            className="icon-btn hidden md:flex"
            aria-label="الحساب"
          >
            <User className="h-5 w-5" />
          </Link>

          <details className="relative md:hidden">
            <summary className="icon-btn cursor-pointer marker:content-none">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="fixed inset-0 z-50">
              <span className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />
              <nav className="drawer-panel animate-slide-in-start">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-2xl">القائمة</span>
                  <summary className="icon-btn cursor-pointer list-none">
                    <X className="h-5 w-5" />
                  </summary>
                </div>
                <ul className="space-y-2">
                  {mainNavLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-xl px-4 py-3 font-medium transition-colors",
                            isActive
                              ? "bg-cream-dark text-rose"
                              : "hover:bg-cream-dark",
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/login"
                      className="block rounded-xl px-4 py-3 font-medium hover:bg-cream-dark"
                    >
                      تسجيل الدخول
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
