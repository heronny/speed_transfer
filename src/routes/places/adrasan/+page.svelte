<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />

    <h1 itemprop="name">ADRASAN: Mitoloji ve Doğanın Büyüleyici Dansı</h1>
    
    <section>
        <h2>Saklı Cennetin Sırları</h2>
        <p><strong>Adrasan</strong>, Toros Dağları'nın eteklerinde yer alan ve 2 km'lik hilal şeklindeki kumsalıyla ünlü bir doğa harikası. <strong>Çıralı Plajı</strong>, caretta carettaların ana yuvalama alanlarından biri olarak 2023'te 1.800 yuva ile rekor kırdı. Plajın arkasındaki <strong>Yanartaş (Chimera)</strong>, mitolojideki "sönmeyen ateş" efsanesiyle ziyaretçileri büyülüyor.</p>
        
        <p><strong>Olympos Antik Kenti</strong>'nin kalıntıları arasında yürürken, Likya uygarlığının izlerini keşfedin. MS 2. yüzyıla tarihlenen tiyatro ve lahitler, antik dönemin ihtişamını yansıtıyor.</p>
    </section>

    <section>
        <h2>Macera ve Huzur Bir Arada</h2>
        <p>Adrasan, doğa sporları tutkunları için bir cennet:</p>
            <ul>
                <li><strong>Trekking:</strong> Likya Yolu'nun 8 km'lik Adrasan-Olympos etabı</li>
                <li><strong>Tekne Turları:</strong> Suluada ve Sazak Koyu'na günübirlik keşif</li>
                <li><strong>Kamp:</strong> Ağaç evlerde veya çadırlarla doğayla iç içe konaklama</li>
            </ul>

    </section>

    <section>
        <h2>Yöresel Lezzetler ve Konaklama</h2>
        <p><strong>Adrasan Balık Restoranları</strong>'nda taze levrek ve ahtapot ızgara mutlaka denenmeli. <strong>Taş Ev Pansiyonlar</strong>'da konaklayarak köy kahvaltısı ve organik reçellerin tadını çıkarın. Bölgedeki <strong>Yörük Köyü</strong>'nde el dokuma kilim atölyelerini ziyaret edebilirsiniz.</p>
    </section>
</article>