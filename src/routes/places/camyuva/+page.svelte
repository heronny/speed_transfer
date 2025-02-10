<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">ÇAMYUVA: Tahtalı Dağı'nın Gölgesinde Bir Doğa Harikası</h1>
    
    <section>
        <h2>Dağ ve Denizin Dansı</h2>
        <p><strong>Çamyuva</strong>, Antalya'nın Kemer ilçesinde, Toros Dağları'nın eteklerinde uzanan 4 km'lik bir sahil şeridi. <strong>Tahtalı Dağı</strong>'nın 2.365 metrelik zirvesine çıkan teleferik (Olympos Teleferik), 10 dakikalık yolculukla 360 derecelik Akdeniz manzarası sunuyor. 2023'te 450 bin ziyaretçi ağırlayan teleferik, Türkiye'nin en uzun teleferik hattı unvanını taşıyor.</p>
        
        <p><strong>Çamyuva Plajı</strong>'nın çakıl taşlı kumsalı ve turkuaz suları, özellikle şnorkelle yüzerek deniz canlılarını gözlemlemek isteyenler için ideal. Plajın hemen arkasındaki <strong>Çamyuva Kanyonu</strong>, 3 km'lik yürüyüş parkuruyla doğa severleri bekliyor.</p>
    </section>

    <section>
        <h2>Tarih ve Kültür</h2>
        <p>Bölgedeki <strong>Idyros Antik Kenti</strong> kalıntıları, Likya uygarlığının deniz ticaretindeki rolünü gösteriyor. MS 4. yüzyıla tarihlenen kilise mozaikleri ve sarnıçlar, kazı çalışmalarıyla gün yüzüne çıkarılıyor. Her yıl düzenlenen <strong>Çamyuva Zeytin Festivali</strong>, yöresel üreticileri ve sanatçıları bir araya getiriyor.</p>
    </section>

    <section>
        <h2>Aktiviteler ve Konaklama</h2>
        <ul>
            <li><strong>Doğa Sporları:</strong> Tahtalı Dağı'nda paragliding, kanyonda trekking</li>
            <li><strong>Tekne Turları:</strong> Adrasan ve Sazak Koyu'na günübirlik keşif</li>
            <li><strong>Konaklama:</strong> Butik taş oteller ve aile pansiyonları</li>
            <li><strong>Lezzetler:</strong> Köy fırınında odun ateşinde pişen pide ve taze balık</li>
        </ul>
    </section>
</article>