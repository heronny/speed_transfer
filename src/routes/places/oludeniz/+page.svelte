<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">ÖLÜDENİZ: Cennetin Yeryüzündeki İz Düşümü</h1>
    
    <section>
        <h2>Doğanın Mucizesi</h2>
        <p>3 km'lik lagünü ve 14 km'lik Belcekız Plajı'yla 1988'den beri özel çevre koruma bölgesi. <strong>Mavi Lagün</strong>'ün suları, mikroskobik organizmalar nedeniyle yaz aylarında neon mavisi renge bürünür.</p>
        
        <p><strong>Babadağ</strong>'dan 1.975 metre yükseklikten yapılan yamaç paraşütü atlayışları, 35 dakikalık uçuşla unutulmaz bir deneyim sunar. 2023'te 150 bin kişi bu aktiviteyi deneyimledi.</p>
    </section>

    <section>
        <h2>Kültür ve Macera</h2>
        <p><strong>Faralya Köyü</strong>'nden başlayan 8 km'lik yürüyüş parkuru, 600 metrelik uçurum kenarından Kelebekler Vadisi'ne iner. Vadide 80'den fazla kelebek türü gözlemlenebilir.</p>
        
        <p><strong>Gemiler Adası</strong>'ndaki Bizans dönemi kilise kalıntıları ve freskler, tarih meraklıları için gizli bir hazine. Adanın güneyindeki mağaralar, antik çağlarda gemi sığınakları olarak kullanılmış.</p>
    </section>
</article>