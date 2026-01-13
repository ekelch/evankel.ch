<script lang="ts">
	import { type gridlayout } from '../types.ts/layouts.svelte';
	import Draggable from './draggable.svelte';
	import DesktopIcon from './desktopIcon.svelte';
	import {createEventDispatcher} from "svelte";
	import SongOfWeek from "./SongOfWeek.svelte";

	export let apps: gridlayout[] = [];
	let songWidth = 600;
	let windowWidth: number;
	let dragging = false;
	let showSong = true;
	$: appsShown = apps.filter(a => a.show)
	const dispatch = createEventDispatcher();
	const closeApp = (app: gridlayout) => {
		app.show = false;
		apps = apps;
	};

	let konami: {index: number, target: string[], active: boolean} = {
		index: 0,
		target: ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],
		active: false
	}

	function handleMouseUp() {
		dragging = false;
	}

	function handleMouseMove (e: MouseEvent) {
		if (dragging) {
			const res = windowWidth - e.x;
			if (res > 488 && res < 888) {
				songWidth = res;
			}
		}
	}
	function handleMouseDown() {
		dragging = true;
	}

	function toggleShowSong() {
		showSong = !showSong
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			const sorted = apps.filter(a => a.show).sort((a,b) => b.z - a.z)
			if (sorted.length) {
				sorted[0].z = 0;
				sorted[0].show = false
				apps = apps
			}
		}
		if (konami.index === konami.target.length - 1 && e.key === konami.target.slice(-1)[0]) {
			konami.active = !konami.active;
		} else if (e.key === konami.target[konami.index]) {
			konami.index++
		} else {
			konami.index = 0;
		}
	};

	const openWindow = (e: CustomEvent) => {
		const i = apps.findIndex(a => a.modCode === e.detail.modCode);
		apps[i].show = true
		apps[i].z = appsShown.length
		apps = apps
	}

	const focusWindow = (e: CustomEvent) => {
		dispatch('focusWindow', e.detail)
	};
</script>

<div class="main-outer" style="user-select: {dragging ? 'none' : 'initial'}">
	<div class="main-contain" class:konami={konami.active}>
		{#each apps as app}
			<DesktopIcon {app} on:openApp={openWindow}/>
		{/each}
		{#each appsShown as app}
			<Draggable bind:app on:focusWindow={focusWindow} on:closeApp={() => closeApp(app)}>
				<svelte:component this={app.content} {app}/>
			</Draggable>
		{/each}
	</div>
	<button style="display: {showSong ? 'none' : 'initial'}" on:click={toggleShowSong} class="toggle-song-btn">&larr;</button>
	<div style="width: {songWidth}px; display: {showSong ? 'initial' : 'none'}" class="song-container">
		<div id="song-resize" on:mousedown={handleMouseDown} />
		<SongOfWeek on:closeSong={toggleShowSong} />
	</div>

</div>

<svelte:window on:keydown={handleKeydown} on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} bind:innerWidth={windowWidth}/>

<style>
	.main-outer {
		display: flex;
		height: 100%;
	}
	.main-contain {
		flex: 1;
		background-image: url("../lib/assets/idaho.jpg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.song-container {
		position: absolute;
		right: 6px;
		top: 6px;
	}
	#song-resize {
		position: absolute;
		width: 16px;
		left: -8px;
		top: 0;
		cursor: ew-resize;
		height: 100%;
	}
	.konami {
		background-image: url("../lib/assets/windowsxp.jpg");
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
	.toggle-song-btn {
		position: absolute;
		z-index: 2;
		right: 0;
		height: 40px;
	}
</style>
