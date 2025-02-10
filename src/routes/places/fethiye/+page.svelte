<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">FETHİYE: Mavi Yolculuğun Kalbi</h1>
    
    <section>
        <h2>Doğanın ve Tarihin Epik Buluşması</h2>
        <p>Likya uygarlığının önemli liman kenti <strong>Telmessos</strong>'un üzerine kurulu Fethiye, MÖ 5. yüzyıldan beri Akdeniz'in en stratejik noktalarından biri. <strong>Amintas Kral Mezarı</strong>'nın 8 metrelik iyonik cephesi, Helenistik dönem taş işçiliğinin şaheseri. 2023 verilerine göre yılda 2.3 milyon turist ağırlayan bölge, 12 Adalar turuyla ünlü.</p>
        
        <p><strong>Ölüdeniz Lagünü</strong>, 1975 metre yüksekliğindeki Babadağ'dan yapılan yamaç paraşütü atlayışlarıyla dünya çapında tanınıyor. 2006'da "Dünyanın En Güzel Plajı" seçilen Belcekız Koyu, turkuaz suları ve 2 km'lik kumsalıyla göz kamaştırıyor.</p>
    </section>

    <section>
        <h2>Antik Likya'nın İzinde</h2>
        <p><strong>Kayaköy Hayalet Köyü</strong>, 1923 nüfus mübadelesinde terk edilen 350 Rum eviyle adeta zamanda donmuş. 2014'te UNESCO Dünya Mirası Geçici Listesi'ne alınan köy, 4 km'lik taş döşemeli yollarla keşfedilebilir.</p>
        
        <p><strong>Tlos Antik Kenti</strong>'ndeki 3.500 kişilik stadyum ve kanatlı at Pegasus kabartmalı lahit, Likya mitolojisine ışık tutuyor. MS 2. yüzyıla tarihlenen kent, 2019 kazılarında ortaya çıkarılan gladyatör mezarlarıyla arkeoloji dünyasını heyecanlandırdı.</p>
    </section>

    <section>
        <h2>Doğa Sporları ve Aktivite</h2>
        <p><strong>Saklıkent Kanyonu</strong>'nda 18 km'lik parkurda trekking ve rafting yapılabilir. 300 metre yüksekliğindeki kanyon duvarları arasında 4°C'deki sular, yaz sıcağında serinleme fırsatı sunar.</p>
        <ul>
            <li><strong>Butterfly Valley:</strong> 80 kelebek türünün yaşadığı 350 metrelik vadi</li>
            <li><strong>Gemile Adası:</strong> Bizans dönemi kilise kalıntıları ve kristal berraklığında deniz</li>
        </ul>
    </section>
</article>