<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KIZILOT: Doğanın ve Huzurun Buluştuğu Sahil</h1>
    
    <section>
        <h2>Plajlar ve Doğal Güzellikler</h2>
        <p><strong>Kızılot</strong>, Antalya'nın Manavgat ilçesine bağlı, 6 km'lik altın kumsalı ve mavi bayraklı sularıyla ünlü bir sahil beldesi. 2023 verilerine göre yılda 200 bin turist ağırlayan bölge, özellikle ailelerin tercih ettiği bir cennet. <strong>Kızılot Plajı</strong>'nın sığ suları, çocuklu ailelerin güvenle yüzebilmesi için mükemmel.</p>
        
        <p><strong>Kızılot Ormanı</strong>, 150 hektarlık alanı kaplayan çam ağaçlarıyla dolu bir doğa harikası. Orman içindeki 7 km'lik yürüyüş parkuru, kuş gözlemcileri ve doğa fotoğrafçıları için harika bir deneyim sunuyor.</p>
    </section>

    <section>
        <h2>Modern Turizm ve Aktivite</h2>
        <p>Bölgedeki <strong>5 yıldızlı resortlar</strong>, all-inclusive konseptiyle hizmet veriyor. <strong>Kızılot Beach Resort</strong>, özel plajı, 10 restoranı ve 24 saat açık spa merkeziyle lüks turizmin öncüsü. 2022'de "En İyi Aile Oteli" ödülünü alan tesis, çocuklu aileler için özel aktivite programları sunuyor.</p>
        <ul>
            <li><strong>Su Sporları:</strong> Jet ski, parasailing ve banana gezintileri</li>
            <li><strong>Doğa Yürüyüşü:</strong> Likya Yolu'nun 10 km'lik Kızılot etabı</li>
            <li><strong>Kültürel Etkinlikler:</strong> Yıllık Kızılot Zeytin Festivali</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandır kebabı, kabak çiçeği dolması ve sakızlı dondurma</li>
        </ul>
    </section>

    <section>
        <h2>Ekolojik Denge ve Koruma</h2>
        <p>Kızılot sahilindeki 12 km'lik <strong>caretta caretta yuvalama alanı</strong>, 2022'de 1.500 yuva ile rekor kırdı. <strong>Deniz Kaplumbağaları Araştırma Merkezi</strong>, ziyaretçilere yumurtlama döneminde rehberli gezi imkanı sunuyor.</p>
    </section>
</article>