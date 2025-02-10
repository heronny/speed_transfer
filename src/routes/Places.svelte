<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    let { places, fromPage = false } = $props();
    const ext = ".png";
    const images = import.meta.glob('$lib/images/places/antalya/*', { query: { enhanced: true } });

    // Reaktif state'ler
    let imageUrls = $state({});
    let loadedImages = $state(new Set());

    // Resim URL'lerini hazırla
    $effect(() => {
        for (const key of Object.keys(images)) {
            const imageName = key.split('/').pop();
            imageUrls[imageName] = key;
        }
    });

    // Animasyon tetikleme mekanizması
    const loadImage = (imgElement, src) => {
        imgElement.src = src;
        imgElement.onload = () => {
            loadedImages.add(src); // Resim yüklendiğinde state'i güncelle
            imgElement.style.opacity = 1; // CSS transition için
        };
    };

    // Intersection Observer
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    if (src && !loadedImages.has(src)) {
                        loadImage(img, src);
                        observer.unobserve(img);
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.lazy-image').forEach(img => observer.observe(img));
    });
</script>

<div class="flex flex-col items-center mt-6 mb-3 sm:px-3 ">
    <h2 class="text-2xl font-extrabold text-center tracking-wide text-white leading-7 mb-4">
        ANTALYA
        <span class="text-yellow-500">POPÜLER</span>
        BÖLGELER
    </h2>
    
    <div class="grid grid-cols-2 gap-x-2 gap-y-4 px-2 md:grid-cols-3">
        {#each places as {link, name, price}}
            {#key link}  
                <a class="bg-zinc-900 block rounded-t-md" href={'places/' + link} transition:fade={{ duration: 800 }}>
                    <div class="w-full overflow-hidden relative rounded-t-md">
                        <img
                            data-src={imageUrls[link + ext]}
                            class="lazy-image w-full duration-500 hover:scale-125 cursor-pointer brightness-75 opacity-0"
                            alt={name + ' TRANSFER'}
                        />
                        <div class="absolute right-2 bottom-1 text-white flex flex-col items-end cursor-default">
                            <span class="text-2xl font-extrabold">{price}&#8378;</span>
                            <span class="text-xs">Başlayan Fiyatlarla</span>
                        </div>
                    </div>
                    <h3 class="text-xs py-2 px-1 text-white">
                        <span class="font-bold">{name}</span> TRANSFER
                    </h3>
                </a>
            {/key}
        {/each}
    </div>

    {#if fromPage}
        <a href="/places" class="bg-gradient-to-r from-[#ff5858] to-[#f09819] block text-xs text-white font-bold px-4 py-3 my-5 rounded-md transition-opacity hover:opacity-80  duration-200">
            TÜM BÖLGELER
        </a>
    {/if}
</div>

<style>
    .lazy-image {
        opacity: 0;
        transition: opacity 0.8s ease-in-out, transform 0.5s ease-in-out;
    }
</style>