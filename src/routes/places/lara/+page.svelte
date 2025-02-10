<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">LARA: Lüks Turizmin ve Doğanın Buluşma Noktası</h1>
    
    <section>
        <h2>Düden Şelalesi'nin Gölgesinde Bir Cennet</h2>
        <p><strong>Lara</strong>, 12 km'lik kumsalı ve devasa lüks otelleriyle Türkiye'nin en prestijli turizm bölgelerinden. <strong>Düden Şelalesi</strong>, Lara'nın 5 km batısında yer alıyor. 40 metrelik yükseklikten dökülen sular, özellikle gün batımında büyüleyici bir manzara sunuyor.</p>
        
        <p><strong>Lara Kum Tepeleri</strong>, çöl atmosferi yaratan 50 metrelik kumul oluşumlarıyla fotoğrafçıların gözdesi. Tepelerde sandboarding (kum kaykayı) yapmak, adrenalin tutkunları için popüler bir aktivite.</p>
    </section>

    <section>
        <h2>Lüks Konaklama ve Eğlence</h2>
        <p><strong>The Land of Legends</strong>, 1.3 milyon m² alanda kurulu tema parkı, su kaydırakları ve gece ışık şovlarıyla Lara'nın kalbi. Parkın içindeki <strong>Kingdom Hotel</strong>, odalardan direkt su parkına geçiş imkanı sunuyor.</p>
        <ul>
            <li><strong>5 Yıldızlı Oteller:</strong> Rixos Premium Lara, Titanic Deluxe gibi devasa kompleksler</li>
            <li><strong>Spa ve Wellness:</strong> Thalasso terapi ve Osmanlı hamamı deneyimleri</li>
            <li><strong>Alışveriş:</strong> 200 mağazalı alışveriş caddesi ve lüks butikler</li>
        </ul>
    </section>

    <section>
        <h2>Ekolojik Denge ve Koruma</h2>
        <p>Lara sahilindeki 8 km'lik <strong>caretta caretta yuvalama alanı</strong>, 2023'te 1.650 yuva ile rekor kırdı. Otellerin ışıklandırma sistemleri, yavru kaplumbağaların denize yönelmesini sağlamak için özel filtrelerle donatıldı.</p>
    </section>
</article>