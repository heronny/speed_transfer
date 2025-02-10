<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">GÖYNÜK: Doğa ve Maceranın Sınırlarını Zorlayan Bir Cennet</h1>
    
    <section>
        <h2>Torosların Eteklerinde Bir Doğa Harikası</h2>
        <p><strong>Göynük Kanyonu</strong>, 14 km uzunluğu ve 600 metreyi aşan duvar yüksekliğiyle Türkiye'nin en etkileyici jeolojik oluşumlarından biri. 2021'de "Tabiat Parkı" ilan edilen kanyon, yılda 500 bin ziyaretçiyi ağırlıyor. Kanyon içindeki <strong>Göynük Şelalesi</strong>, 45 metrelik düşüşüyle serinlemek isteyenler için ideal bir durak.</p>
        
        <p>2019'da açılan <strong>Göynük Teleferiği</strong>, 4.3 km'lik hattıyla Akdeniz'in en uzun teleferik rotası. 1.750 metre yükseklikteki Beydağları'na çıkan teleferik, 360 derecelik panoramik manzara sunarak fotoğraf tutkunlarını büyülüyor.</p>
    </section>

    <section>
        <h2>Adrenalin ve Huzur Bir Arada</h2>
        <p><strong>Rafting</strong> tutkunları için Göynük Çayı'nda 18 km'lik parkur, 4. derece zorlukta rapitlerle dolu. Profesyonel rehberler eşliğinde düzenlenen turlar, Nisan-Ekim arasında yoğun ilgi görüyor. <strong>Via Ferrata</strong> rotaları ise dağcılık meraklılarını 200 metrelik dik yamaçlarla test ediyor.</p>
        
        <p>Daha sakin bir deneyim için <strong>Göynük Yaylaları</strong>'nda 10 km'lik yürüyüş parkuru, kekik kokulu patikalarda huzur vaat ediyor. Yayla evlerinde konaklayarak geleneksel gözleme ve taze balın tadını çıkarabilirsiniz.</p>
    </section>

    <section>
        <h2>Konaklama ve Yöresel Lezzetler</h2>
        <p>Bölgedeki <strong>butik oteller</strong>, ahşap mimarisi ve doğayla uyumlu tasarımlarıyla dikkat çekiyor. <strong>Göynük Taş Evleri</strong>'nde sabah kahvaltısında köy yumurtası ve ev yapımı reçeller servis ediliyor. Akşamları ise <strong>Göynük Balık Restoranları</strong>'nda levrek ızgara ve deniz börülcesi denenmeli.</p>
        
        <ul>
            <li><strong>Aktiviteler:</strong> Rafting, trekking, bisiklet turları</li>
            <li><strong>Tarihi Noktalar:</strong> Roma dönemi su kemerleri kalıntıları</li>
            <li><strong>Yöresel Ürünler:</strong> Kekik balı, dağ çayı, el yapımı sabunlar</li>
            <li><strong>Gece Hayatı:</strong> Canlı müzik eşliğinde meşhur Göynük kumpiri</li>
        </ul>
    </section>
</article>