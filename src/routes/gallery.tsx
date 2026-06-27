import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { galleryImages, images } from "@/lib/site";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Erica Residence" },
      { name: "description", content: "Interiors, bathrooms, bedrooms and exterior — a curated gallery of Erica Residence." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const cats = ["All", "Exterior", "Interiors", "Bedrooms", "Bathrooms"] as const;

function GalleryPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = cat === "All" ? galleryImages : galleryImages.filter((g) => g.cat === cat);

  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Inside Erica Residence." image={images.livingBright} />
      <section className="container-px mx-auto max-w-7xl py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                cat === c ? "bg-foreground text-background border-foreground" : "border-border hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {list.map((g, i) => (
            <figure key={g.src + i} className={`overflow-hidden rounded-xl ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="size-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/book-visit" className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
            See it in person
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
