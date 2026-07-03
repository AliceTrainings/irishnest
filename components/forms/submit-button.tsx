"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="min-h-12 w-full bg-forest px-5 text-sm font-semibold text-ivory transition hover:bg-forest-950 disabled:cursor-not-allowed disabled:opacity-65"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting" : children}
    </button>
  );
}
