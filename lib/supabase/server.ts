import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import {
  getSupabaseBrowserEnv,
  getSupabaseServiceEnv,
} from "@/lib/supabase/env";

export function createAnonServerSupabaseClient() {
  const env = getSupabaseBrowserEnv();

  if (!env) {
    return null;
  }

  return createClient<Database>(env.url, env.anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function createServiceSupabaseClient() {
  const env = getSupabaseServiceEnv();

  if (!env) {
    return null;
  }

  return createClient<Database>(env.url, env.serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
