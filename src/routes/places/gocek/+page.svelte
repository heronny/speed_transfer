<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">GÖCEK: Mavi Yolculuğun Lüks Başkenti</h1>
    
    <section>
        <h2>Dünya Standartlarında Marinalar</h2>
        <p><strong>Göcek Marina</strong>, 750 yat kapasitesi ve 24 saat hizmet veren teknik altyapısıyla Akdeniz'in en prestijli limanlarından. 2023'te düzenlenen <strong>Göcek Yat Festivali</strong>'ne 35 ülkeden 200 lüks tekne katıldı. Marinanın çevresindeki <strong>tasarımcı butikler</strong> ve Michelin yıldızlı restoranlar, VIP misafirler için özel deneyimler sunuyor.</p>
        
        <p><strong>12 Adalar Turu</strong>, Göcek'ten kalkan teknelerle yapılan ve Tersane Adası, Yassıcalar gibi gizli koyları keşfeden unutulmaz bir rota. Tur kapsamında su altı arkeoloji parkında antik amforalar görülebilir.</p>
    </section>

    <section>
        <h2>Lüks Konaklama ve SPA</h2>
        <p><strong>D-Marin Göcek Resort</strong>, özel plajı, 5 restoranı ve 2.500 m²'lik thalasso merkeziyle Türkiye'nin en lüks tesislerinden. 2022'de "Avrupa'nın En İyi Marina Oteli" seçilen resort, helikopter pisti ve özel şarap mahzeniyle dikkat çekiyor.</p>
        <ul>
            <li><strong>Su Sporları:</strong> Özel yatlarla günübirlik keşif turları</li>
            <li><strong>Golf:</strong> PGA standartlarında 18 delikli saha</li>
            <li><strong>Gastronomi:</strong> Deniz ürünleri ve zeytinyağlı mezeler</li>
        </ul>
    </section>

    <section>
        <h2>Ekolojik Koruma ve Sürdürülebilirlik</h2>
        <p>Göcek Körfezi, 1988'den beri <strong>Özel Çevre Koruma Bölgesi</strong> statüsünde. Marinalarda atık su arıtma sistemleri ve elektrikli tekne şarj istasyonlarıyla çevre dostu turizm destekleniyor.</p>
    </section>
</article>