<script lang="ts">
	import { type gridlayout } from '../types.ts/layouts.svelte';
	import {abs} from "mathjs";
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();
	export let app: gridlayout;
	let dragging: boolean;
	let dragStartPos: {x:number,y:number} = {x: 0, y: 0}

	const handleDragStart = (e: MouseEvent) => {
		dragging = true;
		dragStartPos = {x: e.clientX, y: e.clientY}
	};

	const handleDragEnd = () => {
		dragging = false;
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (dragging) {
			app.iconX += e.movementX;
			app.iconY += e.movementY;
		}
	};

	const handleMouseUp = (e: MouseEvent) => {
		if (abs(dragStartPos.x - e.clientX) < 5 && abs(dragStartPos.y - e.clientY) < 5) {
			dispatch('openApp', app);
		}
	}
</script>

<button
	style="left: {app.iconX}px; top: {app.iconY}px;"
	class="icon-wrapper"
	class:dragging
	on:mousedown|preventDefault={handleDragStart}
	on:click={handleMouseUp}
	on:dblclick={handleMouseUp}
>
	<img src={app.imgSrc} alt={app.displayName} />
	<span>{app.displayName}</span>
</button>

<svelte:window on:mouseup={handleDragEnd} on:mousemove={handleMouseMove} />

<style>
	.icon-wrapper {
		all: unset;
		border-radius: 6px;
		position: absolute;
		width: 120px;
		padding: 6px 0;
		display: flex;
		flex-direction: column;
		user-select: none;
		gap: 6px;
		cursor: pointer;
	}

	.icon-wrapper:hover {
		background: rgba(150,150,150,.3);
		border-width: 1px;
		border-style: solid;
		border-color: rgba(0,0,0,0.3);
	}

	.dragging {
		border: 2px solid rgba(255, 50, 255, 0.35) !important;
	}

	.icon-wrapper img {
		object-fit: cover;
		height: 63px;
		margin: auto;
	}

	.icon-wrapper span {
		color: white;
		margin: auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
		font-family: "Cascadia Mono", Arial, sans-serif;
		max-width: 90%;
	}
</style>
