<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KAŞ: Akdeniz'in Dalış Cenneti</h1>
    
    <section>
        <h2>Sualtı Hazineleri</h2>
        <p><strong>Batık DC-3 Uçağı</strong>, 18 metre derinlikte dalgıçları bekleyen etkileyici bir enkaz. 1996'da batan uçak, renkli deniz canlılarıyla kaplı bir yaşam alanına dönüştü.</p>
        <p><strong>Mağara Dalışları:</strong> Büyük Ağırlık Mağarası'nda 40 metreye kadar inerek sualtı sarkıtlarını keşfedin.</p>
    </section>

    <section>
        <h2>Tarih ve Kültür</h2>
        <p><strong>Antiphellos Antik Kenti</strong>'nin 4.000 kişilik tiyatrosu, Likya dönemi taş işçiliğinin en iyi örneklerinden. MS 1. yüzyıla tarihlenen <strong>Lion Tomb</strong> (Aslanlı Mezar) ise kaya mezarlarının görkemli bir temsili.</p>
    </section>

    <section>
        <h2>Doğa Sporları</h2>
        <p><strong>Kaputaş Plajı</strong>'na 187 basamak inerek ulaşın. Turkuaz sular ve iki yanı sarp kayalıklarla çevrili bu koy, fotoğraf tutkunları için ideal.</p>
        <p><strong>Likya Yolu</strong>'nun 20 km'lik Kaş-Kekova etabı, antik kalıntılar ve zeytin ağaçları eşliğinde unutulmaz bir yürüyüş deneyimi sunar.</p>
    </section>
</article>