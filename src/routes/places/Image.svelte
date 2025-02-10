<script>
    import { page } from '$app/state'

    let { places } = $props();
    let place = places.find(obj => "/places/" + obj.link == page.url.pathname);

    const ext = ".png";
    const images = import.meta.glob('$lib/images/places/antalya/*', 
    { 
        eager: true, 
        query: 
            { 
                enhanced: true 
            } 
    });

    const img = Object.entries(images).find(([ path, module], i) => {
        let _path = path.split('/')
        return _path[_path.length - 1] == place.link + ".png"
    })
</script>

<div class="w-full flex flex-col items-center p-4">
    <enhanced:img src={img[1].default} alt={place.name} class="w-full"/>
</div>
