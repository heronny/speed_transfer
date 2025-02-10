<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">TİTREYENGÖL: Işıltılı Suyun Büyüsü</h1>
    
    <section>
        <h2>Göl ve Çevresi</h2>
        <p><strong>Titreyengöl</strong>, 18 hektarlık yüzey alanıyla Türkiye'nin tek mikro-klimat lagünü. 1.5 metre ortalama derinliği olan gölde cam tabanlı teknelerle su altı bitki örtüsünü izleyin.</p>
        <p><strong>Kumluca Caddesi</strong>'nde 2 km'lik yürüyüş yolunda 150'den fazla butik ve sanat galerisi. Akşamları led aydınlatmalı palmiyeler altında alışveriş keyfi.</p>
    </section>

    <section>
        <h2>Lüks Konaklama</h2>
        <p><strong>5 Yıldızlı Resortlar</strong>'da Thalasso terapili 12.000 m² spa merkezleri. 2023'te açılan "Aqua Mystica" su parkında 43 farklı su kaydırağı bulunuyor.</p>
        <p><strong>Golf Sahası</strong>'nda 18 delikli PGA standartlarında yeşil alan. 7.345 metrelik parkurda profesyonel eğitmenlerden ders alabilirsiniz.</p>
    </section>

    <section>
        <h2>Özel Etkinlikler</h2>
        <p><strong>Uluslararası Işık Festivali</strong>'nde (Ekim ayı) göl yüzeyine yansıtılan 3D mapping gösterileri. 2023'te 45 ülkeden sanatçı katıldı.</p>
        <p><strong>Yat Limanı</strong>'nda 35 m'ye kadar yatların demirleyebildiği marina. Günde 3 kez yapılan "Mavi Tur" ile Caretta yuvalama alanlarını ziyaret edin.</p>
    </section>
</article>