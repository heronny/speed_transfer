<script>
    import Carousel from "svelte-carousel/src/components/Carousel/Carousel.svelte";
    import starPng from '$lib/images/symbols/star.png';

    const comments = [
        {
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia numquam, tenetur.',
            owner: 'Murat Soysal',
        },
        {
            comment: 'Gördüğüm en iyi hizmet',
            owner: 'Harun Yüce',
        }
    ]

    let innerWidth = $state(0)
    let stars = 5;
</script>

<svelte:window bind:innerWidth/>

<h3 class="text-2xl text-white font-bold text-center mb-8 mx-4">Antalya'nın En İyi Transfer Şirketi!</h3>

<div class="px-2 text-white">
    <Carousel particlesToShow={innerWidth > 768 ? 2 : 1}>
        {#each comments as { comment, owner } (owner)}
            <div class="flex flex-col items-center justify-center gap-y-3 px-4 py-4 border-2 border-b-0 border-zinc-900">
                <p class="indent-4">
                    {comment}
                </p>
                <div class="flex">
                    {#each Array(stars) as _, star (star)}
                        <img src={starPng} alt="Star" class="block w-8 transition-transform hover:scale-125 hover:mx-1"/>
                    {/each}
                </div>
                <h4 class="font-bold self-end mt-1">{owner}</h4>
            </div>
        {/each}
    </Carousel>

    <div class="w-full flex justify-center mt-16 mb-6">
        <hr class="text-zinc-900 bg-zinc-900 border-zinc-900 w-3/4 h-[2px]"/>
    </div>
</div>