import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-40 right-4 bottom-24 md:bottom-6 flex flex-col gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "size-11 rounded-full bg-card border border-border shadow-soft flex items-center justify-center transition-all",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="size-5" />
      </button>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="size-13 inline-flex items-center justify-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-elegant hover:scale-105 transition-transform"
        style={{ width: "3.25rem", height: "3.25rem" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
