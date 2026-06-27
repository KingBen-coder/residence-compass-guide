import { Link } from "@tanstack/react-router";
import { Home, Building2, Heart, CalendarCheck, Menu } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/properties", label: "Residences", icon: Building2 },
  { to: "/dashboard/favorites", label: "Saved", icon: Heart },
  { to: "/book-visit", label: "Visit", icon: CalendarCheck },
  { to: "/contact", label: "Contact", icon: Menu },
] as const;

export function BottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border"
      aria-label="Bottom navigation"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ to, label, icon: Icon, exact }) => (
          <li key={to}>
            <Link
              to={to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: !!exact }}
              className="flex flex-col items-center gap-1 py-2.5 text-[10px] tracking-wide text-foreground/70 hover:text-primary"
            >
              <Icon className="size-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
