import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images } from "@/lib/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Erica Residence" },
      { name: "description", content: "Frequently asked questions about purchasing, payment plans, handover and investment at Erica Residence." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: FaqsPage,
});

const sections = [
  {
    title: "Buying",
    items: [
      { q: "How do I reserve a residence?", a: "A 5% reservation deposit holds your unit for 14 days while the sale and purchase agreement is finalised." },
      { q: "Is the deposit refundable?", a: "Reservation deposits are refundable for 7 days. After signing the SPA, deposits are non-refundable except where the developer fails to deliver." },
    ],
  },
  {
    title: "Payment plans",
    items: [
      { q: "What plans are available?", a: "Outright (5% discount), 12, 24 and 36-month structured plans starting with a 20% deposit." },
      { q: "Are mortgages supported?", a: "Yes. We work with four mainstream banks; introductions and rate sheets are available on request." },
    ],
  },
  {
    title: "Handover & ownership",
    items: [
      { q: "When does handover happen?", a: "Phase one is move-in ready. Phase two completes within the calendar year." },
      { q: "When is title issued?", a: "Title is transferred on completion and full settlement of the purchase price." },
    ],
  },
];

function FaqsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQs" title="Frequently asked questions." image={images.hallway} />
      <section className="container-px mx-auto max-w-3xl py-16 md:py-24 space-y-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-3xl gold-rule">{s.title}</h2>
            <div className="mt-6 space-y-3">
              {s.items.map((i) => (
                <details key={i.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-soft">
                  <summary className="flex items-center justify-between cursor-pointer font-medium list-none">
                    {i.q}
                    <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
