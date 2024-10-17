<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type appOptions, type gridlayout } from '../types.ts/layouts.svelte';
	import About from './about.svelte';
	import Cross from './cross.svelte';
	import Draggable from './draggable.svelte';

	const dispatch = createEventDispatcher();

	export let apps: gridlayout[] = [];
	$: console.log(apps);
	$: vApps = apps.map((a) => a.c);

	const closeApp = (appName: appOptions) => {
		dispatch('closeApp', appName);
	};
</script>

<div class="main-contain">
	{#if vApps.includes('about')}
		<Draggable
			on:closeApp={() => {
				closeApp('about');
			}}><About /></Draggable
		>
	{/if}
	{#if vApps.includes('cross')}
		<Draggable
			on:closeApp={() => {
				closeApp('cross');
			}}><Cross /></Draggable
		>
	{/if}
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
