<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    
    <h1 itemprop="name">TÜRKLER: Lüks Turizmin ve Doğanın Uyumu</h1>
    
    <section>
        <h2>Plajlar ve Doğal Güzellikler</h2>
        <p><strong>Türkler</strong>, 6 km'lik <strong>altın kumsalı</strong> ve mavi bayraklı sularıyla Antalya'nın en popüler turizm bölgelerinden biri. Plaj boyunca uzanan şemsiyeli şezlonglar ve beach club'lar, gün boyu eğlence vaat ediyor. <strong>Türkler Burnu</strong>'ndaki kayalıklar, şnorkelle yüzerek renkli balık sürülerini gözlemlemek için ideal.</p>
        
        <p>Bölgenin 2 km batısındaki <strong>Kargıcak Koyu</strong>, sakin atmosferi ve berrak sularıyla özellikle ailelerin tercih ettiği bir cennet. Koyda düzenlenen <strong>tekne turları</strong>, çevredeki mağaraları ve koyları keşfetme fırsatı sunuyor.</p>
    </section>

    <section>
        <h2>Lüks Konaklama ve Aktivite</h2>
        <p>Türkler'deki <strong>5 yıldızlı resortlar</strong>, all-inclusive konseptiyle dünya standartlarında hizmet veriyor. <strong>Xanadu Resort Hotel</strong>, özel plajı, 12 restoranı ve 24 saat açık spa merkeziyle lüks turizmin öncüsü. 2022'de "En İyi Aile Oteli" ödülünü alan tesis, çocuklu aileler için özel aktivite programları sunuyor.</p>
        
        <ul>
            <li><strong>Su Sporları:</strong> Jet ski, parasailing ve banana gezintileri</li>
            <li><strong>Doğa Yürüyüşü:</strong> Likya Yolu'nun 10 km'lik Türkler etabı</li>
            <li><strong>Kültürel Etkinlikler:</strong> Yıllık Türkler Zeytin Festivali</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandır kebabı, kabak çiçeği dolması ve sakızlı dondurma</li>
        </ul>
    </section>

    <section>
        <h2>Ekolojik Denge ve Koruma</h2>
        <p>Türkler sahilindeki 12 km'lik caretta caretta yuvalama alanı, 2022'de 1.500 yuva ile rekor kırdı. <strong>Deniz Kaplumbağaları Araştırma Merkezi</strong>, ziyaretçilere yumurtlama döneminde rehberli gezi imkanı sunuyor.</p>
    </section>
</article>