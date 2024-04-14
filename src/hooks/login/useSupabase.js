import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPAURL, import.meta.env.VITE_SUPAAPI);

export function useSupabase() {
	return { supabase };
}
