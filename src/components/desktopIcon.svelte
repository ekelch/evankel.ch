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
		background: rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(170, 170, 170, 0.2);
		border-radius: 12px;
		position: absolute;
		width: 120px;
		padding: 12px 8px;
		display: flex;
		flex-direction: column;
		user-select: none;
		gap: 6px;
		cursor: pointer;
	}

	.dragging {
		border: 1px solid rgba(255, 50, 255, 0.5);
	}

	.icon-wrapper img {
		object-fit: cover;
		width: 63px;
		height: 63px;
		margin: auto;
	}

	.icon-wrapper span {
		color: white;
		margin: auto;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
	}
</style>
