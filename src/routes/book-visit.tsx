import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images, SITE } from "@/lib/site";
import { CalendarCheck, Check } from "lucide-react";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/book-visit")({
  head: () => ({
    meta: [
      { title: "Book a Visit — Erica Residence" },
      { name: "description", content: "Book a 45-minute private walkthrough of Erica Residence with the lead agent." },
      { property: "og:url", content: "/book-visit" },
    ],
    links: [{ rel: "canonical", href: "/book-visit" }],
  }),
  component: BookVisit,
});

function BookVisit() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <SiteLayout>
        <section className="min-h-[60vh] flex items-center container-px mx-auto max-w-2xl text-center py-24">
          <div className="mx-auto">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-7" /></span>
            <h1 className="mt-6 font-display text-4xl md:text-5xl">Visit requested.</h1>
            <p className="mt-4 text-muted-foreground">We'll confirm your slot within one business day at <strong>{SITE.email}</strong>.</p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero eyebrow="Visit" title="Book a private walkthrough." subtitle="45 minutes with the lead agent. Refreshments served." image={images.exterior} />
      <section className="container-px mx-auto max-w-3xl py-16 md:py-24">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-5"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary"><CalendarCheck className="size-5" /></span>
            <h2 className="font-display text-2xl">Your details</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="First name" required />
            <Input label="Last name" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Email" type="email" required />
            <Input label="Phone" type="tel" required />
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Residence of interest</span>
            <select className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm">
              <option>Any / Open to recommendations</option>
              {properties.map((p) => <option key={p.id}>{p.title}</option>)}
            </select>
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Preferred date" type="date" required />
            <Input label="Preferred time" type="time" required />
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Notes (optional)</span>
            <textarea rows={4} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm" />
          </label>
          <button type="submit" className="w-full rounded-full bg-foreground text-background py-3.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground">
            Request a visit
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input {...rest} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
