<script>
    import direction from '$lib/images/symbols/direction.svg';
    import car from '$lib/images/animations/car.webm'
    import wifi from '$lib/images/symbols/wifi.svg';
    import electric from '$lib/images/symbols/electric.svg';
    import drink from '$lib/images/symbols/drink.svg';
    import welcome from '$lib/images/symbols/welcome.svg';
    import person from '$lib/images/symbols/person.svg';
    import luggage from '$lib/images/symbols/luggage.svg';
    import wp from '$lib/images/platforms/whatsapp-black.svg'

    let { data } = $props();
    let vehicles = data.vehicles.data;

    const images = import.meta.glob('$lib/images/vehicles/*', 
    { 
        eager: true, 
        query: 
            { 
                enhanced: true 
            } 
    });

    import { page } from '$app/stores';
    let whereBy = $page.url.searchParams.get('where-by');
    let whereTo = $page.url.searchParams.get('where-to');
    console.log(data.price)
</script>

<div class="w-full flex flex-col items-center">
    <div class="w-3/4 flex gap-x-4 items-center justify-center bg-[#FFD700] rounded-b-full box-border py-1 px-20">
        <span class=" font-bold">{whereBy}</span>
        <img src={direction} alt="Direction" class="w-6 block">
        <span class=" font-bold">{whereTo}</span>
    </div>

    <video autoplay loop class="w-32">
        <source src={car} type="video/webm"/>
    </video>
</div>

<div class="w-full flex flex-col items-center gap-y-4 my-3">
    {#each vehicles as vehicle (vehicle.id)}
        <div class="bg-zinc-950 w-11/12 flex flex-col items-center rounded-lg sm:py-4 sm:flex-row sm:justify-between sm:w-[620px]">
            <div class="sm:flex flex-row gap-x-1">
                <div class="w-52 mt-3">
                    <enhanced:img
                        src={
                            (Object.entries(images).find(([ path, module], i) => path.split('/')[path.split('/').length - 1] == vehicle.img_url))[1].default
                        }
                        alt={vehicle.model} class="w-full rounded-lg"
                    />
                </div>
                <div class="mt-1 border-r-zinc-900 sm:border-r sm:pr-4 sm:w-60">
                    <h3 class="text-center text-white text-2xl font-bold mb-2">{vehicle.model}</h3>
                    <div class="flex justify-center gap-x-6 bg-zinc-900 py-2 rounded-full sm:mt-3 sm:px-10">
                        <img src={wifi} alt="Wi-fi" class="block w-6"/>
                        <img src={electric} alt="220V Electric" class="block w-6"/>
                        <img src={drink} alt="Drinking" class="block w-6"/>
                        <img src={welcome} alt="Welcome" class="block w-6"/>
                    </div>
                    <div class="mt-3 text-sm text-zinc-200 flex items-center justify-between gap-x-3">
                        <div class="flex gap-x-1">
                            <img src={person} alt="Person Limit" class="block w-5 "/>
                            <span class="block">{vehicle.person_limit} kişiye kadar </span>
                        </div>
                        <div class="flex gap-x-1">
                            <img src={luggage} alt="Luggage Limit" class="block w-5 "/>
                            <span class="block">{vehicle.luggage_limit} adet bagaj</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 mb-2 sm:my-0 sm:flex sm:flex-col sm:w-full sm:items-center">
                <div class="text-4xl text-white font-bold">
                    &euro;
                    <span class="-ml-2 text-2x font-semibold">{data.price || ''}</span>
                </div>
                <span class="text-zinc-300 text-xs">*Başlayan fiyatlarla</span>
                <a href="https://www.whatsapp.com" class="px-4 py-1 rounded-full bg-gradient-to-r from-lime-400 to-lime-500 flex justify-between gap-x-2 mt-3 transition-all hover:opacity-60 hover:scale-105 mb-3 sm:mb-0">
                    <img src={wp} alt="" class="w-5">
                    <span class="font-bold">Danışın</span>
                </a>
            </div>
        </div>
    {/each}
</div>



