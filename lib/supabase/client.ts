import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import { getSupabaseBrowserEnv } from "@/lib/supabase/env";

export function createBrowserSupabaseClient() {
  const env = getSupabaseBrowserEnv();

  if (!env) {
    return null;
  }

  return createClient<Database>(env.url, env.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}
