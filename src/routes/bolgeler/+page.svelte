<script>
    import Places from "../Places.svelte";

    let { data } = $props()
</script>

<Places places={data.places}/>