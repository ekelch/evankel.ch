<script lang="ts">
	import svelteImg from '/src/lib/assets/icons/svelte.png'
	import resumeIcon from '/src/lib/assets/icons/resume.png'
	import carplayIcon from '/src/lib/assets/icons/carplay.png'
	import bunnyIcon from '/src/lib/assets/icons/bunny.gif'
	import crosshairIcon from '/src/lib/assets/icons/crosshair.png'
	import {type icon} from "../types.ts/layouts.svelte";
    import SongOfWeek from "../components/SongOfWeek.svelte";
    import bgMovie from "/src/lib/assets/images/norge480.mp4"
    import br from "/src/lib/assets/icons/b.png"
    import fi from "/src/lib/assets/icons/f.jpg"
    import HomeListIcon from "../components/HomeListIcon.svelte";

	let icons: icon[] = $state([
		{displayName: "about", iconX: 25, iconY: 325, imgSrc: resumeIcon, route: "/about"},
		{displayName: "resume", iconX: 150, iconY: 325, imgSrc: resumeIcon, route: "/resume"},
		{displayName: "carplay", iconX: 25, iconY: 450, imgSrc: carplayIcon, route: "/carplay"},
		{displayName: "godot jam", iconX: 275, iconY: 450, imgSrc: bunnyIcon, route: "/b1tjam"},
		{displayName: "crosshair", iconX: 25, iconY: 575, imgSrc: crosshairIcon, route: "/crosshair"},
        {displayName: "this website", iconX: 650, iconY: 450, imgSrc: svelteImg, route: "/self"},
		{displayName: "bradley", iconX: 600, iconY: 575, imgSrc: br, route: "/sites/bradley"},
		{displayName: "fiona", iconX: 700, iconY: 575, imgSrc: fi, route: "/sites/fiona"},
	])

    let showSong: boolean = $state(true)

    function toggleShowSong() {
        showSong = !showSong
    }
</script>

<div id="app">
    <div class="bg-img-cnt">
        <video autoplay loop muted playsinline class="bg-video">
            <source src={bgMovie} type="video/mp4" />
        </video>
    </div>

    <div class="wide-box">
        <div class="app-icons">
            {#each icons as icon}
                <HomeListIcon item={icon}/>
            {/each}
        </div>
        <div class="name-banner">
            <h1 class="name-banner-txt">evankel.ch</h1>
        </div>
    </div>

<!--    <div class="song-container-main">-->
<!--        {#if showSong}-->
<!--            <SongOfWeek on:closeSong={toggleShowSong} />-->
<!--        {/if}-->
<!--        <button onclick={toggleShowSong} class="toggle-song-btn">{#if showSong}&rarr;{:else}&larr;{/if}</button>-->
<!--    </div>-->
</div>

<style lang="postcss">
	#app {
        position: absolute;
        inset: 0;
        overflow-x: hidden;
	}

    .bg-img-cnt {
        position: relative;
        width: 104vw;
        margin: 0 -28px;
        height: 100vh;
        overflow: hidden;
    }

    .bg-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .wide-box {
        position: absolute;
        top: 120px;
        width: 100vw;
        height: 204px;
        background-color: hsl(150 6% 40%/96%);
        padding: 20px 0;

        display: flex;
        flex-direction: row;
    }

    .app-icons {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 12px 24px;
        flex: 1;
        margin: auto auto auto 24px;
        height: 100%;
    }

    .name-banner {
        margin-right: 36px;
        display: flex;
    }

    .name-banner-txt {
        margin: auto;
        text-align: center;
        font-size: 108px;
        font-family: "JetBrains Mono", monospace;
        color: hsl(290 15% 77%);
        text-shadow: 4px 4px 2px hsl(290 20% 10%);
    }

    .song-container-main {
        display: flex;
        position: absolute;
        right: 4px;
        top: 6px;
        width: 440px;
        height: 100px;
    }
    .toggle-song-btn {
        margin-left: auto;
    }
</style>
