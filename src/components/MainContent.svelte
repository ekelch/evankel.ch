<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type appOptions, type gridlayout } from '../types.ts/layouts.svelte';
	import About from './about.svelte';
	import Cross from './cross.svelte';
	import Draggable from './draggable.svelte';

	const dispatch = createEventDispatcher();

	export let apps: gridlayout[] = [];
	$: console.log(apps);

	const closeApp = (appName: appOptions) => {
		dispatch('closeApp', appName);
	};
	const focusWindow = (e: CustomEvent) => {
		e.detail.z = 100;
		let sorted = apps.sort((a, b) => a.z - b.z);
		apps = sorted.map((a, v) => {
			return { ...a, z: apps.length - v };
		});
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
