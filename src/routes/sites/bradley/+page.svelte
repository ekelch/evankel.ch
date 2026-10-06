<script>
    import brPrev from "/src/lib/assets/images/bradleyPreview.jpg"
</script>

<div id="bradley-container">
    <div id="bradley-center">
        <h2>Bradley's website</h2>

        <p>I am making this website for Bradley. There will be pages for music production and for art projects like
        sculptures and screen printing.
        The music page will have a music player and maybe some information about how tracks were created or worked on.
        The art page will have a gallery of images and descriptions of work. Both are pretty far from done.
        </p>

        <div class="img-container">
            <p>click preview below to enter site:</p>
            <button onclick={() => open("https://br.evankel.ch/")} class="img-btn">
                <img  src={brPrev} alt="preview of bradley website" />
            </button>
        </div>

        <p>
            This is also hosted on cloudflare on a subdomain of this site for the time being. The couple of songs are
            hosted by Cloudflare R2 buckets, but there a better solution for music streaming I will move
            to if it's ever more than a few songs. Images will either be stored in R2 or Cloudflare images.
            Most progress is on hold until there is more content to be put in either page or elsewhere around the site.
        </p>
    </div>

</div>

<style>
    #bradley-container {
        display: flex;
        background-color: hsl(245 8% 65%);
        height: calc(100vh - 37px);

        font-family: "Nadeem", Arial, sans-serif;
    }
    #bradley-center {
        flex: 1;
        margin: 12px 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #bradley-center > p {
        width: 640px;
        margin: 0 auto;
    }

    .img-container {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .img-container > p {
        margin: 12px auto;
    }

    .img-btn {
        all: unset;
        width: 640px;
        cursor: pointer;
        border: 1px solid hsl(0 0% 30%);
        box-shadow: 4px 4px 1px hsl(280 5% 50%);
    }
    .img-btn:hover {
        border-width: 2px;
    }
    .img-btn > img {
        width: 100%;
        height: 100%;
    }
</style>