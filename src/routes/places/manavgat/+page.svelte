<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">MANAVGAT: Şelaleler ve Tarihin Buluştuğu Kent</h1>
    
    <section>
        <h2>Doğal Mucizeler</h2>
        <p><strong>Manavgat Şelalesi</strong>, 5 metrelik düşüş yüksekliğiyle saniyede 150 m³ su akıtıyor. 1986'dan beri 1. Derece Doğal Sit Alanı olan bölgede tekne turlarıyla şelalenin etkileyici gürültüsünü deneyimleyin.</p>
        <p><strong>Green Canyon</strong>'da 27 km uzunluğundaki yapay gölde elektrikli tekneyle gezin. 400 metre yükseklikteki Uçansu Şelalesi'ni drone ile fotoğraflama imkanı.</p>
    </section>

    <section>
        <h2>Tarihi Miras</h2>
        <p><strong>Side Antik Kenti</strong>'nin MS 2. yüzyıldan kalma 15.000 kişilik tiyatrosu, Anadolu'nun en iyi korunmuş Roma yapılarından. 200 metre uzunluğundaki sütunlu cadde üzerinde Apollon Tapınağı'nın 6 sütunu hala ayakta.</p>
        <p><strong>Manavgat Çarşısı</strong>'nda 500'ü aşkın dükkanda yerel dokuma halıları ve narenciye ürünleri satın alın. 1914'ten beri faaliyet gösteren tarihi bedesten binası görülmeye değer.</p>
    </section>

    <section>
        <h2>Tarım ve Lezzet</h2>
        <p><strong>Türkiye'nin muz üretiminin %40'ı</strong> Manavgat'ın 8.500 dönümlük seralarından sağlanıyor. Ekim ayında düzenlenen <strong>Uluslararası Manavgat Altın Portakal Festivali</strong>'nde 50 çeşit yerel ürün tatma şansı.</p>
    </section>
</article>
