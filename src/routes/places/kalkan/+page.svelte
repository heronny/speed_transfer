<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KALKAN: Mavi Yolculuğun İncisi</h1>
    
    <section>
        <h2>Beyaz Evler ve Turkuaz Sular</h2>
        <p><strong>Kalkan</strong>, Antalya'nın Kaş ilçesine bağlı, beyaz badanalı evleri ve dar sokaklarıyla ünlü bir sahil kasabası. 2023 verilerine göre yılda 500 bin turist ağırlayan bölge, özellikle İngiliz ve Avrupalı turistlerin gözdesi. <strong>Kalkan Limanı</strong>'ndan kalkan teknelerle yapılan <strong>12 Adalar Turu</strong>, Kaputaş Plajı ve Patara Antik Kenti gibi önemli noktaları keşfetme fırsatı sunuyor.</p>
        
        <p><strong>Kaputaş Plajı</strong>, 187 basamakla inilen ve turkuaz sularıyla ünlü bir doğa harikası. Plajın arkasındaki kanyon, trekking tutkunları için ideal.</p>
    </section>

    <section>
        <h2>Tarih ve Kültür</h2>
        <p>Kalkan'ın 2 km batısındaki <strong>Ksantos Antik Kenti</strong>, Likya Birliği'nin başkentiydi. MS 2. yüzyıla tarihlenen tiyatro ve lahitler, antik dönemin ihtişamını yansıtıyor. 2021 kazılarında ortaya çıkan <strong>Nereidler Anıtı</strong>, British Museum'da sergileniyor.</p>
    </section>

    <section>
        <h2>Lüks Turizm ve Aktivite</h2>
        <ul>
            <li><strong>Yat Turları:</strong> Kekova ve Simena Kalesi keşfi</li>
            <li><strong>Dalış:</strong> Sualtı mağaraları ve antik batık şehir</li>
            <li><strong>Konaklama:</strong> Lüks villalar ve butik oteller</li>
            <li><strong>Lezzetler:</strong> Deniz ürünleri ve zeytinyağlı mezeler</li>
        </ul>
    </section>
</article>