<script>
    import Slider from "./Slider.svelte";
    import Reservation from "./Reservation.svelte";
    import Advantages from "./Advantages.svelte";
    import CustomerSatisfaction from "./CustomerSatisfaction.svelte";
    import Comments from "./Comments.svelte";
    import Places from "./Places.svelte";

    let { data } = $props();
</script>

<Slider />

<div class="w-full flex flex-col items-center">
    <div class="w-full md:w-11/12 lg:h-5/6">
        <Reservation />
        
        <Advantages />
        
        <CustomerSatisfaction />
        
        <Comments />
        
        <Places places={data.places} fromPage={true}/>
    </div>
</div>
