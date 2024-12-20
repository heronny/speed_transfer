<script>
    import phone from '$lib/images/symbols/phone.svg';
    import mail from '$lib/images/symbols/mail.svg';
    import location from '$lib/images/symbols/location.svg';

    import youtube from '$lib/images/platforms/footer/youtube.svg';
    import instagram from '$lib/images/platforms/footer/instagram.svg';
    import tripadvisor from '$lib/images/platforms/footer/tripadvisor.svg';
    import whatsapp from '$lib/images/platforms/footer/whatsapp.svg';

</script>

<footer class="w-full bg-neutral-900 px-3 pt-5">
    <h4 class="font-bold text-lg text-white mb-3">İletişim Bilgileri</h4>
    <ul class="flex flex-col gap-y-4 text-yellow-400">
        <li class="hover:brightness-75 transition">
            <a href="tel:+90551 453 1938" class="flex items-center gap-x-3">
                <img src={phone} class="w-8" alt="Phone"/>
                <span>+90 551 453 1938</span>
            </a>
        </li>
        <li class="hover:brightness-75 transition">
            <a href="mailto:busterbus47@gmail.com" class="flex items-center gap-x-3">
                <img src={mail} class="w-8" alt="Mail"/>
                <span>busterbus47@gmail.com</span>
            </a>
        </li>
        <li class="hover:brightness-75 transition">
            <a href="" class="flex items-start gap-x-3">
                <img src={location} class="w-8" alt="Location"/>
                <span>Namık Kemal Mah. 12. Sokak No:23 Daire:5 Esenyurt/İSTANBUL</span>
            </a>
        </li>
    </ul>

    <ul class="flex w-full justify-center gap-x-5 my-8">
        <li>
            <a href="https://www.whatsapp.com">
                <img src={whatsapp} alt="" class="w-9 bg-black rounded-full p-2 hover:invert transition "/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com">
                <img src={instagram} alt="" class="w-9 bg-black rounded-full p-2 hover:invert transition "/>
            </a>
        </li>
        <li>
            <a href="https://www.tripadvisor.com">
                <img src={tripadvisor} alt="" class="w-9 bg-black rounded-full p-2 hover:invert transition "/>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com">
                <img src={youtube} alt="" class="w-9 bg-black rounded-full p-2 hover:invert transition "/>
            </a>
        </li>
    </ul>

    <h4 class="font-bold text-white text-lg mb-3">Popüler Destinasyonlar</h4>
    <ul class="w-full grid grid-cols-3 gap-x-12 text-zinc-300 text-sm">
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Merkezantalya
            </a>
        </li>
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Belek
            </a>
        </li>
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Kundu
            </a>
        </li>
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Side
            </a>
        </li>
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Evrenseki
            </a>
        </li>
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Beldibi
            </a>
        </li>
        <li class="hover:text-zinc-500 hover:underline transition">
            <a href="">
                Kemer
            </a>
        </li>
    </ul>

    <div class="w-full flex justify-center">
        <hr class="text-zinc-500 bg-zinc-500 border-zinc-500 my-5 w-5/6"/>
    </div>

    <h4 class="text-xs text-zinc-300 mb-2">© Copyright 2024 | Speed Transfer | Tüm Hakları Saklıdır ®</h4>
</footer>