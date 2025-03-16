<script lang="ts">
    import {onMount} from "svelte";
    import src from "/src/lib/assets/whiteMeadow.mp3"

    let audioPlayer: HTMLAudioElement;

    onMount(() => {
        audioPlayer.load();
        audioPlayer.volume = 0.1
    })
</script>

<div id="song-container">
    <p>song of the week (wip)</p>
    <audio controls id="audio-player" bind:this={audioPlayer} {src} />
</div>

<style lang="css">
    #song-container {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 600px;
        height: 400px;

        background: #e0e0e095;
        border: 1px solid rgba(0,0,0,0.35);
        border-radius: 8px;

        display: flex;
        flex-direction: column;

        text-align: center;
        padding: 8px;
    }

    #audio-player {
        width: 100%;
    }
</style>