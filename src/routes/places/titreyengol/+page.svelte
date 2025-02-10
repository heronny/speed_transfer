<script>
    import Image from '../Image.svelte';

    let { data } = $props(); 
</script>

<article itemscope itemtype="http://schema.org/Place">
    <Image places={data.places} />    
    <h1 itemprop="name">SORGUN: Çam Kokulu Huzur Durağı</h1>
    
    <section>
        <h2>Doğa ve Plaj</h2>
        <p><strong>Altınkum Plajı</strong>, 1.2 km uzunluğundaki ince taneli kumuyla mavi bayraklı. 3 metre derinliğe kadar çocuklu aileler için güvenli yüzme alanı sunuyor.</p>
        <p><strong>Sorgun Ormanı</strong>'nda 650 hektarlık kızılçamlar arasında 5 km'lik terapötik yürüyüş parkuru. Endemik Anadolu orkidesi (Orchis anatolica) mayıs ayında burada çiçek açıyor.</p>
    </section>

    <section>
        <h2>Kültür ve Aktivite</h2>
        <p><strong>Lyrboton Kome Antik Kenti</strong>'nde MS 2. yüzyıldan kalma zeytinyağı işliklerini gezin. 87 basamaklı antik su sarnıcı hala aktif durumda.</p>
        <p><strong>Manavgat Nehri</strong>'nde 45 dakikalık tekne turuyla Caretta Carettaların beslenme alanlarını görün. UNESCO Biyosfer Rezervi statüsündeki delta 286 kuş türüne ev sahipliği yapıyor.</p>
    </section>

    <section>
        <h2>Yöresel Lezzetler</h2>
        <p><strong>Sorgun Pazarı</strong>'nda her perşembe köy peynirleri ve defne sabunları satın alın. Geleneksel "Gömbe" tatlısını denemeden dönmeyin; cevizli hamur işi 150 yıllık bir tarif.</p>
    </section>
</article>