import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Download } from "lucide-react";
import { images } from "@/lib/site";

export const Route = createFileRoute("/brochure")({
  head: () => ({
    meta: [
      { title: "Brochure — Erica Residence" },
      { name: "description", content: "Download the Erica Residence brochure." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="relative min-h-[60vh] grid place-items-center text-center container-px py-24">
        <img src={images.exterior} alt="" className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Brochure</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">The complete guide.</h1>
          <p className="mt-4 max-w-md mx-auto text-muted-foreground">Floor plans, finishes, payment plans and amenities — in one document.</p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium"
          >
            <Download className="size-4" /> Download PDF (8 MB)
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            Or <Link to="/contact" className="underline">request a printed copy</Link>.
          </p>
        </div>
      </section>
    </SiteLayout>
  ),
});
