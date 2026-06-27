import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images, SITE } from "@/lib/site";
import { MapPin, GraduationCap, Hospital, ShoppingBag, Plane } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Erica Residence" },
      { name: "description", content: `Erica Residence sits in the heart of ${SITE.address}, with schools, hospitals, shopping and the airport within easy reach.` },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const nearby = [
  { icon: GraduationCap, t: "Schools", items: ["International School of Kenya — 8 min", "Hillcrest International — 12 min", "Brookhouse — 15 min"] },
  { icon: Hospital, t: "Hospitals", items: ["The Nairobi Hospital — 6 min", "Aga Khan Hospital — 10 min"] },
  { icon: ShoppingBag, t: "Shopping", items: ["Yaya Centre — 4 min", "Junction Mall — 7 min", "Westgate — 12 min"] },
  { icon: Plane, t: "Travel", items: ["JKIA International Airport — 25 min", "Wilson Airport — 10 min"] },
];

function LocationPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Location" title="In the centre of everything that matters." image={images.exterior} />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10">
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[16/10]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Kilimani,Nairobi&output=embed"
              className="size-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Address</p>
            <p className="mt-3 font-display text-2xl flex items-start gap-2"><MapPin className="size-5 mt-1.5 text-primary" />{SITE.address}</p>
            <p className="mt-4 text-muted-foreground">A connected, leafy address in one of Nairobi's most established neighbourhoods.</p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {nearby.map((n) => (
            <div key={n.t} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary"><n.icon className="size-5" /></span>
              <h3 className="mt-4 font-display text-xl">{n.t}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">{n.items.map((i) => <li key={i}>· {i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
