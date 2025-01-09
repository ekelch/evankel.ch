<script lang="ts">
    import songsImg from "../../lib/assets/about/songs.png"
    import artistsImg from "../../lib/assets/about/artists.png"
</script>

<div id="carplay-container">
    carplay information here!
    <div id="carplay-imgs">
        <img src={songsImg} alt="carplay songs example"/>
        <img src={artistsImg} alt="carplay artists example"/>
    </div>
</div>

<style lang="css">
    #carplay-container {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-left: 0;
        border-right: 0;
    }

    #carplay-imgs > img {
        width: 400px;
    }
</style>