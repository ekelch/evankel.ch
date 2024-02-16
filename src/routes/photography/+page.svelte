<div class="container">
    <h2>I want to add different categories and do some fun CSS things with this page but for now here are 18 random pictures I took and like</h2>
    <div class="img-container">
        <img class="img-prev" src="{imageUrls[prevPos]}" alt="{imageUrls[prevPos]}"/>
        <img src="{imageUrls[currentPos]}" alt="idc"/>
        <img class="img-next" src="{imageUrls[nextPos]}" alt="{imageUrls[nextPos]}"/>
        <button on:click={() => previous()} id="photo-left" class="photo-select">&lt</button>
        <button on:click={() => next()} id="photo-right" class="photo-select">&gt</button>
    </div>
</div>

<script lang="ts">
    let height = 540;
    let width = 800;
    let photoCount = 18;

    let currentPos = 0;
    $: prevPos = (currentPos + 1) % photoCount;
    $: nextPos = currentPos == 0 ? photoCount - 1: (currentPos - 1) % photoCount;
    let imageUrls: string[] = [];

    for (let i = 1; i <= photoCount; i++) {
        let num = i < 10 ? ('0'+i) : i;
        imageUrls.push(`https://ik.imagekit.io/ekelch/webTest-${num}.jpg?tr=w-${width}%2Ch-${height}`)
    }

    function next() {
        currentPos = (currentPos + 1) % photoCount
    }

    function previous() {
        currentPos = (currentPos - 1) % photoCount
        if (currentPos < 0)
            currentPos += photoCount
    }

</script>

<svelte:head>
    <title>Evan Kelch - Photography</title>
    <meta name="Evan Kelch">
</svelte:head>

<style>
    .container {
        width: 50%;
        margin: auto;
        text-align: center
    }

    .img-container {
        position: relative;
        width: 800px;
        margin: auto;
    }

    .img-prev {
        position: absolute;
        left: -100%;
        top: 0;
    }

    .img-next {
        position: absolute;
        left: 100%;
        top: 0;
    }

    .photo-select {
        height: 40px;
        width: 24px;
        position: absolute;
        opacity: 80%;
    }

    #photo-left {
        left: 0;
        top: 50%;
        transform: translate(0,-50%);
    }

    #photo-right {
        right: 0;
        top: 50%;
        transform: translate(0,-50%);
    }
</style>