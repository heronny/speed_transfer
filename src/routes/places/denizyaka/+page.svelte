<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">DENİZYAKA: Saklı Koyların Huzur Dolu Sığınağı</h1>
    
    <section>
        <h2>Doğanın İçinde Bir Kaçış</h2>
        <p><strong>Denizyaka</strong>, Antalya'nın Kaş ilçesine bağlı, 3 km'lik bakir kumsalı ve zümrüt sularıyla ünlü bir sahil beldesi. 2023 verilerine göre yılda 150 bin ziyaretçi ağırlayan bölge, özellikle sakin tatil arayanlar ve doğaseverler için ideal. <strong>Denizyaka Plajı</strong>'nın sığ suları, çocuklu ailelerin güvenle yüzebilmesi için mükemmel.</p>
        
        <p><strong>Kekova Adası</strong>'na 20 dakikalık tekne mesafesindeki Denizyaka, antik batık şehir kalıntılarıyla çevrili. Su altında görülebilen merdivenler ve amforalar, tarihle doğanın iç içe geçtiği bir deneyim sunuyor.</p>
    </section>

    <section>
        <h2>Aktiviteler ve Konaklama</h2>
        <ul>
            <li><strong>Tekne Turları:</strong> Batık Şehir, Simena Kalesi ve Tersane Koyu keşfi</li>
            <li><strong>Dalış:</strong> Sualtı arkeoloji parkında antik eserleri görme şansı</li>
            <li><strong>Konaklama:</strong> Butik taş oteller ve ağaç evler</li>
            <li><strong>Lezzetler:</strong> Taze levrek ızgara ve köy usulü ot kavurması</li>
        </ul>
    </section>

    <section>
        <h2>Ekolojik Denge ve Koruma</h2>
        <p>Bölge, <strong>Özel Çevre Koruma Alanı</strong> statüsünde. Denizyaka sahilindeki 2 km'lik kumsal, caretta carettaların yuvalama alanı olarak 2023'te 300 yuva kaydetti. Otellerin ışıklandırmaları, yavruların denize yönelmesini sağlamak için özel olarak filtrelenmiş.</p>
    </section>
</article>