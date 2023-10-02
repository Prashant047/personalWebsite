import { supabase } from "./supabaseClient";

export async function fetchExperiments() {
  let { data: experiments, error } = await supabase
    .from('experiments')
    .select('*')
    .order('created_at',{ascending: false});

    
  if (error || experiments === null) {
    return [];
  }
  return experiments;
}