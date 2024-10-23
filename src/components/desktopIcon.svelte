<script lang="ts">
	import { type DesktopIconType } from '../types.ts/layouts.svelte';

	export let icon: DesktopIconType;
	let dragging: boolean;

	const startDrag = () => {
		dragging = true;
	};

	const endDrag = () => {
		dragging = false;
	};

	const mouseMove = (e: MouseEvent) => {
		if (dragging) {
			icon.x += e.movementX;
			icon.y += e.movementY;
		}
	};
</script>

<div
	style="left: {icon.x}px; top: {icon.y}px;"
	class="icon-wrapper"
	class:dragging
	on:mousedown|preventDefault={startDrag}
	on:dblclick={icon.openApp}
>
	<img src={icon.imgSrc} alt={icon.appName} />
	<span>{icon.appName}</span>
</div>

<svelte:window on:mouseup={endDrag} on:mousemove={mouseMove} />

<style>
	.icon-wrapper {
		position: absolute;
		width: 100px;
		padding: 4px;
		display: flex;
		flex-direction: column;
		user-select: none;
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
