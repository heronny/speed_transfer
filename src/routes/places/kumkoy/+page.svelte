<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KUMKÖY: Geleneksel Köy Yaşamının Sahildeki Yansıması</h1>
    
    <section>
        <h2>Tarih ve Kültürün İzinde</h2>
        <p>Antalya'nın otantik dokusunu koruyan <strong>Kumköy</strong>, 19. yüzyılda Rum mimarisiyle inşa edilen taş evleri ve dar sokaklarıyla zamanda yolculuk hissi yaşatıyor. 2003 yılında başlatılan restorasyon projesiyle 42 tarihi yapı butik otele dönüştürüldü. Köy meydanındaki <strong>150 yıllık çınar ağacı</strong>, anıt ağaç statüsünde korunarak yerel halkın buluşma noktası olmayı sürdürüyor.</p>
        
        <p><strong>Kumköy Müzesi</strong>'nde sergilenen el dokuma tezgahları ve geleneksel tarım aletleri, bölgenin kültürel mirasını gözler önüne seriyor. Köyde her ekim ayında düzenlenen <strong>Zeytin Hasat Şenliği</strong>, yöresel ürünler ve canlı müzik eşliğinde binlerce ziyaretçi çekiyor.</p>
    </section>

    <section>
        <h2>Doğal Güzellikler ve Plaj Keyfi</h2>
        <p>Kumköy'ün 3 km uzunluğundaki <strong>altın kumsalı</strong>, mavi bayraklı suları ve sakin atmosferiyle özellikle ailelerin tercih ettiği bir cennet. Plaj boyunca uzanan şemsiyeli şezlonglar ve beach club'lar, Akdeniz'in tadını çıkarmak için ideal. <strong>Kumköy Burnu</strong>'ndaki kayalıklar, şnorkelle yüzerek renkli balık sürülerini gözlemlemek için mükemmel bir nokta.</p>
        
        <p>Bölgenin 2 km batısındaki <strong>Göynük Kanyonu</strong>, 6 km'lik yürüyüş parkuru ve 200 metrelik şelalesiyle doğa tutkunlarını bekliyor. Kanyonda düzenlenen <strong>rafting turları</strong>, macera arayanlar için popüler bir aktivite.</p>
    </section>

    <section>
        <h2>Konaklama ve Yöresel Lezzetler</h2>
        <p>Kumköy'deki <strong>taş ev butik oteller</strong>, geleneksel mimariyi modern konforla birleştiriyor. <strong>Kumköy Konakları</strong>'nda sabahları köy kahvaltısı eşliğinde organik zeytin ve peynirlerin tadına bakabilirsiniz. Akşamları ise balık restoranlarında taze çupra ve levrek ızgaraları denemek şart!</p>
        
        <ul>
            <li><strong>Yöresel Tatlar:</strong> Kabak çiçeği dolması, Antalya piyazı</li>
            <li><strong>Aktiviteler:</strong> Tekne turları, köy pazarlarında alışveriş</li>
            <li><strong>El Sanatları:</strong> Yörük kilimleri ve el yapımı seramikler</li>
        </ul>
    </section>
</article>