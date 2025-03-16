<script>
    import Image from '../Image.svelte';
    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    
    <h1 itemprop="name">TEKİROVA: Antik Likya'nın Kapısında Bir Turizm İncisi</h1>
    
    <section>
        <h2>Tarihin ve Doğanın Buluştuğu Nokta</h2>
        <p><strong>Tekirova</strong>, antik <strong>Phaselis</strong> kentinin kalıntıları üzerinde yükselen bir turizm merkezi. MÖ 7. yüzyılda Rodoslu kolonistler tarafından kurulan Phaselis, üç limanı ve su kemerleriyle antik dönemin önemli ticaret merkezlerinden biriydi. 2023 kazılarında ortaya çıkarılan <strong>agora kalıntıları</strong> ve tiyatro, ziyaretçilere tarihle iç içe bir deneyim sunuyor.</p>
        
        <p>Bölgenin sembolü <strong>Phaselis Antik Tiyatrosu</strong>, 3.000 kişi kapasitesi ve Akdeniz manzarasıyla dikkat çekiyor. MS 2. yüzyıla tarihlenen tiyatro, yaz aylarında konser ve tiyatro gösterilerine ev sahipliği yapıyor.</p>
    </section>

    <section>
        <h2>Doğal Cennetler ve Plaj Keyfi</h2>
        <p>Tekirova'nın 5 km'lik <strong>altın kumsalı</strong>, mavi bayraklı suları ve sakin atmosferiyle ailelerin gözdesi. <strong>Adrasan Koyu</strong>, özellikle şnorkelle yüzerek renkli balık sürülerini gözlemlemek isteyenler için ideal. Koyun arkasındaki <strong>Tahtalı Dağı</strong>, 2.365 metrelik yüksekliğiyle yamaç paraşütü tutkunlarını cezbediyor.</p>
        
        <p>Bölgenin 3 km batısındaki <strong>Çıralı Plajı</strong>, caretta carettaların en önemli yuvalama alanlarından biri. 2023'te 1.200 yuva kaydedilen plaj, UNESCO tarafından koruma altında.</p>
    </section>

    <section>
        <h2>Modern Konaklama ve Aktivite</h2>
        <p>Tekirova'daki <strong>5 yıldızlı resortlar</strong>, all-inclusive konseptiyle dünya standartlarında hizmet veriyor. <strong>Rixos Premium Tekirova</strong>, özel plajı, 10 restoranı ve 24 saat açık spa merkeziyle lüks turizmin öncüsü. 2022'de "En İyi Aile Oteli" ödülünü alan tesis, çocuklu aileler için özel aktivite programları sunuyor.</p>
        
        <ul>
            <li><strong>Su Sporları:</strong> Jet ski, parasailing ve banana gezintileri</li>
            <li><strong>Doğa Yürüyüşü:</strong> Likya Yolu'nun 12 km'lik Tekirova etabı</li>
            <li><strong>Kültürel Etkinlikler:</strong> Phaselis Antik Kenti'nde yaz konserleri</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandır kebabı, kabak çiçeği dolması ve sakızlı dondurma</li>
        </ul>
    </section>
</article>