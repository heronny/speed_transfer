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


    const placeData = [
        {
            image: 'merkezantalya.png',
            name: 'MERKEZANTALYA',
            price: 35
        },
        {
            image: 'kundu.png',
            name: 'KUNDU',
            price: 35 
        },
        {
            image: 'konyaalti.png',
            name: 'KONYAALTI',
            price: 40
        },
        {
            image: 'belek.png',
            name: 'BELEK',
            price: 45
        },
        {
            image: 'colakli.png',
            name: 'ÇOLAKLI',
            price: 60
        },
        {
            image: 'evrenseki.png',
            name: 'EVRENSEKİ',
            price: 60
        },
    ]
</script>

<div class="flex flex-col items-center mt-5">
    <h2 class="text-2xl font-extrabold text-center tracking-wide text-gray-700 leading-7 mb-4">
        ANTALYA
        <span class="text-yellow-500">POPÜLER</span>
        BÖLGELER
    </h2>
    <div class="grid grid-cols-2 gap-x-2 gap-y-4 px-2">
        {#each placeData as {image, name, price}, i (image)}
            <div class="bg-white">
                <div class="w-full overflow-hidden relative">
                    <img
                        src={Object.keys(images).find(key => key === ("/src/lib/images/places/antalya/" + image))}
                        class="w-full transition duration-500 hover:scale-125 cursor-pointer brightness-75"
                        alt={name + 'TRANSFER'}
                    />
                    <div class="absolute right-2 bottom-1 text-white flex flex-col items-end cursor-default">
                        <span class="text-2xl font-extrabold">{price}&#8364;</span>
                        <span class="text-xs">Başlayan Fiyatlarla</span>
                    </div>
                </div>
                <h3 class="text-xs py-2 px-1">
                    <span class="font-bold">{name}</span> TRANSFER
                </h3>
            </div>
        {/each}
    </div>
    <button class="bg-[rgba(23,37,90,0.85)] text-xs text-white font-bold px-4 py-2 my-5 rounded-md hover:bg-[rgb(23,37,90)] transition-colors duration-200">TÜM BÖLGELER</button>
</div>