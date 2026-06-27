import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <BottomNav />
      <FloatingActions />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative container-px mx-auto max-w-7xl pb-12 lg:pb-16 text-background">
        {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>}
        <h1 className="mt-3 text-balance font-display text-4xl md:text-6xl lg:text-7xl max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-xl text-sm md:text-base text-background/80">{subtitle}</p>}
      </div>
    </section>
  );
}
