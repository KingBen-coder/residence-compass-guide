import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Erica Residence" },
      { name: "description", content: "Our story, mission and the team behind Erica Residence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About" title="Built to be lived in for decades." subtitle="A practice of architecture, hospitality and craft." image={images.exterior} />

      <section className="container-px mx-auto max-w-4xl py-16 md:py-24 prose prose-stone">
        <h2 className="font-display text-3xl md:text-4xl">Our story</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Erica Residence began with a simple brief — design a building you would want to come home to every day for thirty years. Not a trend piece, not a billboard project. A quiet, considered tower with the kind of light, proportion and craft you can feel before you've crossed the threshold.
        </p>
        <h2 className="mt-12 font-display text-3xl">Mission</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          To deliver residences finished to a private-client standard, with the operational rigour of a five-star hotel and the transparency a serious investor requires.
        </p>
        <h2 className="mt-12 font-display text-3xl">Values</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>· Quiet luxury, never loud branding.</li>
          <li>· Transparent pricing, on-time delivery.</li>
          <li>· Materials chosen for the long view.</li>
          <li>· A residents-first culture.</li>
        </ul>
      </section>

      <section className="bg-foreground text-background py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">Meet us in person.</h2>
          <p className="mt-4 text-background/75">Tour the showroom or book a private walkthrough with the lead agent.</p>
          <Link to="/book-visit" className="mt-8 inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">Book a visit</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
