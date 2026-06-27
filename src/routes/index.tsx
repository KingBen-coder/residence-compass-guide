import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, ShieldCheck, Trees, Wifi, Dumbbell, Waves, Car, Coffee, Quote, Phone, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/properties";
import { images, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erica Residence — Elevated City Living in Kilimani" },
      { name: "description", content: "A flagship residential address in Kilimani. Penthouses, suites and family homes with private balconies, designer interiors and resident-only amenities." },
      { property: "og:title", content: "Erica Residence — Elevated City Living" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const amenities = [
  { icon: Waves, label: "Heated lap pool" },
  { icon: Dumbbell, label: "Members-only gym" },
  { icon: Trees, label: "Landscaped gardens" },
  { icon: Wifi, label: "Fibre throughout" },
  { icon: Car, label: "Secure parking" },
  { icon: Coffee, label: "Resident lounge" },
];

const testimonials = [
  { name: "Amina K.", role: "Resident, The Meridian", body: "From the foyer to the balcony, the attention to detail is what made us stay. The light is extraordinary." },
  { name: "David O.", role: "Investor, Diaspora", body: "Transparent payment plans, responsive sales team and quarterly reports. Exactly what I needed remotely." },
  { name: "Wanjiku M.", role: "Resident, The Haven", body: "Our family finally has space that feels both grand and warm. The amenities are the cherry on top." },
];

const faqs = [
  { q: "What is the price range?", a: "Residences start from USD 145,000 (1-bed) and go up to USD 525,000 for the garden duplex." },
  { q: "Are flexible payment plans available?", a: "Yes — 20% deposit then 12, 24 or 36-month structured plans, with discounts for early settlement." },
  { q: "Can I book a tour remotely?", a: "We host virtual walkthroughs with the sales team. Book a slot from the Book a Visit page." },
  { q: "When is handover?", a: "Phase one is move-in ready. Phase two completes within the calendar year." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img src={images.exterior} alt="Erica Residence tower at golden hour" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/30 to-foreground/85" />
        <div className="relative container-px mx-auto max-w-7xl pb-16 lg:pb-24 text-background">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Kilimani · Nairobi</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl text-balance leading-[0.95]">
            Elevated city living, designed without compromise.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-background/80">
            A landmark address of penthouses, suites and family residences — finished to a standard you can feel before you've crossed the threshold.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/properties" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary-glow transition-colors">
              Explore Residences <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/book-visit" className="inline-flex items-center gap-2 rounded-full border border-background/40 text-background px-6 py-3.5 text-sm font-medium hover:bg-background/10 transition-colors">
              Book a Private Visit
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-background/20 pt-8">
            {[
              ["68 – 232", "m² residences"],
              ["12", "storeys"],
              ["6", "resident amenities"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl md:text-4xl text-primary">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-background/65">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHY */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary gold-rule">Why Erica Residence</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">A home that earns its address.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every residence is sited for natural light, tuned for acoustic calm and finished with engineered oak floors, full-height glazing and a kitchen built for entertaining. Lift the curtain and the city is your view; close it and the world disappears.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Sparkles, t: "Considered design", d: "Materials and proportions chosen for the long view, not the trend." },
                { icon: ShieldCheck, t: "Trusted developer", d: "Transparent pricing, escrowed deposits, milestone updates." },
                { icon: Trees, t: "Landscaped grounds", d: "Mature trees, courtyard gardens and a residents' lawn." },
                { icon: Waves, t: "Resident amenities", d: "Pool, gym, lounge and concierge — all members-only." },
              ].map((f) => (
                <div key={f.t} className="rounded-xl border border-border bg-card p-5">
                  <f.icon className="size-5 text-primary" />
                  <h3 className="mt-3 font-medium">{f.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={images.livingBright} alt="Sunlit penthouse living room" className="w-full rounded-2xl shadow-elegant aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card border border-border p-5 shadow-soft max-w-[200px]">
              <p className="text-xs uppercase tracking-widest text-primary">Move-in ready</p>
              <p className="mt-1 font-display text-2xl">Phase One</p>
              <p className="mt-1 text-xs text-muted-foreground">Final units released this quarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary gold-rule">The Collection</p>
              <h2 className="mt-6 font-display text-4xl md:text-5xl">Featured residences</h2>
            </div>
            <Link to="/properties" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary">
              View all <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Amenities</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Resident-only, every day.</h2>
          <p className="mt-4 text-muted-foreground">Six curated amenities, ten paces from your front door.</p>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map((a) => (
            <div key={a.label} className="rounded-xl border border-border bg-card p-6 flex flex-col items-center text-center hover:shadow-soft transition-shadow">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <a.icon className="size-5" />
              </span>
              <p className="mt-3 text-sm font-medium">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIFESTYLE SPLIT */}
      <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto">
            <img src={images.bedroomYellow} alt="Master bedroom" className="size-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={images.bathroom} alt="Bathroom" className="size-full object-cover aspect-[4/3]" />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src={images.balcony} alt="Balcony" className="size-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
            Explore the gallery <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* INVESTMENT BAND */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Investment</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">A measurable yield in a landmark address.</h2>
            <p className="mt-5 text-background/75 leading-relaxed">
              Rental yields of 7–9% gross with managed letting and quarterly investor reporting. Structured payment plans, escrowed deposits and a developer with a track record of on-time delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/investment" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-glow transition-colors">
                Investment overview <ArrowUpRight className="size-4" />
              </Link>
              <Link to="/brochure" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium hover:bg-background/10">
                Download brochure
              </Link>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px bg-background/15 rounded-2xl overflow-hidden">
            {[
              ["7–9%", "Gross rental yield"],
              ["100%", "Title issued on completion"],
              ["20%", "Deposit to reserve"],
              ["36mo", "Maximum payment plan"],
            ].map(([n, l]) => (
              <div key={l} className="bg-foreground p-6 lg:p-8">
                <dt className="font-display text-4xl text-primary">{n}</dt>
                <dd className="mt-2 text-xs uppercase tracking-widest text-background/65">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Resident voices</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Heard from inside.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card border border-border p-7">
              <Quote className="size-6 text-primary" />
              <blockquote className="mt-4 font-display text-xl leading-snug text-balance">"{t.body}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-medium">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-px mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">FAQs</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Quick answers.</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-soft">
                <summary className="flex items-center justify-between cursor-pointer font-medium list-none">
                  {f.q}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faqs" className="text-sm font-medium hover:text-primary">See all questions →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16">
          <img src={images.livingSheer} alt="" className="absolute inset-0 size-full object-cover opacity-25" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl text-balance">Reserve a viewing this week.</h2>
            <p className="mt-4 text-background/80">A 45-minute private walkthrough with the lead agent. Refreshments served.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book-visit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary-glow">
                Book a Visit <ArrowUpRight className="size-4" />
              </Link>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium hover:bg-background/10">
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-medium hover:bg-background/10">
                <Mail className="size-4" /> Email sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
