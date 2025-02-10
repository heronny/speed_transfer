import { supabase } from '$lib/supabaseCient';

export async function load() {
  const { data } = await supabase.from("places").select();
  return {
    places: data,
  };
}