<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />
    <h1 itemprop="name">ALANYA: Korsanlar ve Kaleler Şehri</h1>
    
    <section>
        <h2>Tarihin Doruklarında Bir Şato</h2>
        <p>13. yüzyılda Selçuklu Sultanı I. Alaeddin Keykubad tarafından inşa edilen <strong>Alanya Kalesi</strong>, 6.5 km sur uzunluğu ve 140 kulesiyle Akdeniz'in en görkemli savunma yapılarından. 2023'te 1.8 milyon ziyaretçiyle Türkiye'nin en çok gezilen kaleleri arasında.</p>
        <p><strong>Kızıl Kule</strong>'nin 33 metrelik yüksekliğinden panoramik manzarayı izlemek, tarihle doğanın buluşmasına tanıklık etmek demek. 1226'da yapılan kule, tersane ile birlikte UNESCO Dünya Mirası Listesi'nde.</p>
    </section>

    <section>
        <h2>Plajlar ve Doğal Güzellikler</h2>
        <p><strong>Kleopatra Plajı</strong>'nın 2 km'lik altın kumsalı, efsaneye göre Mısır Kraliçesi'nin emriyle buraya getirildi. Plajın sularında yüzerken antik limanın kalıntılarını görmek mümkün.</p>
        <p><strong>Dim Mağarası</strong>, 360 metrelik uzunluğu ve 15-20 metre yüksekliğiyle Türkiye'nin en büyük ikinci mağarası. İçindeki sarkıt ve dikitler milyonlarca yıllık jeolojik tarihi yansıtıyor.</p>
    </section>

    <section>
        <h2>Modern Turizm ve Aktivite</h2>
        <p><strong>Alanya Teleferiği</strong> ile 450 metrelik bir tırmanışla Damlataş Tepesi'ne çıkın. Tepedeki restoranda Akdeniz manzarası eşliğinde yöresel meze keyfi yapın.</p>
        <ul>
            <li><strong>Rafting:</strong> Dim Çayı'nda 14 km'lik parkur</li>
            <li><strong>Jeep Safari:</strong> Toros Dağları'nın gizli köylerine macera dolu tur</li>
        </ul>
    </section>
</article>