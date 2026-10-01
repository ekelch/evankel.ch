<script>
    import brPrev from "/src/lib/assets/images/bradleyPreview.jpg"
</script>

<div id="fiona-container">
    <div id="fiona-center">
        <h2>Fiona's website</h2>

        <p>There is no content on this site yet!</p>
        <p>Check back later :)</p>

        <div class="img-container">
            <p>click preview below to enter site:</p>
            <button onclick={() => open("https://fi.evankel.ch/")} class="img-btn">
                <img  src={brPrev} alt="preview of fiona website" />
            </button>
        </div>
    </div>

</div>

<style>
    #fiona-container {
        display: flex;
        background-color: #cbe6d2;
        height: calc(100vh - 37px);
    }
    #fiona-center {
        margin: 12px 24px;
        display: flex;
        flex-direction: column;
    }

    .img-container {
        display: flex;
        flex-direction: column;
    }

    .img-container > p {
        margin: 12px auto;
    }

    .img-btn {
        all: unset;
        width: 640px;
        box-shadow: 4px 4px 1px hsl(120 5% 50%);
        cursor: pointer;
    }
    .img-btn:hover {
        border: 1px solid hsl(0 0% 30%);

    }

    .img-btn > img {
        width: 100%;
        height: 100%;
    }
</style>