<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">BOĞAZKENT: Carettalar ve Huzurun Buluştuğu Sahil</h1>
    
    <section>
        <h2>Doğal Koruma Alanında Bir Cennet</h2>
        <p><strong>Boğazkent</strong>, 12 km'lik kumsalı ve caretta carettaların en önemli yuvalama alanlarından biri olmasıyla dikkat çekiyor. 2023 verilerine göre 1.400 yuva kaydedilen plaj, <strong>Özel Çevre Koruma Bölgesi</strong> statüsünde. Mayıs-Ekim arasında yavru kaplumbağaların denize yolculuğuna şahit olabilirsiniz.</p>
        
        <p><strong>Boğazkent Kuş Gözlem İstasyonu</strong>, 150'den fazla kuş türünü izleme imkanı sunuyor. Flamingo, yalıçapkını ve balıkçıl sürüleri, fotoğraf tutkunları için muhteşem kareler vaat ediyor.</p>
    </section>

    <section>
        <h2>Modern Turizm ve Aktivite</h2>
        <p>Bölgedeki <strong>5 yıldızlı resortlar</strong>, all-inclusive konseptiyle hizmet veriyor. <strong>Robinson Club Boğazkent</strong>, 3 özel plajı ve 10 restoranıyla 2022'de "En İyi Eko-Otel" seçildi. Aktivite seçenekleri:</p>
        <ul>
            <li><strong>Golf:</strong> PGA standartlarında 18 delikli saha</li>
            <li><strong>Su Sporları:</strong> Şnorkelle dalış ve deniz kayağı</li>
            <li><strong>Kültür:</strong> Yörük köyü ziyaretleri ve el sanatı atölyeleri</li>
        </ul>
    </section>

    <section>
        <h2>Gastronomi ve Yöresel Ürünler</h2>
        <p><strong>Boğazkent Balık Restoranları</strong>'nda taze levrek ve ahtapot ızgaraları denenmeli. <strong>Köy Pazarı</strong>'nda organik nar ekşisi, kekik balı ve zeytinyağı satın alabilirsiniz.</p>
    </section>
</article>