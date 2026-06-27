import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { primaryNav, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl">
              Erica<span className="text-primary"> Residence</span>
            </span>
            <p className="mt-4 text-sm text-background/65 leading-relaxed">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-background/20 hover:border-primary hover:text-primary transition-colors"
                  aria-label={`Social ${i}`}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-primary">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryNav.slice(0, 6).map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-background/70 hover:text-primary transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-primary">Account</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/signin" className="text-background/70 hover:text-primary">Sign In</Link></li>
              <li><Link to="/signup" className="text-background/70 hover:text-primary">Create Account</Link></li>
              <li><Link to="/dashboard" className="text-background/70 hover:text-primary">Dashboard</Link></li>
              <li><Link to="/book-visit" className="text-background/70 hover:text-primary">Book a Visit</Link></li>
              <li><Link to="/brochure" className="text-background/70 hover:text-primary">Brochure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-primary">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-primary" />{SITE.address}</li>
              <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-primary" />{SITE.phone}</li>
              <li className="flex items-start gap-3"><Mail className="size-4 mt-0.5 text-primary" />{SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-background/55">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
      {/* Bottom spacer for mobile bottom nav */}
      <div className="h-20 md:hidden" aria-hidden />
    </footer>
  );
}
