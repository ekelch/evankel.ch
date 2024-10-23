<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type gridlayout, type DesktopIconType } from '../types.ts/layouts.svelte';
	import Cross from '../routes/cross/cross.svelte';
	import Draggable from './draggable.svelte';
	import About from '../routes/about/about.svelte';
	import DesktopIcon from './desktopIcon.svelte';

	const dispatch = createEventDispatcher();
	const openApp = (appName: string) => {
		dispatch('openApp', appName);
	};

	const closeApp = (appName: string) => {
		apps = apps.filter((a) => a.c !== appName);
	};

	export let apps: gridlayout[] = [];
	let desktopIcons: DesktopIconType[] = [
		{
			imgSrc: '/src/lib/assets/cat.jpg',
			appName: 'cs crosshair',
			x: 50,
			y: 50,
			openApp: () => openApp('cross')
		},
		{
			imgSrc: '/src/lib/assets/laptop.png',
			appName: 'about',
			x: 175,
			y: 50,
			openApp: () => openApp('about')
		}
	];

	const focusWindow = (e: CustomEvent) => {
		const zc = e.detail.z;
		apps = apps.map((a) => {
			return { ...a, z: a.z === zc ? apps.length : a.z > zc ? a.z - 1 : a.z };
		});
	};
</script>

<div class="main-contain">
	{#each desktopIcons as icon}
		<DesktopIcon {icon} />
	{/each}
	{#each apps as a}
		<Draggable bind:a on:focusWindow={focusWindow} on:closeApp={() => closeApp(a.c)}>
			{#if a.c === 'about'}
				<About />
			{:else if a.c === 'cross'}
				<Cross {a} />
			{/if}
		</Draggable>
	{/each}
</div>

<style>
	.main-contain {
		height: 100%;
		background-image: url('/src/lib/assets/windowsxp.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
