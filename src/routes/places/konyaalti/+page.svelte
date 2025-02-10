<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">ÇOLAKLI: Sessizliğin ve Huzurun Adresi</h1>
    
    <section>
        <h2>Doğanın Kucağında Bir Kaçamak</h2>
        <p>Antalya'nın gözde turizm bölgelerinden <strong>Çolaklı</strong>, 12 km'lik bakir kumsalı ve berrak sularıyla özellikle sakin tatil arayanlar için ideal bir destinasyon. 2023 verilerine göre yılda 500 bin turist ağırlayan bölge, mavi bayraklı plajları ve çevre dostu otelleriyle öne çıkıyor.</p>
        
        <p><strong>Kurşunlu Şelalesi</strong>, Çolaklı'nın 5 km doğusunda yer alan ve 18 metrelik yükseklikten dökülen etkileyici bir doğa harikası. Şelale çevresindeki 7 km'lik yürüyüş parkuru, zengin bitki örtüsü ve kuş türleriyle doğa severleri cezbediyor.</p>
    </section>

    <section>
        <h2>Tarihin İzleri</h2>
        <p>Bölgede bulunan <strong>Lyrboton Kome</strong> antik kenti, Roma dönemine ait zeytin işleme tesisleriyle ünlü. 2021 kazılarında ortaya çıkarılan mozaikler ve su kanalları, antik çağlardaki tarım tekniklerine ışık tutuyor. Kentin 2. yüzyıla tarihlenen agora kalıntıları, ziyaretçilere tarihle iç içe bir deneyim sunuyor.</p>
    </section>

    <section>
        <h2>Konaklama ve Aktivite</h2>
        <p>Çolaklı'daki otellerin %70'i all-inclusive konseptle hizmet veriyor. <strong>Titanic Beach Lara</strong> gibi devasa tatil köyleri, aquaparkları ve 24 saat açık restoranlarıyla aile tatilleri için ideal. Bölgedeki <strong>Green Canyon</strong> (Yeşil Kanyon) turu, 14 km'lik göl üzerinde tekne gezisiyle unutulmaz anılar biriktirme fırsatı sunuyor.</p>
        
        <ul>
            <li><strong>Su Sporları:</strong> Jet ski, parasailing ve banana gezintileri</li>
            <li><strong>Doğa Yürüyüşü:</strong> Toros Dağları'nın eteklerinde 10 km'lik trekking parkuru</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandır kebabı ve kabak çiçeği dolması</li>
        </ul>
    </section>
</article>