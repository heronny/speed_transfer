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

<Reservation />

<Advantages />

<CustomerSatisfaction />

<Comments />

<Places places={data.places} fromPage={true}/>
