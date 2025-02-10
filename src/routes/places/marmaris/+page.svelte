<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">MARMARİS: Ege ile Akdeniz'in Kucaklaştığı Nokta</h1>
    
    <section>
        <h2>Tarihi Limanın Modern Yüzü</h2>
        <p>MÖ 3.500'lere uzanan tarihiyle <strong>Physkos</strong> antik kentinin üzerinde yükselen Marmaris, 1522'de Kanuni Sultan Süleyman'ın Rodos Seferi için yeniden inşa ettirdiği kalesiyle ünlü. 18 metrelik surları ve 7 burcuyla 2023'te 950 bin ziyaretçi ağırlayan kale, müze olarak hizmet veriyor.</p>
        
        <p><strong>Marmaris Marina</strong>, 750 yat kapasitesi ve 12 restoranıyla Türkiye'nin en büyük marina komplekslerinden. 2022'de düzenlenen <strong>Marmaris Yat Festivali</strong>'ne 45 ülkeden 300 tekne katıldı.</p>
    </section>

    <section>
        <h2>Doğal Cennetler</h2>
        <p><strong>İçmeler Koyu</strong>'nun şifalı suları, romatizma tedavisinde kullanılıyor. 2 km'lik yürüyüş parkuru, çam ormanları ve zeytin ağaçları arasında nefes kesici manzaralar sunar.</p>
        
        <p><strong>Dalyan Deltası</strong>'ndaki 5.5 km'lik <strong>İztuzu Plajı</strong>, caretta carettaların en önemli yuvalama alanı. 2023'te 1.200 yuva kaydedilen plaj, UNESCO tarafından koruma altında.</p>
    </section>
</article>