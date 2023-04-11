<div class="container m-auto grid grid-cols-4 gap-4">
    {#each imageUrls as url}
    <div>
        <img class="rounded-md" src="{url}" alt="{url}">
    </div>
    {/each}
</div>

<script>
    import ImageKit from "imagekit-javascript";

    let photoCount = 18;
    let photoName;
    let imageUrls = [];

    for (let i = 1; i <= photoCount; i++) {
        let num = i < 10 ? ('0'+i) : i;
        photoName = ('webTest-' + num + '.jpg')
        imageUrls.push('https://ik.imagekit.io/ekelch/' + photoName + '?tr=w-500%2Ch-340');
    }

    console.log(imageUrls)

    // let imagekit = new ImageKit({
    //     urlEndpoint: 'https://ik.imagekit.io/ekelch/'
    // })
    //
    // let imageUrl = imagekit.url({
    //     src: 'https://ik.imagekit.io/ekelch/IMG_5167.jpg',
    //     transformation: [{
    //         "width": "500",
    //         "height": "400"
    //     }]
    // })
    //
    // console.log(imageUrl)

</script>
