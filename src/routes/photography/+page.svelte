<h2 class="text-white text-center mb-4">Random pictures for the time being!</h2>
<div class="mx-3 mb-3 md:m-auto">
    <div class="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each imageUrls as url}
        <div>
            <img class="rounded-md" src="{url}" alt="{url}">
        </div>
        {/each}

    </div>
</div>

<script lang="ts">
    let photoCount = 18;
    let photoName: string;
    let imageUrls: string[] = [];

    for (let i = 1; i <= photoCount; i++) {
        let num = i < 10 ? ('0'+i) : i;
        photoName = ('webTest-' + num + '.jpg')
        imageUrls.push('https://ik.imagekit.io/ekelch/' + photoName + '?tr=w-500%2Ch-340');
    }
</script>

<svelte:head>
    <title>Evan Kelch Photography</title>
    <meta name="Evan Kelch personal website photography gallery showcase.">
</svelte:head>

