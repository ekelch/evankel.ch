<script lang="ts">
    import songsImg from "../../lib/assets/about/songs.png"
    import artistsImg from "../../lib/assets/about/artists.png"
    import ImagePlus from "../../components/ImagePlus.svelte";
</script>

<div id="carplay-container">
    <h3>1. Carplay (C/SDL2)</h3>
    <p>My main project recently has been making a carplay device for one of my cars.
        The target hardware is a Raspberry Pi 3a rendering to a ~5in LCD and controlled with a detached numpad. I plan
        to run audio out through a DAC + AMP to the car stereo harness... but I have not gotten that far yet!
    </p>
    <p>I am focusing on the software for now, which is written C with SDL2 (extended with TTF, MIX, & IMG).
        SDL2 handles window management, device interactions, and the 2D rendering. TTF provides fonts,
        MIX is responsible for audio playback, and IMG allows the loading of non-bitmap images (not currently in use, but the original font was a sprite sheet I created).
    </p>
    <p>
        I chose C/SDL2 for performance, cross-compatability, and a desire to learn more about algorithms, data structures, and optimization.
    </p>

    <div id="carplay-imgs">
        <ImagePlus src={artistsImg} alt="carplay artists example" title="Carplay Artists Options" description="Artists that are available in appdata. An artist's name serves as the key in the hashmap of their available songs. The hashmap keys are listed on this screen, and values are loaded upon selection." />
        <ImagePlus src={songsImg} alt="carplay artists example" title="Carplay Artists Songs" description="Artist 'Omori' has been selected -> displaying all songs by this artist. 9 items on each of 20 pages. Currently playing song and volume are also rendered at the bottom." />
    </div>

    <div id="future-plans">
        <h4>Future plans include: </h4>
        <ul>
            <li>better cataloguing of music and allowing for user defined playlists</li>
            <li>option to read and displaymusic exif metadata</li>
            <li>displaying album art on currently playing</li>
            <li>queue system // recently played</li>
            <li>song progress/duration ui</li>
        </ul>
    </div>
    <p>Github project:
        <a target="_blank" href="https://github.com/ekelch/carplay">github/carplay</a>
    </p>
</div>

<style lang="css">
    #carplay-container {
        border-bottom: 1px solid black;
    }
    p {
        margin-bottom: 16px;
    }
    #carplay-imgs {
        display: flex;
    }
    #future-plans {
        margin: 24px auto 0;
    }
    #future-plans > h4 {
        margin: 0;
    }
    #future-plans > ul {
        list-style: inside;
    }
</style>