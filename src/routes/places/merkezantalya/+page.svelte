<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">MERKEZANTALYA: Tarihin Nabzının Attığı Şehir</h1>
    
    <section>
        <h2>Antik Çağlardan Günümüze Bir Yolculuk</h2>
        <p>MÖ 150'de Bergama Kralı II. Attalos tarafından kurulan <strong>Attaleia</strong>, günümüzde modern Antalya'nın temelini oluşturur. Roma döneminde önemli bir liman kenti haline gelen bölge, 13. yüzyılda Selçuklu Sultanı I. Alaeddin Keykubad'ın fethiyle Türk egemenliğine girdi. <strong>Yivli Minare</strong> (1230), bu dönemin en görkemli eserlerinden biri olarak 38 metrelik yüksekliği ve firuze çinili işlemeleriyle dikkat çeker.</p>
        
        <p>Osmanlı döneminde ticaret merkezi olarak gelişen Kaleiçi, 19. yüzyılda inşa edilen <strong>Kesik Minare</strong> ve <strong>Tekeli Mehmet Paşa Camii</strong> gibi mimari şaheserlere ev sahipliği yapar. 1972'de başlatılan restorasyon projesiyle 450 tarihi yapı koruma altına alınmış, bölge 1984'te UNESCO Dünya Mirası Geçici Listesi'ne dahil edilmiştir.</p>
    </section>

    <section>
        <h2>Kültürel Mozaiğin İzinde</h2>
        <p><strong>Antalya Müzesi</strong>, 1922'de kurulduğundan beri Anadolu'nun arkeolojik hazinelerini sergiliyor. 30 bin eserden oluşan koleksiyonda, Perge'de bulunan <strong>Büyük İskender Heykeli</strong> ve MS 2. yüzyıla tarihlenen <strong>Herakles Lahdi</strong> öne çıkan parçalar. Müzenin etnografya bölümünde ise 19. yüzyıl Yörük kültürüne ait el dokumaları ve gümüş takılar sergileniyor.</p>
        
        <p>Şehrin sosyal hayatına damga vuran <strong>Antalya Altın Portakal Film Festivali</strong>, 1963'ten beri her ekim ayında düzenleniyor. 2023'te 60. yılını kutlayan festival, 45 ülkeden 150 filmi ağırlayarak uluslararası bir platform haline geldi.</p>
    </section>

    <section>
        <h2>Modern Yaşam ve Doğal Cazibe</h2>
        <p>7.5 km uzunluğundaki <strong>Konyaaltı Sahil Şeridi</strong>, 2021'deki yenileme çalışmalarıyla bisiklet yolları, interaktif sanat enstalasyonları ve çocuk bilim merkezleriyle donatıldı. Sahildeki <strong>Antalya Akvaryum</strong>, 40 tematik tankta 15 bin deniz canlısını barındırıyor. 131 metrelik tüneliyle dünyanın en uzun akvaryum tünellerinden biri olan yapı, yılda 1.2 milyon ziyaretçi çekiyor.</p>
        
        <p>Şehrin huzur vahası <strong>Karaalioğlu Parkı</strong>, 45 hektarlık alanda 600 bitki türüne ev sahipliği yapıyor. Park içindeki <strong>Hıdırlık Kulesi</strong>, Roma döneminden kalma 14 metrelik bir gözetleme kulesi olarak ziyaretçilerini tarihle doğanın buluştuğu noktada ağırlıyor.</p>
    </section>

    <section>
        <h2>Gastronomik Keşifler</h2>
        <p>Antalya mutfağı, Akdeniz'in taze ürünleriyle Osmanlı mirasının harmanlandığı bir şölen sunar. Kaleiçi'ndeki <strong>Seraser Fine Dining</strong>, Michelin yıldızlı şefler eşliğinde modernize edilmiş yöresel tatlar sunuyor. Deniz ürünleri tutkunları için <strong>Balıkçılar Çarşısı</strong>'nda günlük avlanan ahtapot ve levrek ızgaraları denenmeli.</p>
        
        <ul>
            <li><strong>Tandır Kebabı:</strong> 8 saat odun ateşinde pişirilen dana eti</li>
            <li><strong>Şakşuka:</strong> Patlıcan, kabak ve domatesin zeytinyağlı dansı</li>
            <li><strong>Badem Tatlısı:</strong> Yerel bademlerle yapılan geleneksel şerbetli tatlı</li>
        </ul>
    </section>
</article> 