<script>
    import phone from '$lib/images/symbols/phone.svg';
    import mail from '$lib/images/symbols/mail.svg';
    import location from '$lib/images/symbols/location.svg';

    import youtube from '$lib/images/platforms/footer/youtube.svg';
    import instagram from '$lib/images/platforms/footer/instagram.svg';
    import tripadvisor from '$lib/images/platforms/footer/tripadvisor.svg';
    import whatsapp from '$lib/images/platforms/footer/whatsapp.svg';

    let { places } = $props();
</script>

<footer class="w-full bg-zinc-950 px-3 pt-5 border-t border-zinc-900">
    <h4 class="font-bold text-white mb-3">İletişim Bilgileri</h4>
    <ul class="flex flex-col gap-y-4 text-yellow-400 text-sm max-w-sm">
        <li class="hover:brightness-75 transition">
            <a href="tel:+90551 453 1938" class="flex items-center gap-x-3">
                <img src={phone} class="w-6" alt="Phone"/>
                <span>+90 551 453 1938</span>
            </a>
        </li>
        <li class="hover:brightness-75 transition">
            <a href="mailto:busterbus47@gmail.com" class="flex items-center gap-x-3">
                <img src={mail} class="w-6" alt="Mail"/>
                <span>busterbus47@gmail.com</span>
            </a>
        </li>
        <li class="hover:brightness-75 transition">
            <a href="/" class="flex items-center gap-x-3">
                <img src={location} class="w-6" alt="Location"/>
                <span>Namık Kemal Mah. 12. Sokak No:23 Daire:5 Esenyurt/İSTANBUL</span>
            </a>
        </li>
    </ul>

    <ul class="flex w-full justify-center gap-x-5 my-8">
        <li>
            <a href="https://www.whatsapp.com">
                <img src={whatsapp} alt="" class="w-10 bg-zinc-950 rounded-full p-2 hover:invert transition sm:w-12"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com">
                <img src={instagram} alt="" class="w-10 bg-zinc-950 rounded-full p-2 hover:invert transition sm:w-12"/>
            </a>
        </li>
        <li>
            <a href="https://www.tripadvisor.com">
                <img src={tripadvisor} alt="" class="w-10 bg-zinc-950 rounded-full p-2 hover:invert transition sm:w-12"/>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com">
                <img src={youtube} alt="" class="w-10 bg-zinc-950 rounded-full p-2 hover:invert transition sm:w-12"/>
            </a>
        </li>
    </ul>

    <h4 class="font-bold text-white mb-3">Popüler Destinasyonlar</h4>
    <ul class="w-full grid grid-cols-3 gap-x-12 text-zinc-300 text-xs sm:pl-4">
        {#each places as {name, link}}
            <li class="hover:text-zinc-500 hover:underline transition duration-200">
                <a href={"/places/" + link}>
                    {name}
                </a>
            </li> 
        {/each}
    </ul>

    <div class="w-full flex justify-center">
        <hr class="text-zinc-900 bg-zinc-900 border-zinc-900 my-5 w-5/6 h-[2px]"/>
    </div>

    <h4 class="text-xs text-zinc-300 mb-2">© Copyright 2024 | Speed Transfer | Tüm Hakları Saklıdır ®</h4>
</footer>