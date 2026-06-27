import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images, SITE } from "@/lib/site";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Erica Residence" },
      { name: "description", content: "Speak to the sales team or book a private visit to Erica Residence." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Speak to the sales team." subtitle="We respond to enquiries within one business day." image={images.livingWarm} />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 grid lg:grid-cols-[1fr,1.2fr] gap-10">
        <div className="space-y-6">
          {[
            { icon: MapPin, t: "Sales gallery", d: SITE.address },
            { icon: Phone, t: "Phone", d: SITE.phone, href: `tel:${SITE.phone}` },
            { icon: Mail, t: "Email", d: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MessageCircle, t: "WhatsApp", d: "Chat with the team", href: `https://wa.me/${SITE.whatsapp}` },
            { icon: Clock, t: "Hours", d: "Mon–Sat, 9:00 – 18:00" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary"><c.icon className="size-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</p>
                {c.href ? <a className="font-medium hover:text-primary" href={c.href}>{c.d}</a> : <p className="font-medium">{c.d}</p>}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-4"
        >
          <h2 className="font-display text-2xl">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="First name" required />
            <Input label="Last name" required />
          </div>
          <Input label="Email" type="email" required />
          <Input label="Phone" type="tel" />
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Interest</span>
            <select className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm">
              <option>General enquiry</option>
              <option>Book a viewing</option>
              <option>Investment</option>
              <option>Press</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea rows={5} required className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm" />
          </label>
          <button type="submit" className="w-full rounded-full bg-foreground text-background py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            {sent ? "Thank you — we'll be in touch." : "Send message"}
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
