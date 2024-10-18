<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type appOptions, type gridlayout } from '../types.ts/layouts.svelte';
	import About from './about.svelte';
	import Cross from './cross.svelte';
	import Draggable from './draggable.svelte';

	const dispatch = createEventDispatcher();

	export let apps: gridlayout[] = [];

	const closeApp = (appName: appOptions) => {
		dispatch('closeApp', appName);
	};
	const focusWindow = (e: CustomEvent) => {
		apps.forEach((a) => (a.z = a.z = a.c === e.detail.c ? apps.length : a.z - 1));
		apps = apps;
	};
</script>

<div class="main-contain">
	{#each apps as a}
		<Draggable
			{a}
			on:focusWindow={(e) => focusWindow(e)}
			on:closeApp={() => {
				closeApp(a.c);
			}}
		>
			{#if a.c === 'about'}
				<About />
			{:else if a.c === 'cross'}
				<Cross />
			{/if}
		</Draggable>
	{/each}
</div>

<style>
	.main-contain {
		height: 95vh;
		background-image: url('../lib/assets/windowsxp.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
