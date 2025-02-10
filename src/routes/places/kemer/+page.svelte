<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">KEMER: Mavi Yolculuğun Çıkış Noktası</h1>
    
    <section>
        <h2>Tarih ve Denizin Dansı</h2>
        <p><strong>Phaselis Antik Kenti</strong>'nin üç limanı arasında yapılan tekne turları, Likya uygarlığının izlerini keşfetme fırsatı sunar. MS 2. yüzyıla tarihlenen <strong>Hadrian Kapısı</strong>, Roma mimarisinin en iyi korunmuş örneklerinden.</p>
        
        <p>2015'te açılan <strong>Kemer Moonlight Aquapark</strong>, 35 su kaydırağı ve 12 bin m²'lik dalga havuzuyla Türkiye'nin en büyük su parkı. Yaz sezonunda günlük 8 bin ziyaretçi ağırlıyor.</p>
    </section>

    <section>
        <h2>Doğal Güzellikler</h2>
        <p><strong>Göynük Kanyonu</strong>'ndaki 6 km'lik yürüyüş parkuru, 200 metrelik şelaleler ve endemik bitki türleriyle doğaseverleri bekliyor. Kanyonun sonundaki <strong>Göynük Şelalesi</strong>, serinlemek için ideal bir mola noktası.</p>
    </section>
</article>