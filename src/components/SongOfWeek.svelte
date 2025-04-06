<script lang="ts">
    import playBtn from "/src/lib/assets/icons/play.svg"
    import songFile from "/src/lib/assets/janeRemover.mp3"

    let audioRef: HTMLAudioElement;
    let volume = 0.3
    function handleImgClick() {
        window.open("https://janeremover.bandcamp.com/music", "_blank")
    }
    function playPause() {
        audioRef.paused ? audioRef.play() : audioRef.pause()
    }

</script>

<div id="song-outer">
    <div class="song-inner">
        <span>Song of the week : work in progress !!</span>
        <div class="music-container">
            <img class="album-cover" src="/src/lib/assets/flashInPan.jpg" alt="album cover" on:click={handleImgClick} />
            <div class="right-contain">
                <div class="info">
                    <span class="link-txt">Flash in the Pan</span>
                    <span class="secondary-txt">by Jane Remover</span>
                </div>
                <div class="controls secondary-txt">
                    <button class="play-btn" on:click={playPause}><img src={playBtn} alt="play pause music"></button>
                </div>
            </div>
            <input
                    id="volume-slider"
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    bind:value={volume}
            />
        </div>
    </div>
</div>

<audio src={songFile} bind:this={audioRef} bind:volume />

<style lang="css">
    #song-outer {
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        background: rgb(166,166,200);
    }

    .song-inner {
        margin: 12px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .music-container {
        width: 100%;
        max-width: 720px;
        border: 0;
        height: 160px;
        margin: 0 auto;
        border-radius: 12px;
        overflow: hidden;
        background: #333333;
        display: flex;
    }

    .album-cover {
        width: 160px;
        cursor: pointer;
    }

    .right-contain {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 12px;
        gap: 12px;
    }

    span {
        width: fit-content;
    }

    .info {
        height: 40px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .link-txt {
        color: #0f91ff;
        cursor: pointer;
    }

    .link-txt:hover {
        text-decoration: underline;
    }

    .secondary-txt {
        color: rgb(170,170,170);
    }

    .controls {
        flex: 1;
        display: flex;
    }

    .play-btn {
        width: 48px;
        height: 48px;
        margin: auto 0;
        cursor: pointer;
        padding: 12px;
        clip-path: circle(20px);
    }
    .play-btn > img {
        margin-left: 2px;
        width: 100%;
        pointer-events: none;
    }

    #volume-slider {
        writing-mode: vertical-lr;
        direction: rtl;
        height: 80%;
        margin: auto 12px auto 0;
    }
</style>