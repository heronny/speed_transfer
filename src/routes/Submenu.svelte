<script>
    import { page } from "$app/stores";
    import { slide } from 'svelte/transition';

    let { headLink, sublinks } = $props();

    let menuOn = $state(false);
</script>

<li class="block w-full py-2 pl-2 bg-white hover:brightness-95 hover:text-red-600 duration-200 {menuOn ? 'brightness-95 text-red-600' : ''}">
    <button class="w-full text-left" onclick={() => menuOn = !menuOn}>{headLink}</button>
</li>
{#if menuOn}
    <ul class="pl-4 py-1" transition:slide={{ delay: 50, duration: 100, axis: 'y', }}>
        {#each sublinks as sublink}
            <li aria-current={$page.url.pathname === sublink.href ? 'page' : undefined} class="border-l-2">
                <a href={sublink.href} class="block w-full py-1 text-sm pl-3 bg-white hover:brightness-95 hover:text-red-600 duration-200">{ sublink.pageName }</a>
            </li>
        {/each}
    </ul>
{/if}