<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">DALAMAN: Doğa ve Ulaşımın Kesistiği Nokta</h1>
    
    <section>
        <h2>Havalimanı ve Doğal Parklar</h2>
        <p><strong>Dalaman Havalimanı</strong>, yılda 10 milyon yolcu kapasitesiyle Türkiye'nin en önemli turizm giriş kapılarından biri. 2023 verilerine göre 45 ülkeden direkt uçuşla bölgeye ulaşım sağlanıyor. Havalimanının hemen yanı başındaki <strong>Dalaman Botanik Parkı</strong>, 450 bitki türü ve 3 km'lik yürüyüş yollarıyla nefes kesici bir doğa deneyimi sunuyor.</p>
        
        <p><strong>Köyceğiz-Dalaman Özel Çevre Koruma Bölgesi</strong>, 12.500 hektarlık alanıyla caretta carettaların ve Nil kaplumbağalarının yaşam alanı. 2022'de 800 yuva kaydedilen İztuzu Plajı, dünyaca ünlü bir koruma alanı.</p>
    </section>

    <section>
        <h2>Doğa Sporları ve Macera</h2>
        <p>Dalaman Çayı üzerinde 18 km'lik <strong>rafting parkuru</strong>, 4. derece zorluktaki rapitleriyle adrenalin tutkunlarını cezbediyor. <strong>Göcek Kanyonu</strong>'nda ise 6 km'lik trekking rotası, 50 metrelik şelaleler ve tarihi su değirmenleriyle dolu.</p>
        <ul>
            <li><strong>Jeep Safari:</strong> Toros Dağları'nın gizli köylerine keşif turu</li>
            <li><strong>Yamaç Paraşütü:</strong> 1.200 metreden Fethiye Körfezi manzarası</li>
            <li><strong>Yöresel Lezzetler:</strong> Çam balı ve köy tandırında pişen etler</li>
        </ul>
    </section>
</article>