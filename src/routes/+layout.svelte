<script>
	import '../app.css';
	import Header from './Header.svelte';
    import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>



<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #f1f1f1;
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
