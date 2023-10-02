import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY){
  supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
}
else {
  throw new Error('Supabase key or url not found');
}

export { supabase };