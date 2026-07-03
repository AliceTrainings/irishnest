"use client";

import { useState } from "react";
import { LogIn } from "lucide-react";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type LoginState = "idle" | "submitting" | "ready" | "error";

export function AdminLoginForm() {
  const [state, setState] = useState<LoginState>("idle");
  const [message, setMessage] = useState(
    "Use a Supabase Auth admin account after bootstrapping public.admin_users.",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setState("error");
      setMessage(
        "Supabase env vars are not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      );
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setState("error");
      setMessage(error.message);
      return;
    }

    setState("ready");
    setMessage("Signed in. Admin role checks are enforced by Supabase RLS.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-lg border border-forest/10 bg-warm-white p-5 shadow-sm"
    >
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-forest">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none transition focus:border-forest"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-forest">Password</span>
          <input
            required
            minLength={8}
            type="password"
            name="password"
            autoComplete="current-password"
            className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none transition focus:border-forest"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-ivory transition hover:bg-forest-950 disabled:cursor-not-allowed disabled:opacity-65"
      >
        <LogIn aria-hidden="true" className="size-4" />
        {state === "submitting" ? "Checking account" : "Sign in"}
      </button>
      <p
        className="mt-4 text-sm leading-6 text-slate-950/62"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
