import { createFileRoute, Link, useNavigate, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/site/Header";
import { BottomNav } from "@/components/site/BottomNav";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Home, Heart, CalendarCheck, Bell, User as UserIcon, Download, LogOut, Building2, MessageSquare, Settings } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Erica Residence" }] }),
  component: DashboardLayout,
});

const nav = [
  { to: "/dashboard", label: "Overview", icon: Home, exact: true },
  { to: "/dashboard", label: "Favorites", icon: Heart, hash: "favorites" },
  { to: "/dashboard", label: "Bookings", icon: CalendarCheck, hash: "bookings" },
  { to: "/dashboard", label: "Messages", icon: MessageSquare, hash: "messages" },
  { to: "/dashboard", label: "Notifications", icon: Bell, hash: "notifications" },
  { to: "/dashboard", label: "Profile", icon: UserIcon, hash: "profile" },
  { to: "/dashboard", label: "Settings", icon: Settings, hash: "settings" },
];

function DashboardLayout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/signin" });
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  const name = (user.user_metadata?.first_name as string) || user.email?.split("@")[0] || "there";

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Header />
      <div className="pt-20 flex-1 container-px mx-auto max-w-7xl py-8 md:py-12 grid lg:grid-cols-[260px,1fr] gap-8">
        <aside className="lg:sticky lg:top-28 self-start rounded-2xl border border-border bg-card p-4 hidden lg:block">
          <p className="px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground">Member area</p>
          <nav className="mt-1 space-y-0.5">
            {nav.map((n) => (
              <Link
                key={n.label}
                to="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary"
              >
                <n.icon className="size-4 text-primary" /> {n.label}
              </Link>
            ))}
            <button onClick={signOut} className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary text-left mt-4 border-t border-border pt-4">
              <LogOut className="size-4 text-primary" /> Sign out
            </button>
          </nav>
        </aside>

        <div className="space-y-6">
          <div className="rounded-2xl bg-foreground text-background p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Welcome back</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl capitalize">{name}.</h1>
            <p className="mt-3 text-background/75 max-w-md">Your favorites, bookings and downloads — all in one place.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Heart, label: "Saved residences", value: "0" },
              { icon: CalendarCheck, label: "Upcoming visits", value: "0" },
              { icon: Bell, label: "Unread notifications", value: "0" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <s.icon className="size-5 text-primary" />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                <p className="font-display text-3xl">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl">Recommended next steps</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between gap-4 rounded-lg p-3 hover:bg-secondary">
                <span className="flex items-center gap-3"><Building2 className="size-4 text-primary" /> Browse the latest residences</span>
                <Link to="/properties" className="text-primary text-xs font-medium">Open →</Link>
              </li>
              <li className="flex items-center justify-between gap-4 rounded-lg p-3 hover:bg-secondary">
                <span className="flex items-center gap-3"><CalendarCheck className="size-4 text-primary" /> Book a private viewing</span>
                <Link to="/book-visit" className="text-primary text-xs font-medium">Open →</Link>
              </li>
              <li className="flex items-center justify-between gap-4 rounded-lg p-3 hover:bg-secondary">
                <span className="flex items-center gap-3"><Download className="size-4 text-primary" /> Download the brochure</span>
                <Link to="/brochure" className="text-primary text-xs font-medium">Open →</Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </div>
      </div>
      <BottomNav />
      <FloatingActions />
    </div>
  );
}
