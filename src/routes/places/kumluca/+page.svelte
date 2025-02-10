<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KUMLUCA: Akdeniz'in Seracılık Başkenti</h1>
    
    <section>
        <h2>Tarım ve Lezzet</h2>
        <p><strong>Türkiye'nin sebze üretiminin %15'i</strong> Kumluca'nın 140.000 dönümlük seralarından çıkıyor. Nisan ayında düzenlenen <strong>Avocado Festivali</strong>'nde 50 çeşit tropik meyve tatma imkanı.</p>
    </section>

    <section>
        <h2>Sahil Cennetleri</h2>
        <p><strong>Adrasan Plajı</strong>'nın 700 metre kum şeridinde deniz kaplumbağalarıyla yüzün. 1. Derece Doğal Sit Alanı olan koyda şemsiyeler arası 6 metre mesafe kuralı uygulanıyor.</p>
        <p><strong>Olympos Plajı</strong>'nda antik liman kalıntıları arasında günbatımı keyfi yapın. Yanartaş'ın sönmeyen alevleri gece görsel şölen sunuyor.</p>
    </section>

    <section>
        <h2>Tarih ve Macera</h2>
        <p><strong>Rhodiapolis Antik Kenti</strong>'nde MS 2. yüzyıldan kalma Opramoas Anıtı'nı görün. Likya Birliği'nin en zengin hamisi olarak bilinen Opramoas'ın 12 dilde yazıtları burada.</p>
        <p><strong>Gelidonya Feneri</strong>'ne 45 dakikalık yürüyüşle ulaşarak 1936'dan beri çalışan tarihi deniz fenerinde fotoğraf çekin.</p>
    </section>
</article>