<script>
    import Places from "../Places.svelte";
    import Slider from "../Slider.svelte";

    let { data } = $props()
</script>

<Places places={data.places}/>