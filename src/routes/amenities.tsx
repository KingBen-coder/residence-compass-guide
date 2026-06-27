import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images } from "@/lib/site";
import { Waves, Dumbbell, Trees, Wifi, Car, Coffee, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Erica Residence" },
      { name: "description", content: "Resident-only pool, gym, lounge, gardens and concierge service." },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

const list = [
  { icon: Waves, t: "Heated lap pool", d: "25 metre indoor pool, open dawn until late." },
  { icon: Dumbbell, t: "Members-only gym", d: "Strength and cardio equipment, personal trainer on request." },
  { icon: Trees, t: "Landscaped gardens", d: "Mature trees and a residents' lawn." },
  { icon: Coffee, t: "Resident lounge", d: "Bookable lounge for meetings, dining and quiet work." },
  { icon: Car, t: "Secure parking", d: "Underground parking with electric charging." },
  { icon: ShieldCheck, t: "24/7 security", d: "Manned reception, CCTV, key-fob access." },
  { icon: Wifi, t: "Fibre throughout", d: "Symmetric high-speed fibre in every residence." },
  { icon: Sparkles, t: "Concierge", d: "From parcel handling to restaurant bookings." },
];

function AmenitiesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Amenities" title="Resident-only, every day." image={images.balcony} />
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><a.icon className="size-5" /></span>
              <h3 className="mt-4 font-display text-xl">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
