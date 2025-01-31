<script>
    import { fade } from "svelte/transition";

    const images = import.meta.glob(
		'$lib/images/places/antalya/*',
		{
			query: {
				enhanced: true
			}
		}
	);

    let { places, fromPage } = $props()
        console.log(places)
</script>

<div class="flex flex-col items-center mt-5">
    <h2 class="text-2xl font-extrabold text-center tracking-wide text-gray-700 leading-7 mb-4">
        ANTALYA
        <span class="text-yellow-500">POPÜLER</span>
        BÖLGELER
    </h2>
    <div class="grid grid-cols-2 gap-x-2 gap-y-4 px-2">
        {#each places as {image, name, price}, i (image)}
            <div class="bg-white">
                <div class="w-full overflow-hidden relative">
                    <img
                        src={Object.keys(images).find(key => key === ("/src/lib/images/places/antalya/" + image))}
                        class="w-full transition duration-500 hover:scale-125 cursor-pointer brightness-75"
                        alt={name + 'TRANSFER'}
                        loading="lazy"
                    />
                    <div class="absolute right-2 bottom-1 text-white flex flex-col items-end cursor-default">
                        <span class="text-2xl font-extrabold">{price}&#8378;</span>
                        <span class="text-xs">Başlayan Fiyatlarla</span>
                    </div>
                </div>
                <h3 class="text-xs py-2 px-1">
                    <span class="font-bold">{name}</span> TRANSFER
                </h3>
            </div>
        {/each}
    </div>
    {#if fromPage==true}
        <a href="/bolgeler" class="bg-[rgba(23,37,90,0.85)] block text-xs text-white font-bold px-4 py-2 my-5 rounded-md hover:bg-[rgb(23,37,90)] transition-colors duration-200">TÜM BÖLGELER</a>
    {/if}
</div>