<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">MAHMUTLAR: Tarih ile Modernitenin Uyumu</h1>
    
    <section>
        <h2>Antik Kökler ve Kültürel Miras</h2>
        <p><strong>Mahmutlar</strong>, Alanya'nın doğusunda yer alan ve antik <strong>Laertes</strong> kentinin kalıntıları üzerinde yükselen bir bölge. MÖ 4. yüzyıla tarihlenen kent surları ve sarnıçları, Helenistik dönemin izlerini taşıyor. 2022 kazılarında ortaya çıkarılan <strong>mozaikli hamam</strong>, Roma dönemi yaşamına ışık tutuyor.</p>
        
        <p>Bölgenin sembolü <strong>Mahmutlar Kalesi</strong>, 13. yüzyılda Selçuklular tarafından inşa edildi. 360 derecelik Akdeniz manzarası sunan kale, fotoğraf tutkunları için ideal bir nokta.</p>
    </section>

    <section>
        <h2>Plajlar ve Doğal Zenginlik</h2>
        <p>Mahmutlar'ın 4 km'lik <strong>altın kumsalı</strong>, mavi bayraklı suları ve sakin atmosferiyle ailelerin tercihi. <strong>Dim Çayı</strong>'nın denize döküldüğü noktada oluşan tatlı-tuzlu su karışımı, özel ekosistemiyle dalgıçların ilgisini çekiyor.</p>
        
        <p><strong>Dim Mağarası</strong>, 360 metrelik uzunluğu ve 15 metre yüksekliğiyle Türkiye'nin en büyük ikinci mağarası. İçindeki sarkıt ve dikitler, milyonlarca yıllık jeolojik tarihi yansıtıyor.</p>
    </section>

    <section>
        <h2>Modern Yaşam ve Turizm</h2>
        <p>Mahmutlar'daki <strong>Alışveriş Caddeleri</strong>, uluslararası markalardan el yapımı ürünlere kadar geniş bir yelpaze sunuyor. <strong>Mahmutlar Pazarı</strong>'nda yerel üreticilerin organik sebze-meyveleri ve Yörük kilimleri satılıyor.</p>
        <ul>
            <li><strong>Konaklama:</strong> 5 yıldızlı otellerden butik pansiyonlara kadar seçenekler</li>
            <li><strong>Aktiviteler:</strong> Jeep safari ile Toros köylerini keşif</li>
            <li><strong>Lezzetler:</strong> Tandırda pişen testi kebabı ve nar ekşili salata</li>
        </ul>
    </section>
</article>