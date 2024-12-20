<script>
    import { blur, scale, slide } from 'svelte/transition';
    import sliderLeft from '$lib/images/symbols/slider-left.svg'
    import sliderRight from '$lib/images/symbols/slider-right.svg'
    import Carousel from 'svelte-carousel';

    let carousel;

    const sliderImages = import.meta.glob(
		'$lib/images/slider/*',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
    
    /*let sliderLength = Object.entries(sliderImages).length;
    let currentSlide = $state(0);

    $effect(() => {
        const interval = setInterval(() => {
            currentSlide++;
            if (currentSlide == sliderLength) currentSlide = 0;
        }, 5000);
    
        return () => clearInterval(interval);
    }) ; 

    const previousImg = () => {
        currentSlide--;
        if (currentSlide < 0) currentSlide = sliderLength - 1;
    }

    const nextImg = () => {
        currentSlide++;
        if (currentSlide == sliderLength) currentSlide = 0;
    }
        */

</script>

<Carousel
    let:loaded
    let:showPrevPage
    autoplay
    autoplayDuration={3000}
    arrows={false}
>
    {#each Object.entries(sliderImages) as [_path, module], i (_path)}
        <div class="w-full">
            {#if loaded.includes(i)}
                <enhanced:img src={module.default} alt="Slider" class="w-full" />
            {/if}
        </div>
    {/each}
</Carousel>



