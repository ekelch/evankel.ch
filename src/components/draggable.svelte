<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type gridlayout } from '../types.ts/layouts.svelte';

	const dispatch = createEventDispatcher();

	const MIN_WIDTH = 250;
	const MIN_HEIGHT = 200;
	const MAX_OFFSET = 100;
	const NAV_HEIGHT = 44;

	export let a: gridlayout;
	let dragging: boolean;
	let resizing: boolean;
	let windowWidth: number;
	let windowHeight: number;
	let maximize: boolean;

	const mouseUp = (e: MouseEvent) => {
		dragging = false;
		resizing = false;
	};
	const minimize = () => {
		a.show = false;
	};
	const toggleMax = () => {
		maximize = !maximize;
	};
	const close = () => {
		dispatch('closeApp');
	};
	const focusWindow = (e: any) => {
		if (e.target?.id === 'window-header') {
			dragging = true;
		} else if (e.target?.id === 'drag-handle') {
			resizing = true;
		}
		dispatch('focusWindow', a);
	};
	const mouseMove = (e: MouseEvent) => {
		if (resizing) {
			if (a.w + e.movementX >= MIN_WIDTH && a.x + a.w + e.movementX < windowWidth) {
				a.w += e.movementX;
			}
			if (a.h + e.movementY >= MIN_HEIGHT && a.y + a.h + e.movementY < windowHeight - NAV_HEIGHT) {
				a.h += e.movementY;
			}
		} else if (dragging) {
			if (a.x + e.movementX > MAX_OFFSET - a.w && a.x + e.movementX + MAX_OFFSET < windowWidth) {
				a.x += e.movementX;
			}
			if (a.y + e.movementY > 0 && a.y + e.movementY + MAX_OFFSET < windowHeight) {
				a.y += e.movementY;
			}
		}
	};
</script>

<div
	class="window"
	on:mousedown={focusWindow}
	style="
	left: {maximize ? 0 : a.x}px;
	top: {maximize ? 0 : a.y}px;
	width: {maximize ? windowWidth : a.w}px;
	height: {maximize ? windowHeight : a.h}px;
	z-index: {a.show ? a.z : -1};
	user-select: {dragging || resizing ? 'none' : 'initial'};
	"
>
	<div id="window-header">
		<div class="window-buttons">
			<button on:click={minimize}>-</button>
			<button on:click={toggleMax}>o</button>
			<button on:click={close}>x</button>
		</div>
	</div>
	<div class="window-contents">
		<slot />
	</div>
	<div id="drag-handle" />
</div>

<svelte:window
	on:mouseup={mouseUp}
	on:mousemove={mouseMove}
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
/>

<style>
	.window {
		position: absolute;

		display: flex;
		flex-direction: column;

		background-color: rgba(233, 233, 233, 0.96);
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
		overflow: clip;
	}

	#window-header {
		display: flex;
		cursor: move;
		background-color: lightgrey;
		border-bottom: 1px solid black;
	}

	.window-buttons {
		display: flex;
		gap: 2px;
		margin: 2px 4px 2px auto;
	}

	.window-contents {
		all: unset;
		flex: 1;
		overflow-y: auto;
		overflow-x: clip;
	}

	#drag-handle {
		height: 8px;
		width: 8px;
		position: absolute;
		bottom: 0;
		right: 0;
	}
	#drag-handle:hover {
		cursor: nwse-resize;
	}
</style>
