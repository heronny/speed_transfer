<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KUNDU: Fantastik Dünyaların Kapısı</h1>
    
    <section>
        <h2>Devasa Bir Eğlence Evreni</h2>
        <p>2016'da 1.5 milyar TL yatırımla açılan <strong>The Land of Legends</strong>, 40 futbol sahası büyüklüğündeki alanıyla dünyanın en büyük tema parkları arasında. 5D sinema deneyiminden 95 metrelik serbest düşüş kulesine kadar 125 aktivite sunan park, 2023'te 4.2 milyon ziyaretçiyle rekor kırdı. <strong>Kingdom Hotel</strong>'in 456 odasından doğrudan su parkına geçiş imkanı, aileler için benzersiz bir konfor sağlıyor.</p>
        
        <p>Geceleri düzenlenen <strong>Işık ve Su Gösterileri</strong>, 35 lazer projektör ve 200 su jeti kullanılarak 45 dakikalık epik bir anlatıma dönüşüyor. 2022'de eklenen <strong>Winter Legends</strong> bölümü, yapay karda kayak keyfi sunarak Aralık-Ocak aylarında turizm sezonunu uzatıyor.</p>
    </section>

    <section>
        <h2>Lüksün Yeni Standartları</h2>
        <p><strong>Rixos Premium Belek</strong>, 11 restoranı ve 750 metrelik özel plajıyla 2023'te "Dünyanın En İyi Aile Oteli" seçildi. Otelin <strong>Lalezar Spa</strong>'sında Osmanlı hamam ritüelleri ve argan yağı terapileri sunuluyor. 2021'de açılan <strong>Titanic Deluxe Golf Resort</strong> ise PGA standartlarındaki 18 delikli sahasıyla golf severleri cezbediyor.</p>
    </section>

    <section>
        <h2>Ekolojik Denge ve Sürdürülebilirlik</h2>
        <p>Kundu Nehri Deltası'ndaki 158 kuş türü, 2020'den beri <strong>Ramsar Sözleşmesi</strong> kapsamında korunuyor. Bölgedeki otellerin %85'i atık su arıtma sistemi kullanırken, <strong>Caretta Koruma Projesi</strong> kapsamında 3.2 km'lik sahil şeridi yuvalama alanı ilan edildi.</p>
    </section>
</article>