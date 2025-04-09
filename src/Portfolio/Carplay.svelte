<script lang="ts">
    import allSongsImg from "$lib/assets/about/allSongs.png"
    import artistsImg from "$lib/assets/about/artists.png"
    import configImg from "$lib/assets/about/config.png"
    import artistSongsImg from "$lib/assets/about/artistSongs.png"
    import ImagePlus from "../components/ImagePlus.svelte";
</script>

<div id="carplay-container">
    <h3>1. Carplay (C/SDL2)</h3>
    <p>My main project during the end of 2024 was working toward making a carplay device for my 1994 Mazda Miata.
        </p>
    <div class="list-wrapper">
        <h4>The primary things I was hoping to achieve were:</h4>
        <ul>
            <li>does not require connection to phone</li>
            <li>physical controls (knob/slider pots, no touch screen)</li>
            <li>store music locally (does not require wifi/bluetooth to function)</li>
            <li>new music can be easily added (add new files thru usb/sdcard/wifi when I want to sync)</li>
        </ul>
    </div>

    <p>
        The target hardware is a Raspberry Pi 3a rendering to a ~5in LCD and controlled with a detached numpad connected with usb-c. I planned
        to run audio out through a DAC + AMP to the car stereo harness... but I never made it that far!
        I also planned on creating a 3d printed enclosure for all of this to sit in securely.
    </p>
    <p>For the software, I did complete a minimal viable product, which is written C with SDL2 (extended with TTF, MIX, & IMG).
        SDL2 handles window management, device interactions, and the 2D rendering. TTF provides fonts,
        MIX is responsible for audio playback, and IMG allows the loading of non-bitmap images (not currently in use, but the original font was a sprite sheet I created).
    </p>
    <p>
        I chose C/SDL2 partly for performance / low resource usage, but mainly for a desire to learn more about algorithms, data structures, and optimization.
    </p>

    <div class="carplay-imgs">
        <ImagePlus src={artistsImg} alt="carplay artists example" title="Carplay Artists Options" description="Artists that are available in appdata. An artist's name serves as the key in the hashmap of their available songs. The hashmap keys are listed on this screen, and values are loaded upon selection." />
        <ImagePlus src={artistSongsImg} alt="carplay artists songs example" title="Carplay Artists Songs" description="Artist 'Omori' has been selected -> displaying all songs by this artist. 9 items on each of 20 pages. Currently playing song and volume are also rendered at the bottom." />
    </div>

    <br/><br/>
    <div class="carplay-imgs">
        <ImagePlus src={allSongsImg} alt="all songs" title="Carplay All Songs Menu" description="All songs in the application are displayed here, sorted by artist alphabetically. When one song ends, the app will auto play another random song." />
        <ImagePlus src={configImg} alt="config example image" title="Carplay Config Menu" description="Key pressed to overlay config options. User can adjust application color, font, font size, and line spacing. Saved to config.txt upon closing." />
    </div>

    <h4>Design decisions:</h4>
    <p>Will expand here about actual implementation of: menus, keypresses, fontmaps, config, state, rendering, syscalls, linked list, hash/hashmaps, cross compiling, etc!</p>

    <div class="list-wrapper">
        <h4>Future plans included: </h4>
        <ul>
            <li>better cataloguing of music and allowing for user defined playlists (add sqlite)</li>
            <li>use ffmpeg to extract and render cover art for currently playing song</li>
            <li>queue system // recently played</li>
            <li>song progress/duration ui (similar to volume bar)</li>
        </ul>
    </div>

    <div class="list-wrapper">
        <h4>in January 2025 I stopped development on this project; The main issues were:</h4>
        <ul>
            <li>could not find solution to crosscompile from macOS ARM to linux</li>
            <li>difficult to configure cmake setup on raspbian to compile locally</li>
            <li>file structure was only a dir with string file handles, not backed by database -> very inflexible</li>
            <li>had absolutely no idea how to permanently power PI and splice into wiring harness</li>
            <li>sold the miata this was going to go into to buy a motorcycle :p</li>
        </ul>
    </div>

    <p>Overall, I still think this project was a success because I <em>did</em> make a working version that is fun to use on my laptop at the very least.
        More than that though, I'm very happy to have written a working (although maybe not very complete) product in C and SDL. I learned things like how
        to make hash maps and linked lists by myself. Again, these were pretty incomplete implementations and supported only the functions and features I specifically needed,
        but it gives me a lot of confidence going forward that I can always learn and figure out new concepts.</p>
    <p>Additionally, this project gives me a better appreciation for when I use
        data structures in higher level languages (that are implemented about 100x better). This is especially true for SDL2
        (a building block of Source engine and some other older game engines). I've more recently been learning
        Godot (game engine) and I can much better appreciate how much heavy lifting it is doing for me with well written abstractions. Finally, I know some design decisions
        to keep in mind for similar projects going forward <em>...use a database...</em>
    </p>

    <p>Github project:
        <a target="_blank" href="https://github.com/ekelch/carplay">github/carplay</a>
    </p>
</div>

<style lang="css">
    #carplay-container {
        margin: 1rem;
    }
    p {
        margin-bottom: 16px;
    }
    .carplay-imgs {
        display: flex;
    }
    .list-wrapper {
        margin: 24px auto 0;
    }
    .list-wrapper > h4 {
        margin: 0;
    }
    .list-wrapper > ul {
        list-style: inside;
    }
</style>