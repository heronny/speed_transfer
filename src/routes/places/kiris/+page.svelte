<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KİRİŞ: Olympos'un Sakin Tatil Beldesi</h1>
    
    <section>
        <h2>Plaj Keyfi</h2>
        <p><strong>Kiriş Plajı</strong>, 1.5 km uzunluğundaki altın kumsalı ve sığ sularıyla aileler için ideal. Mavi Bayraklı bu plajda şezlonglar arasında 8 metre genişlikte yürüyüş koridoru bulunuyor.</p>
        <p><strong>Adrasan Körfezi</strong>'nde tekne turlarıyla Suluada'nın kristal sularında yüzme molası verin. Caretta carettalarla yüzme şansı sunan bu koy, IUCN koruma statüsüne sahip.</p>
    </section>

    <section>
        <h2>Arkeolojik Miras</h2>
        <p><strong>Faselis Antik Kenti</strong>'nin MÖ 7. yüzyıldan kalma üç limanını keşfedin. 20 metre genişliğindeki ana cadde, Roma hamamı kalıntıları ve 2.500 kişilik tiyatro görülmesi gereken noktalar.</p>
    </section>

    <section>
        <h2>Doğa Macerası</h2>
        <p><strong>Olympos Beydağları Milli Parkı</strong>'nda 12 km'lik Üçoluk-Yayla Kuzdere parkurunda endemik bitkiler eşliğinde trekking yapın. 2.365 rakımlı Tahtalı Dağı'na teleferikle 10 dakikada çıkabilirsiniz.</p>
    </section>
</article>