<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">DEMRE: Noel Baba'nın İzinde</h1>
    
    <section>
        <h2>Hristiyanlık Tarihinde Bir Efsane</h2>
        <p><strong>Aziz Nikolaos Kilisesi</strong>, MS 6. yüzyılda inşa edilmiş ve 1087'deki mezar soygununa kadar Noel Baba'nın naaşını barındırmış. Kilisedeki fresklerde Aziz Nikolaos'un hayatı tasvir ediliyor.</p>
        <p>Her yıl 6 Aralık'ta düzenlenen <strong>Noel Baba Festivali</strong>, Hristiyan hacıları ve turistleri bir araya getiriyor.</p>
    </section>

    <section>
        <h2>Arkeolojik Miras</h2>
        <p><strong>Myra Antik Kenti</strong>'nin devasa kaya mezarları, Likya uygarlığının ölüm kültürünü yansıtıyor. MS 2. yüzyıla tarihlenen Roma tiyatrosu ise 11.000 kişi kapasiteli.</p>
    </section>

    <section>
        <h2>Kekova ve Batık Şehir</h2>
        <p><strong>Kekova Adası</strong> çevresindeki tekne turları, su altında kalan antik liman kalıntılarını gözler önüne seriyor. Simena Köyü'nde Orta Çağ kalesinden Akdeniz manzarasını seyredin.</p>
    </section>
</article>