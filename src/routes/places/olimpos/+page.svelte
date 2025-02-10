<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">OLİMPOS: Mitolojinin Alevlerle Dans Eden Koyu</h1>
    
    <section>
        <h2>Antik Sırlar</h2>
        <p><strong>Olympos Antik Kenti</strong>'nde Likya Birliği'nin MS 2. yüzyılda bastırdığı gümüş sikkelerin izini sürün. 150 metre uzunluğundaki nekropol alanında 57 kaya mezarı ve lahit görebilirsiniz.</p>
        <p><strong>Yanartaş (Chimera)</strong>'da 2300 yıldır sürekli yanan doğal gaz alevlerini gece ziyaret edin. 20-30 cm yüksekliğindeki bu mitolojik alevler, deniz seviyesinden 185 metre yükseklikte.</p>
    </section>

    <section>
        <h2>Doğa Macerası</h2>
        <p><strong>Olympos Plajı</strong>'nın 3 km'lik kumsalında caretta caretta yuvalama alanlarını koruyarak yüzün. Antik liman kalıntıları arasında gün batımı keyfi için 18:30-19:45 saatlerini tavsiye ederiz.</p>
        <p><strong>Ulupınar Vadisi</strong>'nde 8 kilometrelik yürüyüş parkurunda şelaleler arasında kanyon geçişi yapın. Su sıcaklığı yazın 14°C'ye kadar düşen soğuk su kaynaklarıyla ünlü.</p>
    </section>

    <section>
        <h2>Konaklama Deneyimi</h2>
        <p><strong>Ağaç Evler</strong>'de 15 metre yükseklikteki çam ağaçlarına kurulu bungalowlarda kalın. 1960'lardan beri süren bu gelenekte elektrik 23:00'ta kesilerek doğayla baş başa kalırsınız.</p>
        <p><strong>Kamp Alanları</strong>'nda yıldız altında konaklayarak Likya Yolu'nun 509. km'sinde çadır kurma imkanı. 24 saat açık olan ortak mutfaklarda yerel ürünlerle yemek yapabilirsiniz.</p>
    </section>
</article>