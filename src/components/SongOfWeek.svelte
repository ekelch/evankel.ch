<script lang="ts">
    import playBtn from "/src/lib/assets/icons/play.png"
    import pauseBtn from "/src/lib/assets/icons/pause.png"
    import songFile from "/src/lib/assets/janeRemover.mp3"
    import coverSrc from "/src/lib/assets/flashInPan.jpg"
    import {createEventDispatcher} from "svelte";

    let audioRef: HTMLAudioElement;
    let volume: number = 0.1
    let duration : number
    let currentTime: number = 0
    let paused: boolean = true
    $: displayTime = `${currentTime / 60 | 0}:${(currentTime % 60 | 0).toString().padStart(2, '0')} / ${duration / 60 | 0}:${(duration % 60 | 0).toString().padStart(2, '0')}`
    function handleImgClick() {
        window.open("https://janeremover.bandcamp.com/music", "_blank")
    }
    function playPause() {
        audioRef.paused ? audioRef.play() : audioRef.pause()
        paused = audioRef.paused
    }

</script>

<div id="song-outer">
    <div class="song-inner">
        <span>Song of the week : work in progress !!</span>
        <div class="music-container">
            <button class="album-cover" on:click={handleImgClick}>
                <img src={coverSrc} alt="album cover"/>
            </button>
            <div class="right-contain">
                <div class="info">
                    <button on:click={handleImgClick} class="link-txt">Flash in the Pan</button>
                    <span class="secondary-txt">by Jane Remover</span>
                </div>
                <div class="controls secondary-txt">
                    <button class="play-btn" on:click={playPause}><img src={paused ? playBtn : pauseBtn} alt="play pause music"></button>
                    <div class="duration-slider-container">
                        <span>{displayTime}</span>
                        <input
                                id="scrub-slider"
                                type="range"
                                min={0}
                                max={duration}
                                step={0.01}
                                bind:value={currentTime}
                        />
                    </div>
                </div>
            </div>
            <input
                    id="volume-slider"
                    type="range"
                    min={0}
                    max={0.5}
                    step={0.01}
                    bind:value={volume}
            />
        </div>
    </div>
</div>

<audio src={songFile} bind:this={audioRef} bind:volume bind:duration bind:currentTime />

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
        padding: 0;
        border: none;
        min-width: 160px;
        max-width: 160px;
        cursor: pointer;
    }

    .album-cover > img {
        width: 100%;
        pointer-events: none;
        object-fit: fill;
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
        all: unset;
        width: fit-content;

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
        gap: 24px;
    }

    .play-btn {
        width: 48px;
        height: 48px;
        margin: auto 0;
        cursor: pointer;
        padding: 12px;
        clip-path: circle(20px);
        background: white;
    }
    .play-btn > img {
        width: 100%;
        pointer-events: none;
    }

    .duration-slider-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px 0;
    }

    #volume-slider {
        writing-mode: vertical-lr;
        direction: rtl;
        height: 80%;
        margin: auto 12px;
        cursor: pointer;
    }
    
    #scrub-slider {
        cursor: pointer;
    }
</style>