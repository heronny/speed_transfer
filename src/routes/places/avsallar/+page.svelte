<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />
    <h1 itemprop="name">AVSALLAR: Tarih, Kum ve Denizin Uyumu</h1>
    
    <section>
        <h2>Antik Limandan Modern Turizme</h2>
        <p><strong>Avsallar</strong>, Alanya'nın batısında yer alan ve antik <strong>Syedra</strong> kentinin kalıntılarına komşu bir sahil beldesi. MS 1. yüzyıla tarihlenen kent surları ve mozaikli villalar, bölgenin Roma dönemindeki önemini gösteriyor. 2023 kazılarında ortaya çıkarılan <strong>gladyatör frizleri</strong>, Syedra Antik Kenti'ni arkeoloji tutkunlarının gözdesi yapıyor.</p>
        
        <p><strong>Avsallar Plajı</strong>, 5 km'lik altın kumsalı ve sığ sularıyla aileler için ideal. Plaj boyunca uzanan şemsiyeli şezlonglar ve beach volley sahaları, gün boyu eğlence vaat ediyor.</p>
    </section>

    <section>
        <h2>Doğal Güzellikler ve Aktivite</h2>
        <p><strong>Dim Çayı</strong>'nın denize döküldüğü noktada oluşan tatlı-tuzlu su ekosistemi, dalgıçlar için benzersiz bir keşif alanı. <strong>Avsallar Ormanı</strong>'ndaki 8 km'lik bisiklet parkuru, çam kokuları eşliğinde doğa severleri bekliyor.</p>
        <ul>
            <li><strong>Su Sporları:</strong> Jet ski, ringo ve parasailing</li>
            <li><strong>Tarihi Keşif:</strong> Syedra Antik Kenti rehberli turları</li>
            <li><strong>Yöresel Lezzetler:</strong> Kabak çiçeği dolması ve susamsız Antalya piyazı</li>
        </ul>
    </section>

    <section>
        <h2>Konaklama ve Alışveriş</h2>
        <p>Bölgedeki <strong>4-5 yıldızlı oteller</strong>, aquaparkları ve çocuk kulüpleriyle ailelere hitap ediyor. <strong>Avsallar Çarşısı</strong>'nda el yapımı takılar, Yörük kilimleri ve taze baharatlar satın alabilirsiniz.</p>
    </section>
</article>