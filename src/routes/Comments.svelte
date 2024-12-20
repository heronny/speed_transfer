<script>
    import Carousel from "svelte-carousel/src/components/Carousel/Carousel.svelte";
    import fiveStar from '$lib/images/symbols/fivestar.png';

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

</script>

<h3 class="text-2xl font-bold text-center mb-3">Antalya'nın En İyi Transfer Şirketi!</h3>

<Carousel>
    {#each comments as { comment, owner } (owner)}
        <div class="flex flex-col items-center justify-center gap-y-3 px-4 py-2 border">
            <p class="indent-4">
                {comment}
            </p>
            <img src={fiveStar} alt="Five Star" class="block w-3/4"/>
            <h4 class="font-bold self-end mt-1">{owner}</h4>
        </div>
    {/each}
</Carousel>