<script>
    import money from '$lib/images/symbols/money.svg';
    import customerService from '$lib/images/symbols/customer-service.svg';
    import ticket from '$lib/images/symbols/ticket.svg';
    import car from '$lib/images/symbols/car.svg';


    const advantages = [
        {
            header: "Her şey Dahil Fiyatlandırma",
            paragraph: "Fiyatlarımız sabit, nihai ve kapsayıcıdır (vergiler, otopark ücretleri vb.). Yalnızca web sitemizde gördüklerinizi ödersiniz.", 
            img: money,
        }, 
        {
            header: "7/24 Müşteri Hizmetleri",
            paragraph: "İhtiyacınız olan her zaman, İngilizce, Almanca, Rusça, Fransızca ve Arapça telefon, e-posta, whatsapp veya viber ile bizimle iletişime geçebilirsiniz.", 
            img: customerService,
        },
        {
            header: "Ücretsiz Rezervasyon İptali",
            paragraph: "Transferinizi seyahatinizden 12 saat öncesine kadar iptal ederseniz, ödediğiniz tutarın% 100'ünü size iade edeceğiz", 
            img: ticket,
        },
        {
            header: "Kaliteli, Güvenli ve Lisanslı Araçlar",
            paragraph: "Transferlerinizi en son model Mercedes markalı klimalı araçlarla gerçekleştiriyoruz.", 
            img: car,
        }
    ]

</script>

<h2 class="font-extrabold text-white text-2xl text-center mt-7 mb-12 mx-4 tracking-wide">NEDEN 
    <span class="text-yellow-500">SPEED TRANSFER</span>'İ
    TERCİH ETMELİSİNİZ ?
</h2>

<div class="grid gap-y-3 text-center px-6 sm:grid-cols-2 sm:gap-x-3">
    {#each advantages as advantage}
        <div class="flex flex-col items-center px-3 py-10 rounded-md bg-zinc-950">
            <img src={advantage.img} alt="All-include pricing" class="w-16 h-16"/>
            <h3 class="text-lg text-white font-bold mt-4 mb-1">{advantage.header}</h3>
            <p class="text-sm text-zinc-200">{advantage.paragraph}</p>
        </div>
    {/each}
</div>