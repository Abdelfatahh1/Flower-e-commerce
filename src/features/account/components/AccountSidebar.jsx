import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Bell,
  User,
  Shield,
  Trash2,
  GitCompare,
  LogOut,
} from "lucide-react";
import { cn } from "../../../lib/utils";
import { accountNavLinks } from "../mockData/navigation";

const icons = {
  "/account": LayoutDashboard,
  "/account/orders": Package,
  "/account/notifications": Bell,
  "/account/profile": User,
  "/account/compare": GitCompare,
  "/account/privacy": Shield,
  "/account/delete": Trash2,
  "/": LogOut,
};

export function AccountSidebar() {
  return (
    <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
      <nav className="grid grid-cols-2 gap-2 rounded-3xl border border-blush/40 bg-white p-2 shadow-sm sm:grid-cols-3 sm:gap-2.5 sm:p-3 lg:flex lg:flex-col lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
        {accountNavLinks.map(({ to, label, end }) => {
          const Icon = icons[to] ?? LayoutDashboard;
          return (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex min-w-0 items-center gap-2 rounded-2xl px-3 py-2.5 text-xs font-medium transition-all duration-300 sm:gap-2.5 sm:px-3.5 sm:py-3 sm:text-sm lg:gap-3 lg:px-4",
                  "max-lg:flex-col max-lg:justify-center max-lg:text-center lg:flex-row",
                  isActive
                    ? "bg-charcoal text-cream shadow-md"
                    : "text-charcoal-soft hover:bg-cream-dark hover:text-charcoal",
                )
              }
            >
              <Icon className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
              <span className="line-clamp-2 leading-snug">{label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
