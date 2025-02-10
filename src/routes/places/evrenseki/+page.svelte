<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    <h1 itemprop="name">EVRENSEKİ: Golf ve Doğanın Uyumu</h1>
    
    <section>
        <h2>Golfün Olimpiyat Sahaları</h2>
        <p>Antalya'nın gözde turizm bölgelerinden <strong>Evrenseki</strong>, 2005 yılında açılan <strong>Gloria Golf Resort</strong> ile uluslararası ün kazandı. 45 delikli golf sahası, PGA European Tour'a ev sahipliği yaparak dünya çapında golf severlerin ilgisini çekiyor. 2023'te düzenlenen <strong>Turkish Airlines Open</strong>'a 30 ülkeden 150 profesyonel golfçü katıldı.</p>
        
        <p><strong>Montgomerie Maxx Royal</strong> golf sahası, 7.234 metre uzunluğu ve 18 deliğiyle Avrupa'nın en zorlu parkurlarından biri kabul ediliyor. Sahadaki doğal göller ve çam ormanları, golf oynarken eşsiz bir manzara sunuyor.</p>
    </section>

    <section>
        <h2>Termal Keyif ve Sağlık Turizmi</h2>
        <p>Evrenseki'nin 42°C termal kaynakları, romatizma ve cilt hastalıklarının tedavisinde kullanılıyor. <strong>Gloria Serenity Resort</strong>'un termal spa merkezinde, Osmanlı hamamı ritüelleri ve argan yağı terapileri sunuluyor. 2022'de 50 bin kişi bu merkezden yararlandı.</p>
        
        <p>Bölgedeki otellerin %85'i <strong>ECARF</strong> (Avrupa Alerji Araştırma Vakfı) sertifikalı hypoalerjenik odalar sunarak sağlık turizmine önemli bir katkı sağlıyor.</p>
    </section>

    <section>
        <h2>Doğal Güzellikler ve Aktivite</h2>
        <p><strong>Toros Dağları</strong>'nın eteklerinde yer alan Evrenseki, doğa yürüyüşü ve bisiklet tutkunları için ideal. 15 km'lik <strong>Göynük Kanyonu</strong> yürüyüş parkuru, 200 metrelik şelaleler ve endemik bitki türleriyle dikkat çekiyor.</p>
        
        <ul>
            <li><strong>Su Sporları:</strong> Göynük Kanyonu'nda rafting ve kano</li>
            <li><strong>Yöresel Lezzetler:</strong> Tandır kebabı ve kabak çiçeği dolması</li>
            <li><strong>Kültürel Etkinlikler:</strong> Yıllık Evrenseki Zeytin Festivali</li>
        </ul>
    </section>
</article>