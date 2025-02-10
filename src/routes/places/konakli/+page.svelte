<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KONAKLI: Lüksün ve Huzurun Buluştuğu Sahil</h1>
    
    <section>
        <h2>Antik Çağlardan Modern Turizme</h2>
        <p>Antalya'nın gözde turizm merkezlerinden <strong>Konaklı</strong>, antik <strong>Olbia</strong> kentinin kalıntıları üzerinde yükseliyor. Roma döneminde önemli bir liman olan bölgede, 2021 kazılarında ortaya çıkarılan <strong>mozaikli villa kalıntıları</strong>, ziyaretçilere tarihle iç içe bir deneyim sunuyor. MS 2. yüzyıla tarihlenen su kemerleri ise antik mühendisliğin izlerini taşıyor.</p>
        
        <p>Bölgenin sembolü <strong>Konaklı Kalesi</strong>, 13. yüzyılda Selçuklular tarafından inşa edildi. 18 metrelik surları ve 5 gözetleme kulesiyle Akdeniz manzarasını kuşatan kale, 2023'te 250 bin ziyaretçi ağırladı.</p>
    </section>

    <section>
        <h2>Doğal Cennetler ve Plaj Keyfi</h2>
        <p>Konaklı'nın 7 km'lik <strong>altın kumsalı</strong>, mavi bayraklı suları ve sakin atmosferiyle ailelerin gözdesi. Plaj boyunca uzanan şemsiyeli şezlonglar ve <strong>Aqua Park</strong>'lar, gün boyu eğlence vaat ediyor. <strong>Deniz Bisikleti</strong> ve <strong>parasailing</strong> gibi su sporları, macera tutkunlarını cezbediyor.</p>
        
        <p>Bölgenin 3 km kuzeyindeki <strong>Göynük Kanyonu</strong>, 6 km'lik yürüyüş parkuru ve 150 metrelik şelalesiyle doğaseverler için ideal. Kanyonda düzenlenen <strong>rafting turları</strong>, adrenalin dolu anlar yaşatıyor.</p>
    </section>

    <section>
        <h2>Modern Konaklama ve Aktivite</h2>
        <p>Konaklı'daki <strong>5 yıldızlı resortlar</strong>, all-inclusive konseptiyle dünya standartlarında hizmet veriyor. <strong>Rixos Premium Tekirova</strong>, özel plajı, 10 restoranı ve 24 saat açık spa merkeziyle lüks turizmin öncüsü. 2022'de "En İyi Aile Oteli" ödülünü alan tesis, çocuklu aileler için özel aktivite programları sunuyor.</p>
        
        <ul>
            <li><strong>Golf Keyfi:</strong> 18 delikli uluslararası standartlarda golf sahaları</li>
            <li><strong>Alışveriş:</strong> Konaklı Çarşısı'nda el yapımı takılar ve yerel ürünler</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandır kebabı, kabak çiçeği dolması ve sakızlı dondurma</li>
            <li><strong>Gece Hayatı:</strong> Beach club'larda DJ performansları ve canlı müzik</li>
        </ul>
    </section>
</article>