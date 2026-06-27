import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Erica Residence" },
      { name: "description", content: "News, construction updates, buying guides and investment insights." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { slug: "designing-for-light", title: "Designing for light, not for likes", excerpt: "Why we obsess over orientation, glazing and window sills.", img: images.livingBright, cat: "Design" },
  { slug: "phase-one-complete", title: "Phase one is complete — what comes next", excerpt: "A tour of the finished tower and what to expect from phase two.", img: images.exterior, cat: "Construction" },
  { slug: "diaspora-buying-guide", title: "A buying guide for diaspora investors", excerpt: "From reservation to title transfer — what remote buyers should know.", img: images.loungeChester, cat: "Investment" },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Journal" title="Stories from the residence." image={images.bedroomGreen} />
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog" className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-primary">{p.cat}</p>
              <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
