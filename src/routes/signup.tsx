import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [{ title: "Create account — Erica Residence" }],
  }),
  component: SignUp,
});

function SignUp() {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null); setMsg(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pw,
      options: {
        emailRedirectTo: window.location.origin,
        data: { first_name: first, last_name: last },
      },
    });
    setLoading(false);
    if (error) return setError(error.message);
    if (data.session) return navigate({ to: "/dashboard" });
    setMsg("Check your inbox to confirm your email, then sign in.");
  }

  async function onGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) return setError(String(result.error));
    if (result.redirected) return;
    navigate({ to: "/dashboard" });
  }

  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-md py-20 md:py-28">
        <h1 className="font-display text-4xl text-center">Create your account.</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">Save favorites, manage visits and track your interest.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input label="First name" value={first} onChange={(e) => setFirst(e.target.value)} required />
            <Input label="Last name" value={last} onChange={(e) => setLast(e.target.value)} required />
          </div>
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Password" type="password" minLength={8} value={pw} onChange={(e) => setPw(e.target.value)} required />
          {error && <p className="text-sm text-destructive">{error}</p>}
          {msg && <p className="text-sm text-primary">{msg}</p>}
          <button disabled={loading} className="w-full rounded-full bg-foreground text-background py-3 text-sm font-medium disabled:opacity-60">
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex-1 h-px bg-border" /> OR <span className="flex-1 h-px bg-border" />
        </div>
        <button onClick={onGoogle} className="w-full rounded-full border border-border py-3 text-sm font-medium hover:bg-secondary">
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/signin" className="text-primary font-medium">Sign in</Link>
        </p>
      </section>
    </SiteLayout>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input {...rest} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
