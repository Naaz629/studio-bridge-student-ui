import { createClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY
// Missing or malformed demo configuration must never prevent the local UI opening.
export const supabase = (() => {
  try {
    return url && key
      ? createClient(url, key, {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
          },
          global: {
            fetch: (input, init) =>
              fetch(input, {
                ...init,
                signal: init?.signal || AbortSignal.timeout(15000),
              }),
          },
        })
      : null
  } catch {
    return null
  }
})()
