<script>
	import '../app.css';
	import Header from './Header.svelte';
    import Footer from './Footer.svelte';

	let { children, data } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer places={data.places}/>
</div>



<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-image: linear-gradient(to right, #000305 0%, #000 100%);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
