<script>
    import brPrev from "/src/lib/assets/images/bradleyPreview.jpg"
</script>

<div id="bradley-container">
    <div id="bradley-center">
        <h2>Bradley's website</h2>

        <div class="img-container">
            <p>click preview below to enter site!</p>
            <button onclick={() => open("https://br.evankel.ch/")} class="img-btn">
                <img  src={brPrev} alt="preview of bradley website" />
            </button>
        </div>
    </div>

</div>

<style>
    #bradley-container {
        display: flex;
        background-color: #cbe6d2;
        height: calc(100vh - 37px);
    }
    #bradley-center {
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
        cursor: pointer;
        border: 1px solid hsl(0 0% 30%);
        box-shadow: 4px 4px 1px hsl(120 5% 50%);
    }
    .img-btn > img {
        width: 100%;
        height: 100%;
    }
</style>