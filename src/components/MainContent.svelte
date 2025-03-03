<script lang="ts">
	import { type gridlayout, type DesktopIconType } from '../types.ts/layouts.svelte';
	import Cross from '../routes/cross/cross.svelte';
	import Draggable from './draggable.svelte';
	import About from '../routes/about/about.svelte';
	import DesktopIcon from './desktopIcon.svelte';
	import GodotTest from "../routes/godotTest/GodotTest.svelte";

	const closeApp = (appName: string) => {
		apps = apps.filter((a) => a.c !== appName);
	};
	let konami: {index: number, target: string[], active: boolean} = {
		index: 0,
		target: ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],
		active: false
	}

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			apps = apps.filter((a) => a.z !== apps.length);
		}
		if (konami.index === konami.target.length - 1 && e.key === konami.target.slice(-1)[0]) {
			konami.active = !konami.active;
		} else if (e.key === konami.target[konami.index]) {
			konami.index++
		} else {
			konami.index = 0;
		}
	};

	export let apps: gridlayout[] = [];
	export let desktopIcons: DesktopIconType[];

	const focusWindow = (e: CustomEvent) => {
		const zc = e.detail.z;
		apps = apps.map((a) => {
			return { ...a, z: a.z === zc ? apps.length : a.z > zc ? a.z - 1 : a.z };
		});
	};

	const components: any = {
		about: About,
		cross: Cross,
		godotTest: GodotTest,
	};
</script>

<div class="main-contain" class:konami={konami.active}>
	{#each desktopIcons as icon}
		<DesktopIcon {icon} />
	{/each}
	{#each apps as a}
		<Draggable bind:a on:focusWindow={focusWindow} on:closeApp={() => closeApp(a.c)}>
			<svelte:component this={components[a.c]} {a} />
		</Draggable>
	{/each}
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
