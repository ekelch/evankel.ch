<script lang="ts">
	import { type gridlayout } from '../types.ts/layouts.svelte';
	import Draggable from './draggable.svelte';
	import DesktopIcon from './desktopIcon.svelte';
	import {createEventDispatcher} from "svelte";
	import SongOfWeek from "./SongOfWeek.svelte";

	export let apps: gridlayout[] = [];

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

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			let index = 0;
			let maxZ = 0;
			apps.forEach((app, i) => {if (app.z > maxZ) {maxZ = app.z; index = i}})
			if (index >= 0) {
				apps[index].z = 0
				apps[index].show = false
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

<div class="main-contain" class:konami={konami.active}>
	{#each apps as app}
		<DesktopIcon {app} on:openApp={openWindow} />
	{/each}
	{#each appsShown as app}
		<Draggable bind:app on:focusWindow={focusWindow} on:closeApp={() => closeApp(app)}>
			<svelte:component this={app.content} {app} />
		</Draggable>
	{/each}
	<SongOfWeek />
</div>

<svelte:window on:keydown={handleKeydown} />

<style>
	.main-contain {
		height: 100%;
		background-color: bisque;
	}
	.konami {
		background-image: url("../lib/assets/windowsxp.jpg");
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
