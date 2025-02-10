<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">GÜNDOĞDU: Doğanın ve Huzurun Buluştuğu Köşe</h1>
    
    <section>
        <h2>Torosların Eteklerinde Bir Cennet</h2>
        <p><strong>Gündoğdu</strong>, Antalya'nın Alanya ilçesine bağlı, 3 km'lik bakir kumsalı ve çam ormanlarıyla çevrili bir sahil beldesi. 2023 verilerine göre yılda 100 bin turist ağırlayan bölge, özellikle sakin tatil arayanlar ve doğaseverler için ideal. <strong>Gündoğdu Plajı</strong>'nın ince kumu ve berrak suları, gün boyu deniz keyfi sunuyor.</p>
        
        <p><strong>Gündoğdu Kanyonu</strong>, 5 km'lik yürüyüş parkuru ve 50 metrelik şelalesiyle doğa tutkunlarını cezbediyor. Kanyonun sonundaki <strong>Gölet</strong>, serinlemek isteyenler için mükemmel bir mola noktası.</p>
    </section>

    <section>
        <h2>Kültür ve Yöresel Yaşam</h2>
        <p>Bölgedeki <strong>Yörük Köyü</strong>, geleneksel Türk yaşamını koruyan nadir yerlerden biri. Köy meydanındaki <strong>tarihi çınar ağacı</strong>, yüzyıllardır yerel halkın buluşma noktası. Her yıl düzenlenen <strong>Gündoğdu Yörük Festivali</strong>, yöresel ürünler, el sanatları ve canlı müzik eşliğinde binlerce ziyaretçiyi ağırlıyor.</p>
    </section>

    <section>
        <h2>Konaklama ve Aktivite</h2>
        <ul>
            <li><strong>Doğa Yürüyüşü:</strong> Kanyon içinde 5 km'lik trekking rotası</li>
            <li><strong>Su Sporları:</strong> Şnorkelle yüzme ve kano</li>
            <li><strong>Konaklama:</strong> Butik taş oteller ve aile pansiyonları</li>
            <li><strong>Lezzetler:</strong> Köy fırınında odun ateşinde pişen pide ve taze balık</li>
        </ul>
    </section>
</article>