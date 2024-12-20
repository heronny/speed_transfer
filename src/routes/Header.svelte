<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import menu from '$lib/images/symbols/menu.svg';
    import Submenu from './Submenu.svelte';

	let menuOn = false;

	const links = [
		{
			"href": "/",
			"pageName": "Anasayfa"
		},
		{
			"href": "/bolgeler",
			"pageName": "Tüm Bölgeler"
		},
		{
			"href": "/hizmetler",
			"pageName": "Hizmetler",
			"sublinks": [
				{
					"href": "/turlar",
					"pageName": "Turlar"
				},
				{
					"href": "/soforlu-arac-kiralama",
					"pageName": "Şoförlü Araç Kiralama"
				},
				{
					"href": "/vip-transfer",
					"pageName": "Vip Transfer"
				},
				{
					"href": "/kongre-ve-fuar-tasimaciliği",
					"pageName": "Kongre ve Fuar Taşımacılığı"
				},
				{
					"href": "/tur-tasima",
					"pageName": "Tur Taşıma"
				},
			]
		},
		{
			"href": "/kurumsal",
			"pageName": "Kurumsal",
			"sublinks": [
				{
					"href": "/hakkimizda",
					"pageName": "Hakkımızda"
				},
				{
					"href": "/galeri",
					"pageName": "Galeri"
				},
				{
					"href": "/vip-transfer",
					"pageName": "Müşteri Yorumları"
				},
				{
					"href": "/kongre-ve-fuar-tasimaciliği",
					"pageName": "Blog"
				},
			]
		},
		{
			"href": "/sss",
			"pageName": "S.S.S"
		},
		{
			"href": "/iletisim",
			"pageName": "İletişim"
		},
		{
			"href": "/dil",
			"pageName": "Türkçe"
		},
		{
			"href": "/birim",
			"pageName": "Euro"
		},
	]
</script>

<header class="flex flex-col bg-[#00000099]">
	<div class="flex flex-row justify-between align-middle px-5 py-2">
		<h1 class="text-center text-white text-2xl font-bold">Speed Transfer</h1>

		<button class="w-9 h-9 ml-12" on:click={() => menuOn = !menuOn}>
			<img src={menu} alt="Menu" />
		</button>
	</div>

	{#if menuOn}
	<nav transition:slide={{ delay: 50, duration: 300, axis: 'y', }} class="bg-white">
		<ul class="flex flex-col mt-1 tracking-wider font-light">
			{#each links as link}
				{#if typeof link.sublinks !== "undefined"}
					<Submenu headLink={link.pageName} sublinks={link.sublinks}/>
				{:else}
					<li aria-current={$page.url.pathname === link.href ? 'page' : undefined}>
						<a href={link.href} class="block w-full py-2 pl-3 bg-white hover:brightness-95 hover:text-red-600 duration-200">{ link.pageName }</a>
					</li>
				{/if}
				<hr />
			{/each}
		</ul>
	</nav>
	{/if}
</header>
