import { supabase } from '$lib/supabaseCient';

export async function load() {
  const { data } = await supabase.from("places").select("name,price,link").range(0, 11);
  return {
    places: data,
  };
}