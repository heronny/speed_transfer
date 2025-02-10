<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">ÇIRALI: Carettaların ve Ateşin Dans Ettiği Koy</h1>
    
    <section>
        <h2>Doğal Harikalar</h2>
        <p><strong>Yanartaş (Chimera)</strong>'da 2.500 yıldır sönmeyen doğal gaz alevlerini gece keşfedin. Deniz seviyesinden 185 m yükseklikteki kayalıklarda 18 aktif alev noktası bulunuyor.</p>
        <p><strong>Caretta Caretta Yuvalama Alanı</strong> olan 3.2 km'lik kumsal, IUCN kırmızı listesindeki bu canlılar için Mayıs-Eylül arasında ışık kısıtlaması uyguluyor. Yuvalama döneminde 23:00-05:00 arası plaj erişimi kapalı.</p>
    </section>

    <section>
        <h2>Tarihi Kalıntılar</h2>
        <p><strong>Olympos Antik Kenti</strong>'nin MS 2. yüzyıldan kalma liman kalıntıları arasında yürüyün. Likya Birliği'nin 6 büyük kentinden biri olan bölgede, 1.500 kişilik tiyatroda hala konserler düzenleniyor.</p>
        <p><strong>Kaptan Eudomus Lahdi</strong>'nde denizci motifli kabartmaları inceleyin. 4.5 ton ağırlığındaki bu Roma dönemi eser, antik nekropol alanının girişinde sergileniyor.</p>
    </section>

    <section>
        <h2>Ekoturizm ve Aktivite</h2>
        <p><strong>Ulupınar Deresi</strong>'nde 8 km'lik kanyon yürüyüşü yaparak 12 metrelik şelalede serinleyin. Su sıcaklığı yazın bile 14°C'yi geçmeyen buz gibi kaynak suları meşhur.</p>
        <p><strong>Likya Yolu</strong>'nun 7. etap başlangıç noktasından Tahtalı Dağı'na 16 km'lik trekking rotası. 2.365 m'lik zirvede teleferikle 10 dakikada inebilirsiniz.</p>
    </section>

    <section>
        <h2>Yöresel Lezzetler</h2>
        <p><strong>Çıralı Köy Kahvaltısı</strong>'nda dağ kekiği balı ve köy peyniri deneyin. Organik nar ekşisiyle tatlandırılan "Alev Salatası" yerel bir icat.</p>
        <p><strong>Portakal Reçelli Gözleme</strong> için Çıralı Pazarı'ndaki 50 yıllık tezgahları ziyaret edin. Yöreye özgü "Sığla Yağı" sabunlarından satın almayı unutmayın.</p>
    </section>
</article>