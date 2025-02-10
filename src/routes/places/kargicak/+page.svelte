<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KARGICAK: Organik Yaşam ve Doğal Huzurun Adresi</h1>
    
    <section>
        <h2>Doğanın İçinde Bir Sığınak</h2>
        <p><strong>Kargıcak</strong>, Antalya'nın en bakir bölgelerinden biri olarak 8 km'lik el değmemiş kumsalı ve çam ormanlarıyla dikkat çekiyor. 2023 verilerine göre yılda 300 bin turist ağırlayan bölge, özellikle sakin tatil arayanlar ve eko-turizm meraklıları için ideal. <strong>Kargıcak Plajı</strong>'nın kristal berraklığındaki suları, şnorkelle yüzerek deniz canlılarını gözlemlemek için mükemmel.</p>
        
        <p><strong>Kargıcak Köyü</strong>'ndeki organik zeytin bahçeleri ve nar plantasyonları, yöresel üretimin kalbini oluşturuyor. Her ekim ayında düzenlenen <strong>Organik Tarım Festivali</strong>, yerel üreticileri ve doğaseverleri bir araya getiriyor.</p>
    </section>

    <section>
        <h2>Tarih ve Kültür</h2>
        <p>Bölgede bulunan <strong>Lyrboton Kome Antik Kenti</strong> kalıntıları, Roma dönemine ait zeytin yağı işleme tesisleriyle ünlü. 2021 kazılarında ortaya çıkarılan mozaikler ve su kanalları, antik tarım tekniklerine ışık tutuyor. Kentin 2. yüzyıla tarihlenen agora kalıntıları, ziyaretçilere tarihle iç içe bir deneyim sunuyor.</p>
    </section>

    <section>
        <h2>Konaklama ve Aktivite</h2>
        <p>Kargıcak'taki <strong>eko-bungalovlar</strong>, güneş enerjisi ve geri dönüşümlü malzemelerle inşa edilmiş. <strong>Zeytin Bahçesi Butik Otel</strong>'de sabah kahvaltısında köy peyniri ve zeytinyağı eşliğinde organik ürünler servis ediliyor. Aktivite olarak:</p>
        <ul>
            <li><strong>Doğa Yürüyüşü:</strong> 5 km'lik zeytin ağaçları arasında trekking rotası</li>
            <li><strong>Bisiklet Turları:</strong> Köy yollarında organik çiftliklere pedal çevirme</li>
            <li><strong>Yöresel Lezzetler:</strong> Nar ekşili salata ve kekikli bal</li>
        </ul>
    </section>
</article>