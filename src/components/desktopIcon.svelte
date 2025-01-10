<script lang="ts">
	import { type DesktopIconType } from '../types.ts/layouts.svelte';
	import {abs} from "mathjs";

	export let icon: DesktopIconType;
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
			icon.x += e.movementX;
			icon.y += e.movementY;
		}
	};

	const handleMouseUp = (e: MouseEvent) => {
		if (abs(dragStartPos.x - e.clientX) < 5 && abs(dragStartPos.y - e.clientY) < 5) {
			icon.openApp();
		}
	}
</script>

<button
	style="left: {icon.x}px; top: {icon.y}px;"
	class="icon-wrapper"
	class:dragging
	on:mousedown|preventDefault={handleDragStart}
	on:click={handleMouseUp}
	on:dblclick={handleMouseUp}
>
	<img src={icon.imgSrc} alt={icon.displayName} />
	<span>{icon.displayName}</span>
</button>

<svelte:window on:mouseup={handleDragEnd} on:mousemove={handleMouseMove} />

<style>
	.icon-wrapper {
		background: rgba(0, 0, 0, 0.05);
		border: none;
		border-radius: 12px;
		position: absolute;
		width: 100px;
		padding: 4px;
		display: flex;
		flex-direction: column;
		user-select: none;
		gap: 6px;
		cursor: pointer;
	}

	.dragging {
		border: 1px solid rgba(0, 120, 180, 0.5);
	}

	.icon-wrapper img {
		object-fit: cover;
		width: 63px;
		height: 63px;
		margin: auto;
	}

	.icon-wrapper span {
		margin: auto;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
	}
</style>
