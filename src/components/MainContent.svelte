<script lang="ts">
	import { type gridlayout, type DesktopIconType } from '../types.ts/layouts.svelte';
	import Cross from '../routes/cross/cross.svelte';
	import Draggable from './draggable.svelte';
	import About from '../routes/about/about.svelte';
	import DesktopIcon from './desktopIcon.svelte';

	const closeApp = (appName: string) => {
		apps = apps.filter((a) => a.c !== appName);
	};

	const keydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			apps = apps.filter((a) => a.z !== apps.length);
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
		cross: Cross
	};
</script>

<div class="main-contain">
	{#each desktopIcons as icon}
		<DesktopIcon {icon} />
	{/each}
	{#each apps as a}
		<Draggable bind:a on:focusWindow={focusWindow} on:closeApp={() => closeApp(a.c)}>
			<svelte:component this={components[a.c]} {a} />

			<!-- {#if a.c === 'about'}
				<About />
			{:else if a.c === 'cross'}
				<Cross {a} />
			{/if} -->
		</Draggable>
	{/each}
</div>

<svelte:window on:keydown={keydown} />

<style>
	.main-contain {
		height: 100%;
		background-image: url('/src/lib/assets/windowsxp.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
