import { supabase } from '$lib/supabaseCient';

export async function load() {
  const { data } = await supabase.from("places").select().range(0, 11);
  return {
    places: data,
  };
}