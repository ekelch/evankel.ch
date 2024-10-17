<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => {
		dispatch('closeApp');
	};

	let x = 100;
	let y = 100;
	let w = 400;
	let h = 300;
	let dragging: boolean;

	const mouseDown = (e: MouseEvent) => {
		dragging = true;
	};
	const mouseUp = (e: MouseEvent) => {
		dragging = false;
	};
	const mouseMove = (e: MouseEvent) => {
		if (dragging) {
			x += e.movementX;
			y += e.movementY;
		}
	};
</script>

<div class="window" style="left: {x}px; top: {y}px; width: {w}px; height: {h}px">
	<div class="window-header" on:mousedown={mouseDown}>
		<div class="window-buttons">
			<button on:click>-</button>
			<button on:click>o</button>
			<button on:click={close}>x</button>
		</div>
	</div>
	<div class="window-contents">
		<slot />
	</div>
</div>

<svelte:window on:mouseup={mouseUp} on:mousemove={mouseMove} />

<style>
	.window {
		position: absolute;

		display: flex;
		flex-direction: column;

		background-color: rgba(233, 233, 233, 0.9);
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
		text-align: center;

		border: 1px solid black;
		overflow: clip;
	}

	.window-header {
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
	}
</style>
