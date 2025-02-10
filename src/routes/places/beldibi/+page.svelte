<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">BELDİBİ: Doğa ve Macera Dolu Bir Kaçış</h1>
    
    <section>
        <h2>Tarih Öncesinin İzleri</h2>
        <p><strong>Beldibi Mağarası</strong>, MÖ 20.000 yılına uzanan tarihiyle Paleolitik döneme ait önemli bir arkeolojik alan. 1956'da keşfedilen mağarada bulunan kaya resimleri ve taş aletler, ilk insanların bölgedeki yaşamına dair ipuçları sunuyor. 2020'de UNESCO Geçici Miras Listesi'ne alınan mağara, arkeoloji meraklıları için vazgeçilmez bir durak.</p>
        
        <p>Mağaranın 150 metre derinliğindeki galerilerde, <strong>av sahneleri</strong> ve soyut sembollerle bezenmiş duvar resimleri dikkat çekiyor. Kazılarda ortaya çıkarılan obsidien aletler, bölgenin antik ticaret yollarındaki rolünü kanıtlıyor.</p>
    </section>

    <section>
        <h2>Doğanın Cömertliği</h2>
        <p><strong>Göynük Kanyonu</strong>, Beldibi'nin 3 km kuzeyinde yer alan ve 14 km'lik rafting parkuruyla macera tutkunlarını cezbediyor. Kanyonun dar geçitlerinde 200 metrelik şelaleler ve endemik bitki türleri, doğa fotoğrafçıları için ideal bir ortam sunuyor. 2023 verilerine göre yılda 100 bin ziyaretçi ağırlayan kanyon, Türkiye'nin en popüler rafting rotalarından biri.</p>
        
        <p>Beldibi sahilinin 4 km'lik kumsalı, mavi bayraklı suları ve sakin atmosferiyle ailelerin gözdesi. <strong>Kızkumu Plajı</strong>'nın efsanesine göre, denize dökülen kumlar antik bir aşk hikayesinin izlerini taşıyor.</p>
    </section>

    <section>
        <h2>Konaklama ve Aktivite</h2>
        <p>Beldibi'deki <strong>Robinson Club Pamfilya</strong>, 1978'den beri hizmet veren Türkiye'nin ilk all-inclusive oteli. 12 hektarlık botanik bahçesi ve 3 özel plajıyla dikkat çeken tesis, 2022'de "En İyi Eko-Otel" ödülünü aldı.</p>
        
        <ul>
            <li><strong>Su Sporları:</strong> Rafting, kano ve jet ski</li>
            <li><strong>Doğa Yürüyüşü:</strong> Likya Yolu'nun 8 km'lik Beldibi etabı</li>
            <li><strong>Kültürel Etkinlikler:</strong> Yıllık Beldibi Taş Heykel Sempozyumu</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandırda pişirilen kuzu eti ve sakızlı muhallebi</li>
        </ul>
    </section>
</article>