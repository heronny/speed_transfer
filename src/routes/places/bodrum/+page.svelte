<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">BODRUM: Mavinin ve Beyazın Başkenti</h1>
    
    <section>
        <h2>Antik Dünyanın Harikaları</h2>
        <p>MÖ 4. yüzyılda inşa edilen <strong>Halikarnas Mozolesi</strong>, Dünyanın Yedi Harikası'ndan biriydi. Günümüzde kalıntıları Bodrum Kalesi'nde sergilenen anıt mezar, 45 metrelik orijinal yüksekliğiyle antik mühendisliğin zirvesiydi.</p>
        
        <p><strong>Bodrum Kalesi</strong> (St. Peter Kalesi), 1402'de Hospitalier Şövalyeleri tarafından inşa edildi. 5 kulesi ve 179 odalı müzesiyle 2023'te 1.4 milyon ziyaretçi ağırladı.</p>
    </section>

    <section>
        <h2>Modern Yaşam ve Eğlence</h2>
        <p><strong>Bodrum Marina</strong>, 650 yat kapasitesi ve 18 lüks butiğiyle Türkiye'nin en gözde sosyalleşme noktalarından. 2022'de düzenlenen <strong>Bodrum Müzik Festivali</strong>'ne 32 ülkeden sanatçı katıldı.</p>
        
        <p><strong>Gümüşlük</strong> sahili, antik Myndos kentinin su altı kalıntılarıyla ünlü. Sabahın ilk ışıklarında denize girenler, MS 4. yüzyıla ait sütunları görebilir.</p>
    </section>
</article>