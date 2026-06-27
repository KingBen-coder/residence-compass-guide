import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/properties";
import { images } from "@/lib/site";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Residences — Erica Residence" },
      { name: "description", content: "Browse penthouses, suites and family residences at Erica Residence. Filter by bedrooms, type and price." },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [type, setType] = useState<string>("All");
  const [beds, setBeds] = useState<string>("Any");
  const [sort, setSort] = useState<string>("featured");

  const filtered = useMemo(() => {
    let list = [...properties];
    if (type !== "All") list = list.filter((p) => p.type === type);
    if (beds !== "Any") list = list.filter((p) => p.bedrooms === Number(beds));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "area") list.sort((a, b) => b.areaSqm - a.areaSqm);
    return list;
  }, [type, beds, sort]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Collection"
        title="Find your residence."
        subtitle="Six distinct floor plans, from 1-bed pied-à-terres to garden duplexes."
        image={images.livingSheer}
      />
      <section className="container-px mx-auto max-w-7xl py-12 md:py-16">
        <div className="flex flex-wrap gap-3 items-center justify-between border-b border-border pb-6">
          <div className="flex flex-wrap gap-3">
            <Select label="Type" value={type} onChange={setType} options={["All", "Apartment", "Penthouse", "Studio", "Duplex"]} />
            <Select label="Bedrooms" value={beds} onChange={setBeds} options={["Any", "1", "2", "3"]} />
          </div>
          <Select label="Sort" value={sort} onChange={setSort} options={[
            { value: "featured", label: "Featured" },
            { value: "price-asc", label: "Price: Low → High" },
            { value: "price-desc", label: "Price: High → Low" },
            { value: "area", label: "Largest first" },
          ]} />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{filtered.length} residence{filtered.length === 1 ? "" : "s"} matching your filters</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

type Opt = string | { value: string; label: string };
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: Opt[] }) {
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm">
      <span className="text-muted-foreground text-xs uppercase tracking-widest">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none font-medium pr-1"
      >
        {options.map((o) => {
          const v = typeof o === "string" ? o : o.value;
          const l = typeof o === "string" ? o : o.label;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </label>
  );
}
