<script>
    import googleReview from '$lib/images/platforms/google-reviews.png?enhanced'
    import tripadvisor from '$lib/images/platforms/tripadvisor.png?enhanced'
    import youtube from '$lib/images/platforms/youtube.svg'
    import instagram from '$lib/images/platforms/instagram.svg'

</script>

<div class="flex flex-col items-center px-10 gap-y-1 my-12">
    <div class="flex justify-between items-center gap-x-[calc(100%/10)]">
        <button class="flex-1 p-1 hover:scale-105 transition-transform" aria-label="Google Reviews">
            <enhanced:img src={googleReview} class=" w-48" alt="Google Review"/>
        </button>
        <button class="flex-1 p-1 hover:scale-105 transition-transform" aria-label="Tripadvisor">
            <enhanced:img src={tripadvisor} class=" w-48" alt="Tripadvisor"/>
        </button>
    </div>
    <div class="flex justify-between items-center gap-x-[calc(100%/10)]">
        <button class="flex-1 p-1 hover:scale-105 transition-transform" aria-label="Google Reviews">
            <img src={youtube} class="w-44" alt="Youtube"/>
        </button>
        <button class="flex-1 p-1 hover:scale-105 transition-transform" aria-label="Google Reviews">
            <img src={instagram} class="block flex-1 w-44" alt=Instagram/>
        </button>
    </div>
</div>