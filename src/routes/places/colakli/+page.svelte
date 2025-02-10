<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KONYAALTI: Şehir ve Denizin Kucaklaşması</h1>
    
    <section>
        <h2>Plaj Kültürünün Epik Merkezi</h2>
        <p>6.2 km'lik mavi bayraklı sahil şeridi, 18 beach club ve 45 modern sanat enstalasyonuyla Türkiye'nin en popüler kent plajı. 2023 verilerine göre yaz sezonunda günlük 45 bin ziyaretçi ağırlayan plaj, <strong>Antalya Wake Park</strong>'ta cable wakeboard ve <strong>Deep Blue Diving</strong>'de şnorkelli dalış imkanı sunuyor.</p>
        
        <p>Plajın batı ucundaki <strong>Adalar Kayalıkları</strong>, dalga sesleri eşliğinde gün batımı izlemek için en romantik nokta. 200 metrelik yürüyüş köprüsü üzerindeki seyir terasları, fotoğraf tutkunlarına kartpostallık kareler vaat ediyor.</p>
    </section>

    <section>
        <h2>Bilim ve Sanatın Buluşma Noktası</h2>
        <p>1995'te açılan <strong>Antalya Kültür Merkezi (AKM)</strong>, 1.200 kişilik opera salonu ve 3 sanat galerisiyle Türkiye'nin en aktif kültür kurumlarından. 2022'de düzenlenen <strong>Uluslararası Heykel Sempozyumu</strong>'nda 15 ülkeden sanatçının eserleri sergilendi.</p>
        
        <p>2018'de hizmete giren <strong>Antalya Bilim Merkezi</strong>, 4.500 m² alanda 125 interaktif sergiyle çocuklara bilimi sevdiriyor. Planetaryumda düzenlenen "Galaksiler Arası Yolculuk" gösterisi haftada 2 bin ziyaretçi çekiyor.</p>
    </section>
</article>