<script>
	let { children } = $props();
</script>


<div class="w-full flex justify-center">
	<div class="md:w-[768px] lg:w-[1024px]">
        {@render children()}
    </div>
</div>
