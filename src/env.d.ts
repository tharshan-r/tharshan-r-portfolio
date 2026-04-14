declare namespace NodeJS {
  interface ProcessEnv {
    VITE_SUPABASE_PROJECT_ID?: string;
    VITE_SUPABASE_PUBLISHABLE_KEY?: string;
    VITE_SUPABASE_URL?: string;
  }
}
