<script>
    import minus from "$lib/images/symbols/minus.svg";
    import plus from "$lib/images/symbols/plus.svg";
    import triangle from "$lib/images/symbols/triangle.svg";

    import { slide } from "svelte/transition";
    import { linear } from "svelte/easing";
    
    let showNumberOfPeople = $state(false);
    let numberOfAdults = $state(1);
    let numberOfChildren = $state(0);

    const decreaseNumberOfAdults = e => {
        e.preventDefault();
        if (numberOfAdults - 1 >= 0) numberOfAdults = --numberOfAdults
    }

    const decreaseNumberOfChildren = e => {
        e.preventDefault();
        if (numberOfChildren - 1 >= 0) numberOfChildren = --numberOfChildren
    }
    
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    
    let meetDateTime = $state(now.toISOString().slice(0,16));
    let leaveDateTime = $state(now.toISOString().slice(0,16));

</script>

<form method="GET" class="flex flex-col items-center tracking-wide gap-y-2 text-sm mt-4">
    <input name=where-by type="text" placeholder="Alınacak yer" class="w-3/4 py-3 pl-3 placeholder:text-sm tracking-wide rounded-md bg-zinc-900 text-white"/>
    <input name=where-to type="text" placeholder="Bırakılacak yer" class="w-3/4 py-3 pl-3 placeholder:text-sm tracking-wide rounded-md bg-zinc-900 text-white"/>

    <button 
        onclick={e => {
            e.preventDefault();
            showNumberOfPeople = !showNumberOfPeople;
        }} 
        aria-label="Show number of people" class="w-3/4 py-3 pl-3 bg-zinc-900 text-gray-400 text-left rounded-md">
        Kişi sayısı     
    </button>
   
    <input name="adult" id="adult" type="hidden" bind:value={numberOfAdults}/>
    <input name="child" id="child" type="hidden" bind:value={numberOfChildren}/>

    {#if showNumberOfPeople}    
        <div class="w-2/3 bg-zinc-800/70 flex flex-col gap-y-6 p-3 mt-4 rounded-md relative text-white" transition:slide={{duration: 150, easing:linear}}>
            <img src={triangle} alt="Adjust number of people tab" class="w-4 h-4 absolute -top-3 left-[calc(50%-0.5rem)]" />

            <label for="adult" class="flex justify-between items-center">
                <span class="">Yetişkin</span>
                <div class="border-zinc-700 border rounded-full flex items-center">
                    <button onclick={e => decreaseNumberOfAdults(e)} class="m-2 active:scale-125 transition-transform duration-200">
                        <img src={minus} alt="Decrease number of adults" class="w-5 h-5"/>
                    </button>
                    <span class="w-10 h-full block text-center text-lg border-x border-zinc-700">{numberOfAdults}</span>
                    <button onclick={e => {e.preventDefault(); numberOfAdults++;}} class="m-2 active:scale-125 transition-transform duration-200">
                        <img src={plus} alt="Increase number of adults" class="w-5 h-5"/>
                    </button>
                </div>
            </label>
            <label for="child" class="flex justify-between items-center">
                <span class="">Çocuk</span>
                <div class="border-zinc-700 border rounded-full flex items-center">
                    <button onclick={e => decreaseNumberOfChildren(e)} class="m-2 active:scale-125 transition-transform duration-200">
                        <img src={minus} alt="Decrease number of children" class="w-5 h-5"/>
                    </button>
                    <span class="w-10 h-full block text-center text-lg border-x border-zinc-700">{numberOfChildren}</span>
                    <button onclick={e => {e.preventDefault(); numberOfChildren++;}} class="m-2 active:scale-125 transition-transform duration-200">
                        <img src={plus} alt="Increase number of children" class="w-5 h-5"/>
                    </button>
                </div>
            </label>
        </div> 
    {/if}

    <label class="w-full flex flex-col items-center my-1">
        <span class="w-3/4 text-xs text-gray-900 tracking-wider">Buluşma tarihi ve zamanı:</span>
        <input type="datetime-local" name="meeting-time" min={now.toISOString().slice(0,16)} bind:value={meetDateTime} class="w-3/4 p-2 bg-zinc-900 text-zinc-300"/>
    </label>

    <label class="w-full flex flex-col items-center my-1">
        <span class="w-3/4 text-xs text-gray-900 tracking-wider">Ayrılma tarihi ve zamanı:</span>
        <input type="datetime-local" name="meeting-time" min={now.toISOString().slice(0,16)} bind:value={leaveDateTime} class="w-3/4 p-2 bg-zinc-900 text-zinc-300"/>
    </label>

    <input type="submit" value="Rezervasyon ara" class="w-3/4 py-3 pl-3 mt-3 bg-gradient-to-r from-[#cc208d83] to-[#6713d2] text-white font-bold rounded-md cursor-pointer transition hover:opacity-80"/>

    <div class="w-10/12 h-[2px] my-4 bg-zinc-800 rounded-full"></div>
</form>

