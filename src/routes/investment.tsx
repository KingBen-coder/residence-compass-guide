import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images } from "@/lib/site";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Erica Residence" },
      { name: "description", content: "Investment overview, ROI calculator and payment plans for Erica Residence." },
      { property: "og:url", content: "/investment" },
    ],
    links: [{ rel: "canonical", href: "/investment" }],
  }),
  component: InvestmentPage,
});

const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function InvestmentPage() {
  const [price, setPrice] = useState(295000);
  const [yieldPct, setYieldPct] = useState(8);
  const [years, setYears] = useState(10);
  const appreciation = 0.06;

  const annualRent = (price * yieldPct) / 100;
  const totalRent = annualRent * years;
  const futureValue = price * Math.pow(1 + appreciation, years);
  const totalReturn = totalRent + futureValue - price;

  return (
    <SiteLayout>
      <PageHero eyebrow="Investment" title="A measurable yield in a landmark address." image={images.exterior} />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary gold-rule">Why invest</p>
          <h2 className="mt-6 font-display text-4xl">Built for both lifestyle and yield.</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li>· 7–9% gross rental yields with managed letting available.</li>
            <li>· Quarterly investor reports with occupancy and net income.</li>
            <li>· Escrowed deposits and milestone-linked payments.</li>
            <li>· Title transferred on completion, with full legal support.</li>
            <li>· Repatriation support for diaspora investors.</li>
          </ul>
          <Link to="/book-visit" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">Book a consultation</Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
          <h3 className="font-display text-2xl">ROI calculator</h3>
          <div className="mt-6 space-y-5">
            <Field label={`Purchase price: ${fmt(price)}`}>
              <input type="range" min={145000} max={525000} step={5000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-[var(--gold)]" />
            </Field>
            <Field label={`Gross yield: ${yieldPct}%`}>
              <input type="range" min={5} max={12} step={0.5} value={yieldPct} onChange={(e) => setYieldPct(+e.target.value)} className="w-full accent-[var(--gold)]" />
            </Field>
            <Field label={`Hold period: ${years} years`}>
              <input type="range" min={3} max={20} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-[var(--gold)]" />
            </Field>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Annual rent</dt><dd className="font-display text-2xl">{fmt(annualRent)}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Cumulative rent</dt><dd className="font-display text-2xl">{fmt(totalRent)}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Future value</dt><dd className="font-display text-2xl">{fmt(futureValue)}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Total return</dt><dd className="font-display text-2xl text-primary">{fmt(totalReturn)}</dd></div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block"><span className="text-xs text-muted-foreground">{label}</span><div className="mt-1.5">{children}</div></label>
  );
}
