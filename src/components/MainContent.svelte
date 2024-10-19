<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type gridlayout } from '../types.ts/layouts.svelte';
	import About from './about.svelte';
	import Cross from './cross.svelte';
	import Draggable from './draggable.svelte';

	const dispatch = createEventDispatcher();

	export let apps: gridlayout[] = [];

	const closeApp = (a: gridlayout) => {
		dispatch('closeApp', a.c);
	};
	const focusWindow = (e: CustomEvent) => {
		const zc = e.detail.z;
		apps = apps.map((a) => {
			return { ...a, z: a.z === zc ? apps.length : a.z > zc ? a.z - 1 : a.z };
		});
	};
</script>

<div class="main-contain">
	{#each apps as a}
		<Draggable bind:a on:focusWindow={focusWindow} on:closeApp={() => closeApp(a)}>
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
		height: 95vh;
		background-image: url('../lib/assets/windowsxp.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
