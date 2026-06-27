import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { primaryNav, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2 group" aria-label={SITE.name}>
          <span className="font-display text-2xl tracking-tight lg:text-3xl">
            Erica<span className="text-primary"> Residence</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {primaryNav.slice(0, 7).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/signin"
            className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/book-visit"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book a Visit <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-elegant flex flex-col transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="font-display text-xl">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile">
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-primary bg-secondary" }}
                    activeOptions={{ exact: item.to === "/" }}
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base text-foreground/85 hover:bg-secondary transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight className="size-4 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-5 space-y-3">
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full border border-border px-5 py-3 text-center text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/book-visit"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            >
              Book a Visit
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
