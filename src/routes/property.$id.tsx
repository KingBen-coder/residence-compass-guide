import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Bed, Bath, Square, MapPin, Check, Download, CalendarCheck, Share2, Heart, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getProperty, properties } from "@/lib/properties";
import { SITE } from "@/lib/site";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const p = getProperty(params.id);
    if (!p) throw notFound();
    return p as NonNullable<ReturnType<typeof getProperty>>;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Residence"} — Erica Residence` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: loaderData?.title ?? "Residence" },
      { property: "og:description", content: loaderData?.description ?? "" },
      { property: "og:image", content: loaderData?.cover ?? "" },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/property/${loaderData?.id ?? ""}` },
    ],
    links: [{ rel: "canonical", href: `/property/${loaderData?.id ?? ""}` }],
  }),
  component: PropertyPage,
});

const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function PropertyPage() {
  const p = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const others = properties.filter((o) => o.id !== p.id).slice(0, 3);

  return (
    <SiteLayout>
      <div className="container-px mx-auto max-w-7xl pt-8">
        <Link to="/properties" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Back to residences
        </Link>
      </div>

      {/* Gallery */}
      <section className="container-px mx-auto max-w-7xl mt-6">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-3">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
            <img src={p.gallery[active]} alt={p.title} className="size-full object-cover" />
            <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[11px] uppercase tracking-widest font-medium">{p.status}</span>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
            {p.gallery.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setActive(i)}
                className={`relative aspect-square rounded-xl overflow-hidden ${active === i ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100"}`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Header + actions */}
      <section className="container-px mx-auto max-w-7xl mt-10">
        <div className="grid lg:grid-cols-[1.6fr,1fr] gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{p.type} · Floor {p.floor}</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">{p.title}</h1>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {p.view} · {SITE.address}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-6 border-y border-border py-6">
              <Spec icon={Bed} label="Bedrooms" value={p.bedrooms} />
              <Spec icon={Bath} label="Bathrooms" value={p.bathrooms} />
              <Spec icon={Square} label="Area" value={`${p.areaSqm} m²`} />
            </dl>

            <div className="mt-8 prose prose-stone max-w-none">
              <h2 className="font-display text-2xl">About this residence</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl">Highlights</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary mt-0.5" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl">Payment plans</h2>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {[
                  { name: "Outright", terms: "5% discount on full payment" },
                  { name: "12 months", terms: "20% deposit · 12 monthly" },
                  { name: "36 months", terms: "20% deposit · 36 monthly" },
                ].map((pl) => (
                  <div key={pl.name} className="rounded-xl border border-border bg-card p-5">
                    <p className="font-medium">{pl.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pl.terms}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 self-start space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">From</p>
              <p className="font-display text-4xl text-foreground">{fmt(p.price)}</p>
              <p className="mt-1 text-xs text-muted-foreground">All-in, indicative. Plans from 20% deposit.</p>

              <div className="mt-5 space-y-2.5">
                <Link to="/book-visit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground">
                  <CalendarCheck className="size-4" /> Book a Visit
                </Link>
                <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary">
                  <Phone className="size-4" /> Contact Agent
                </Link>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <button className="rounded-full border border-border py-2.5 text-xs font-medium inline-flex items-center justify-center gap-1.5 hover:bg-secondary">
                    <Heart className="size-3.5" /> Save
                  </button>
                  <button className="rounded-full border border-border py-2.5 text-xs font-medium inline-flex items-center justify-center gap-1.5 hover:bg-secondary">
                    <Share2 className="size-3.5" /> Share
                  </button>
                  <Link to="/brochure" className="rounded-full border border-border py-2.5 text-xs font-medium inline-flex items-center justify-center gap-1.5 hover:bg-secondary">
                    <Download className="size-3.5" /> PDF
                  </Link>
                </div>
              </div>
            </div>
            <MortgageCalc price={p.price} />
          </aside>
        </div>
      </section>

      {/* More */}
      <section className="container-px mx-auto max-w-7xl mt-24">
        <h2 className="font-display text-3xl md:text-4xl">More residences to consider</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => <PropertyCard key={o.id} p={o} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

function Spec({ icon: Icon, label, value }: { icon: any; label: string; value: string | number }) {
  return (
    <div>
      <dt className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3.5" /> {label}
      </dt>
      <dd className="mt-1 font-display text-2xl">{value}</dd>
    </div>
  );
}

function MortgageCalc({ price }: { price: number }) {
  const [deposit, setDeposit] = useState(20);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(11);

  const loan = price * (1 - deposit / 100);
  const r = rate / 100 / 12;
  const n = years * 12;
  const monthly = loan > 0 ? (loan * r) / (1 - Math.pow(1 + r, -n)) : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-widest text-primary">Mortgage calculator</p>
      <div className="mt-4 space-y-3 text-sm">
        <Field label={`Deposit: ${deposit}%`}>
          <input type="range" min={10} max={60} value={deposit} onChange={(e) => setDeposit(+e.target.value)} className="w-full accent-[var(--gold)]" />
        </Field>
        <Field label={`Term: ${years} yrs`}>
          <input type="range" min={5} max={30} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-[var(--gold)]" />
        </Field>
        <Field label={`Rate: ${rate}%`}>
          <input type="range" min={5} max={20} step={0.25} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-[var(--gold)]" />
        </Field>
      </div>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Estimated monthly</p>
        <p className="font-display text-3xl">{fmt(monthly)}</p>
        <p className="mt-1 text-xs text-muted-foreground">Indicative only. Subject to lender approval.</p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
