import { Link } from "@tanstack/react-router";
import { Bed, Bath, Square, MapPin, Heart, ArrowUpRight } from "lucide-react";
import type { Property } from "@/lib/properties";

const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={p.cover}
          alt={p.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-widest">
          {p.status}
        </span>
        <button
          className="absolute top-3 right-3 size-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:text-primary"
          aria-label="Save to favorites"
        >
          <Heart className="size-4" />
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-primary">{p.type} · Floor {p.floor}</p>
        <h3 className="mt-2 text-xl font-display leading-snug">{p.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5" /> {p.view}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Bed className="size-4" />{p.bedrooms} bed</span>
          <span className="inline-flex items-center gap-1.5"><Bath className="size-4" />{p.bathrooms} bath</span>
          <span className="inline-flex items-center gap-1.5"><Square className="size-4" />{p.areaSqm} m²</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">From</p>
            <p className="text-2xl font-display text-foreground">{fmt(p.price)}</p>
          </div>
          <Link
            to="/property/$id"
            params={{ id: p.id }}
            className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
