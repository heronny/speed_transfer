import { supabase } from '$lib/supabaseCient';

export async function load({ url }) {
    const vehicles = await supabase.from("vehicles").select();

    let whereBy = url.searchParams.get('where-by') === 'Antalya Havalimanı';
    let whereTo = url.searchParams.get('where-to') === 'Antalya Havalimanı';

    let price;
    if (whereBy) {
        price = (await supabase.from("places").select("price").eq('name', url.searchParams.get('where-to').toUpperCase())).data[0]?.price;
    } else if (whereTo) {
        price = (await supabase.from("places").select("price").eq('name', url.searchParams.get('where-by').toUpperCase())).data[0]?.price;
    }


    return {
        vehicles: vehicles,
        price: price ?? 0,
    };
}