<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import logo from '$lib/images/logo-text.png?enhanced';
	import menu from '$lib/images/symbols/menu.svg';
    import Submenu from './Submenu.svelte';

	let menuOn = $state(false);

	const links = [
    	{
    	    "href": "/",
    	    "pageName": "Anasayfa"
    	},
    	{
    	    "href": "/places",
    	    "pageName": "Tüm Bölgeler"
    	},
    	{
    	    "href": "/services",
    	    "pageName": "Hizmetler",
    	    "sublinks": [
    	        {
    	            "href": "/tours",
    	            "pageName": "Turlar"
    	        },
    	        {
    	            "href": "/chauffeur-driven-car-rental",
    	            "pageName": "Şoförlü Araç Kiralama"
    	        },
    	        {
    	            "href": "/vip-transfer",
    	            "pageName": "Vip Transfer"
    	        },
    	        {
    	            "href": "/congress-and-fair-transportation",
    	            "pageName": "Kongre ve Fuar Taşımacılığı"
    	        },
    	        {
    	            "href": "/tour-transportation",
    	            "pageName": "Tur Taşıma"
    	        }
    	    ]
    	},
    	{
    	    "href": "/corporate",
    	    "pageName": "Kurumsal",
    	    "sublinks": [
    	        {
    	            "href": "/about-us",
    	            "pageName": "Hakkımızda"
    	        },
    	        {
    	            "href": "/gallery",
    	            "pageName": "Galeri"
    	        },
    	        {
    	            "href": "/customer-reviews",
    	            "pageName": "Müşteri Yorumları"
    	        },
    	        {
    	            "href": "/blog",
    	            "pageName": "Blog"
    	        }
    	    ]
    	},
    	{
    	    "href": "/faq",
    	    "pageName": "S.S.S"
    	},
    	{
    	    "href": "/contact",
    	    "pageName": "İletişim"
    	},
    	{
    	    "href": "/language",
    	    "pageName": "Türkçe"
    	},
    	{
    	    "href": "/unit",
    	    "pageName": "Euro"
    	}
	]
</script>

<header class="flex flex-col bg-[rgb(0,0,0)] border-b border-zinc-900 py-2 text-white">
	<div class="flex flex-row justify-between items-center px-5 py-2">
		<a href="/" class="w-40 block" aria-label="Speed Transfer">
			<enhanced:img src={logo} alt="Speed Transfer"/>
		</a>

		<button class="w-12 h-12 ml-12 hover:scale-110 transition-transform" onclick={() => menuOn = !menuOn}>
			<img src={menu} alt="Menu" class="transition-transform duration-300 {menuOn ? 'rotate-90' : ''}"/>
		</button>
	</div>

	{#if menuOn}
	<nav transition:slide={{ delay: 50, duration: 300, axis: 'y', }} class="bg-zinc-950">
		<ul class="flex flex-col mt-1 tracking-wider font-light">
			{#each links as link}
				{#if typeof link.sublinks !== "undefined"}
					<Submenu headLink={link.pageName} sublinks={link.sublinks}/>
				{:else}
					<li class="border-b border-zinc-900" aria-current={$page.url.pathname === link.href ? 'page' : undefined}>
						<a href={link.href} class="block w-full py-2 pl-3 hover:brightness-95 hover:text-red-600 duration-200">{ link.pageName }</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
	{/if}
</header>
