<script>
    import { page } from "$app/stores";
    import { slide } from 'svelte/transition';

    let { headLink, sublinks } = $props();

    let menuOn = $state(false);
</script>

<li class="block w-full py-2 pl-2 hover:brightness-95 border-zinc-900 hover:text-red-600 duration-200 {menuOn ? 'brightness-95 text-red-600' : 'border-b'}">
    <button class="w-full text-left" onclick={() => menuOn = !menuOn}>{headLink}</button>
</li>
{#if menuOn}
    <ul class="pl-4 py-1" transition:slide={{ delay: 50, duration: 100, axis: 'y', }}>
        {#each sublinks as sublink}
            <li aria-current={$page.url.pathname === sublink.href ? 'page' : undefined} class="border-l-2 border-zinc-900">
                <a href={sublink.href} class="block w-full py-1 text-sm pl-3 hover:brightness-95 hover:text-red-600 duration-200" onclick={() => menuOn = false}>{ sublink.pageName }</a>
            </li>
        {/each}
    </ul>
{/if}