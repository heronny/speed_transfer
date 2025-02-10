<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KESTEL: Tarih ve Doğanın İç İçe Geçtiği Köy</h1>
    
    <section>
        <h2>Antik Çağlardan Günümüze</h2>
        <p><strong>Kestel</strong>, Antalya'nın Alanya ilçesine bağlı, antik <strong>Kestros</strong> kentinin kalıntıları üzerinde yükselen bir köy. MS 2. yüzyıla tarihlenen kent surları ve su kemerleri, Roma döneminin izlerini taşıyor. 2022 kazılarında ortaya çıkarılan <strong>mozaikli hamam</strong>, bölgenin antik yaşamına ışık tutuyor.</p>
        
        <p><strong>Kestel Kalesi</strong>, 13. yüzyılda Selçuklular tarafından inşa edildi. 360 derecelik Akdeniz manzarası sunan kale, fotoğraf tutkunları için ideal bir nokta.</p>
    </section>

    <section>
        <h2>Doğal Güzellikler ve Aktivite</h2>
        <p><strong>Kestel Çayı</strong>, 10 km'lik rafting parkuru ve 50 metrelik şelalesiyle doğa tutkunlarını cezbediyor. Çayın etrafındaki <strong>çam ormanları</strong>, yürüyüş ve piknik için mükemmel bir ortam sunuyor.</p>
        <ul>
            <li><strong>Su Sporları:</strong> Rafting ve kano</li>
            <li><strong>Doğa Yürüyüşü:</strong> 5 km'lik trekking rotası</li>
            <li><strong>Konaklama:</strong> Butik taş oteller ve aile pansiyonları</li>
            <li><strong>Lezzetler:</strong> Köy fırınında odun ateşinde pişen pide ve taze balık</li>
        </ul>
    </section>

    <section>
        <h2>Kültür ve Yöresel Yaşam</h2>
        <p>Bölgedeki <strong>Yörük Köyü</strong>, geleneksel Türk yaşamını koruyan nadir yerlerden biri. Köy meydanındaki <strong>tarihi çınar ağacı</strong>, yüzyıllardır yerel halkın buluşma noktası. Her yıl düzenlenen <strong>Kestel Yörük Festivali</strong>, yöresel ürünler, el sanatları ve canlı müzik eşliğinde binlerce ziyaretçiyi ağırlıyor.</p>
    </section>
</article>