<p>This is the photography page!</p>
<img src="{imageUrl}" alt="be happy">

<script>
    import ImageKit from "imagekit-javascript";

    let imagekit = new ImageKit({
        urlEndpoint: 'https://ik.imagekit.io/ekelch/'
    })

    let imageUrl = imagekit.url({
        src: 'https://ik.imagekit.io/ekelch/IMG_5167.jpg',
        transformation: [{
            "width": "900"
        }]
    })
    console.log(imageUrl)
</script>
