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
		{displayName: "About Me", iconX: 25, iconY: 325, imgSrc: resumeIcon, route: "/about"},
		{displayName: "Resume", iconX: 150, iconY: 325, imgSrc: resumeIcon, route: "/resume"},
		{displayName: "Carplay", iconX: 25, iconY: 450, imgSrc: carplayIcon, route: "/carplay"},
		{displayName: "Godot Jam", iconX: 275, iconY: 450, imgSrc: bunnyIcon, route: "/b1tjam"},
		{displayName: "CS2 Crosshair", iconX: 25, iconY: 575, imgSrc: crosshairIcon, route: "/crosshair"},
        {displayName: "This Website", iconX: 650, iconY: 450, imgSrc: svelteImg, route: "/self"},
		{displayName: "bradley's website", iconX: 600, iconY: 575, imgSrc: br, route: "/sites/bradley"},
		{displayName: "fiona's website", iconX: 700, iconY: 575, imgSrc: fi, route: "/sites/fiona"},
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
<!--        <img src={bgMovie} alt="norway bg" class="bg-img" style:object-position={objPos} />-->
    </div>

    <div class="wide-box">
        {#each icons as icon}
            <HomeListIcon item={icon}/>
        {/each}
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
	}

    .bg-img-cnt {
        position: relative;
        width: 100vw;
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
        background-color: hsl(200 20% 55%/90%);
        padding: 20px 16px;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 12px 48px;
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
