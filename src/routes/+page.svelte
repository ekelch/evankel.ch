<script lang="ts">
	import svelteImg from '/src/lib/assets/icons/svelte.png'
	import resumeIcon from '/src/lib/assets/icons/resume.png'
	import carplayIcon from '/src/lib/assets/icons/carplay.png'
	import bunnyIcon from '/src/lib/assets/icons/bunny.gif'
	import crosshairIcon from '/src/lib/assets/icons/crosshair.png'
	import {type icon} from "../types.ts/layouts.svelte";
    import DesktopIcon from "../components/DesktopIcon.svelte";
    import SongOfWeek from "../components/SongOfWeek.svelte";
    import norway from "/src/lib/assets/images/norway.jpg"

	let icons: icon[] = $state([
		{displayName: "Resume", iconX: 25, iconY: 325, imgSrc: resumeIcon, route: "/resume"},
		{displayName: "Carplay", iconX: 25, iconY: 450, imgSrc: carplayIcon, route: "/carplay"},
		{displayName: "This Website", iconX: 150, iconY: 450, imgSrc: svelteImg, route: "/self"},
		{displayName: "Godot Jam", iconX: 275, iconY: 450, imgSrc: bunnyIcon, route: "/b1tjam"},
		{displayName: "CS2 Crosshair", iconX: 25, iconY: 575, imgSrc: crosshairIcon, route: "/crosshair"},
	])

    let showSong: boolean = $state(true)
    let coords = $state({x: 0, y: 0})
    let winW = $state(1920)
    let winH = $state(1080)
    let objPos = $derived(`${coords.x/winW * 100 - 100}px ${coords.y/winH * 50 - 100}px`) //todo need to clean this up

    function handleMouseMove(event: any) {
        coords.x = event.clientX
        coords.y = event.clientY
    }
    function toggleShowSong() {
        showSong = !showSong
    }
</script>

<svelte:window onmousemove={handleMouseMove} bind:innerWidth={winW} bind:innerHeight={winH} />

<div id="app">
    <div class="bg-img-cnt">
        <img src={norway} alt="norway bg" class="bg-img" style:object-position={objPos} />
    </div>
    {#each icons as icon}
        <DesktopIcon app={icon} />
    {/each}

    <div class="song-container-main">
        {#if showSong}
            <SongOfWeek on:closeSong={toggleShowSong} />
        {/if}
        <button onclick={toggleShowSong} class="toggle-song-btn">{#if showSong}&rarr;{:else}&larr;{/if}</button>
    </div>
</div>

<style lang="postcss">
	#app {
        position: absolute;
        inset: 0;
	}

    .bg-img-cnt {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .bg-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transform: scale(1.3);
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
