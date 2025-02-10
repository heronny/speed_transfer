<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">FİNİKE: Tarih, Turunçgil ve Mavinin Büyüsü</h1>
    
    <section>
        <h2>Antik Limanın Modern Mirası</h2>
        <p><strong>Finike</strong>, antik <strong>Phoenicus</strong> liman kentinin kalıntıları üzerinde yükseliyor. MÖ 5. yüzyılda Likya Birliği'nin önemli ticaret merkezlerinden biri olan bölge, günümüzde Türkiye'nin turunçgil başkenti. 2023'te 500 bin ton portakal üretimiyle dünya çapında tanınıyor.</p>
        
        <p><strong>Limyra Antik Kenti</strong>, Finike'nin 10 km doğusunda yer alıyor. MS 4. yüzyıla tarihlenen tiyatro ve kaya mezarları, Likya kültürünün izlerini taşıyor. 2021 kazılarında ortaya çıkan <strong>Perikles Anıt Mezarı</strong>, arkeoloji dünyasını heyecanlandırdı.</p>
    </section>

    <section>
        <h2>Doğal Zenginlikler ve Tarım</h2>
        <p><strong>Finike Ovası</strong>, Akdeniz'in en verimli tarım alanlarından biri. Portakal, nar ve avokado bahçeleri arasında bisiklet turları düzenleniyor. Her yıl şubat ayında düzenlenen <strong>Finike Portakal Festivali</strong>, 50 bin ziyaretçi çekiyor.</p>
        <ul>
            <li><strong>Yöresel Ürünler:</strong> Finike portakalı, avokado yağı, kekik balı</li>
            <li><strong>Aktiviteler:</strong> Yat turları ile Demre ve Kekova keşfi</li>
            <li><strong>Plajlar:</strong> Mavi bayraklı Finike Halk Plajı ve Sülüklü Koyu</li>
        </ul>
    </section>

    <section>
        <h2>Modern Turizm ve Altyapı</h2>
        <p>Finike Marina, 300 yat kapasitesi ve modern olanaklarıyla mavi yolculuk tutkunlarını ağırlıyor. <strong>5 yıldızlı resortlar</strong>, golf sahaları ve organik SPA merkezleriyle lüks turizme hizmet veriyor.</p>
    </section>
</article>