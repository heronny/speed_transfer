<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KIZILAĞAÇ: Doğanın ve Sakinliğin Buluştuğu Köşe</h1>
    
    <section>
        <h2>Doğal Güzellikler ve Huzur Dolu Bir Atmosfer</h2>
        <p><strong>Kızılağaç</strong>, Antalya'nın en sakin ve doğal bölgelerinden biri olarak öne çıkıyor. 6 km'lik <strong>altın kumsalı</strong>, mavi bayraklı suları ve çam ormanlarıyla çevrili plajlarıyla dikkat çekiyor. Bölge, özellikle sakin bir tatil arayanlar ve doğa severler için ideal bir kaçış noktası.</p>
        
        <p><strong>Kızılağaç Göleti</strong>, bölgenin en önemli doğal güzelliklerinden biri. Gölet çevresindeki 3 km'lik yürüyüş parkuru, kuş gözlemcileri ve fotoğraf tutkunları için harika bir deneyim sunuyor. Gölette kano ve balık tutma aktiviteleri de düzenleniyor.</p>
    </section>

    <section>
        <h2>Kültürel Miras ve Yöresel Yaşam</h2>
        <p>Kızılağaç, geleneksel Türk köy yaşamını koruyan nadir bölgelerden biri. Köy meydanındaki <strong>tarihi çınar ağacı</strong>, yüzyıllardır yerel halkın buluşma noktası. Her yıl düzenlenen <strong>Kızılağaç Köy Festivali</strong>, yöresel ürünler, el sanatları ve canlı müzik eşliğinde binlerce ziyaretçiyi ağırlıyor.</p>
        
        <p>Köydeki <strong>Kızılağaç Müzesi</strong>, bölgenin tarihini ve kültürel mirasını yansıtan eserlerle dolu. Müzede sergilenen geleneksel tarım aletleri ve el dokuma tezgahları, ziyaretçilere geçmişe yolculuk yapma fırsatı sunuyor.</p>
    </section>

    <section>
        <h2>Konaklama ve Aktivite</h2>
        <p>Kızılağaç'taki <strong>butik oteller</strong>, doğayla iç içe bir konaklama deneyimi sunuyor. <strong>Kızılağaç Taş Evleri</strong>'nde sabah kahvaltısında köy yumurtası ve ev yapımı reçeller servis ediliyor. Akşamları ise <strong>Kızılağaç Balık Restoranları</strong>'nda taze levrek ve çupra ızgaraları denenmeli.</p>
        
        <ul>
            <li><strong>Aktiviteler:</strong> Kano, balık tutma, doğa yürüyüşü</li>
            <li><strong>Yöresel Ürünler:</strong> Zeytinyağı, kekik balı, el yapımı sabunlar</li>
            <li><strong>Kültürel Etkinlikler:</strong> Köy festivali ve el sanatları sergileri</li>
        </ul>
    </section>
</article>