<script>
    import googleReview from '$lib/images/platforms/google-reviews.png?enhanced'
    import tripadvisor from '$lib/images/platforms/tripadvisor.png?enhanced'
    import youtube from '$lib/images/platforms/youtube.svg'
    import instagram from '$lib/images/platforms/instagram.svg'

</script>

<div class="flex flex-col items-center px-6 gap-y-2 my-8">
    <div class="flex justify-between items-center gap-x-6">
        <button class="flex-1 p-1" aria-label="Google Reviews">
            <enhanced:img src={googleReview} class="" alt="Google Review"/>
        </button>
        <button class="flex-1 p-1" aria-label="Tripadvisor">
            <enhanced:img src={tripadvisor} class="" alt="Tripadvisor"/>
        </button>
    </div>
    <div class="flex justify-between items-center gap-x-6">
        <button class="flex-1 p-1" aria-label="Google Reviews">
            <img src={youtube} class="" alt="Youtube"/>
        </button>
        <button class="flex-1 p-1" aria-label="Google Reviews">
            <img src={instagram} class="block flex-1" alt=Instagram/>
        </button>
    </div>
</div>