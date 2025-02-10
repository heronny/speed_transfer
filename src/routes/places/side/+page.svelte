<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">SİDE: Antik Limanın Büyüsü</h1>
    
    <section>
        <h2>Tarihin Sütunları Arasında</h2>
        <p>MS 150'de inşa edilen <strong>Apollon Tapınağı</strong>, 12 Korint sütunuyla günümüze ulaşan tek yapı. Tapınağın batısındaki <strong>Side Antik Tiyatro</strong>, 15.000 kişi kapasitesiyle Anadolu'nun en büyük açık hava tiyatrolarından.</p>
        
        <p><strong>Side Müzesi</strong>'nde sergilenen 2. yüzyıl <strong>Amor ve Psyche Heykeli</strong>, Roma dönemi aşk mitolojisinin en nadide örneklerinden. 2021 restorasyonunda ortaya çıkan mozaikler, MS 4. yüzyıl Hristiyanlık izlerini taşıyor.</p>
    </section>

    <section>
        <h2>Kumsallar ve Modern Konfor</h2>
        <p>12 km'lik <strong>Kleopatra Plajı</strong>, efsaneye göre Mısır'dan getirilen altın kumlarıyla ünlü. Plaj boyunca uzanan <strong>Beach Club'lar</strong>, lüks şezlonglar ve özel kokteyllerle VIP deneyim sunuyor.</p>
    </section>
</article>