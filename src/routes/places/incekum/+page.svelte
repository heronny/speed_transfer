<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">İNCEKUM: Kumların ve Denizin Dansı</h1>
    
    <section>
        <h2>Doğal Güzellikler ve Plaj Keyfi</h2>
        <p><strong>İncekum</strong>, adını incecik altın kumlarından alan ve 5 km'lik mavi bayraklı plajıyla ünlü bir turizm bölgesi. Plajın berrak suları, özellikle şnorkelle yüzerek renkli balık sürülerini gözlemlemek isteyenler için ideal. 2023 verilerine göre yılda 600 bin turist ağırlayan bölge, sakin atmosferiyle ailelerin gözdesi.</p>
        
        <p><strong>İncekum Ormanı</strong>, plajın hemen arkasında yer alan ve 150 hektarlık alanı kaplayan çam ağaçlarıyla dolu bir doğa harikası. Orman içindeki 7 km'lik yürüyüş parkuru, kuş gözlemcileri ve doğa fotoğrafçıları için harika bir deneyim sunuyor.</p>
    </section>

    <section>
        <h2>Konaklama ve Aktivite</h2>
        <p>İncekum'daki <strong>butik oteller</strong>, doğayla iç içe bir konaklama deneyimi sunuyor. <strong>İncekum Taş Evleri</strong>'nde sabah kahvaltısında köy yumurtası ve ev yapımı reçeller servis ediliyor. Akşamları ise <strong>İncekum Balık Restoranları</strong>'nda taze levrek ve çupra ızgaraları denenmeli.</p>
        
        <ul>
            <li><strong>Aktiviteler:</strong> Kano, balık tutma, doğa yürüyüşü</li>
            <li><strong>Yöresel Ürünler:</strong> Zeytinyağı, kekik balı, el yapımı sabunlar</li>
            <li><strong>Kültürel Etkinlikler:</strong> Köy festivali ve el sanatları sergileri</li>
        </ul>
    </section>

    <section>
        <h2>Ekolojik Denge ve Koruma</h2>
        <p>İncekum sahilindeki 8 km'lik caretta caretta yuvalama alanı, 2022'de 1.200 yuva ile rekor kırdı. <strong>Deniz Kaplumbağaları Araştırma Merkezi</strong>, ziyaretçilere yumurtlama döneminde rehberli gezi imkanı sunuyor.</p>
    </section>
</article>