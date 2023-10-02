import { supabase } from "./supabaseClient";

export async function fetchHomeExperiments() {
  let { data: experiments, error } = await supabase
    .from('experiments')
    .select('*')
    .eq('priority', 2)
    .range(0,3);
    
  if (error || experiments === null) {
    return [];
  }
  return experiments;
}