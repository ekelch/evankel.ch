<script lang="ts">
	import { type gridlayout, type crosshair } from '../types.ts/layouts.svelte';
	import CrossSlider from './crossSlider.svelte';

	const defaultCrosshair: crosshair = {
		style: 'default',
		thickness: { min: 0, max: 10, minExp: 0, maxExp: 255, step: 0.1, value: 2 },
		size: { min: 0, max: 100, minExp: 0, maxExp: 500, step: 0.1, value: 25 },
		gap: { min: 0, max: 20, minExp: 0, maxExp: 255, step: 0.1, value: 5 },
		outline: { min: 0, max: 3, step: 1, value: 0 },
		dot: false,
		color: 'cyan',
		r: { min: 0, max: 255, step: 1, value: 3 },
		g: { min: 0, max: 255, step: 1, value: 230 },
		b: { min: 0, max: 255, step: 1, value: 230 },
		alpha: { min: 0, max: 255, step: 1, value: 255 }
	};

	let c: crosshair = defaultCrosshair;
	let posX: number = 0;
	let posY: number = 0;
	let locked: boolean;
	export let a: gridlayout;
	let viewmodel: HTMLDivElement;

	const mouseMove = (e: MouseEvent) => {
		if (!locked) {
			if (e.clientX - a.x > 0 && e.clientX - a.x < viewmodel.clientWidth) {
				posX = e.clientX - a.x;
			}
			if (e.clientY - a.y > 0 && e.clientY - a.y < viewmodel.clientHeight) {
				posY = e.clientY - a.y;
			}
		}
	};

	const toggleLock = () => {
		locked = !locked;
	};

	$: output = `red: ${c.r.value}
blue: ${c.g.value}
green: ${c.b.value}
size: ${c.size.value}`;
</script>

<div id="cross-container">
	<div id="left">
		<div
			id="view"
			on:mousemove={mouseMove}
			on:mousedown={toggleLock}
			bind:this={viewmodel}
			style="cursor: {locked ? 'pointer' : 'none'};"
		>
			<div
				id="c-top"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 255});

				height: {c.size.value}px;
				width: {c.thickness.value}px;
				left: {posX}px;
				top: {posY}px;

				transform: translateY({c.size.value / 2 + c.thickness.value / 2 + c.gap.value}px);
				"
			/>
			<div
				id="c-bottom"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 255});

				height: {c.size.value}px;
				width: {c.thickness.value}px;
				left: {posX}px;
				top: {posY}px;

				transform: translateY({-(c.size.value / 2 + c.thickness.value / 2 + c.gap.value)}px);

				"
			/>
			<div
				id="c-left"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 255});

				height: {c.size.value}px;
				width: {c.thickness.value}px;
				left: {posX}px;
				top: {posY}px;

				transform: translateX({-(c.size.value / 2 + c.thickness.value / 2 + c.gap.value)}px) rotate(-90deg);
				"
			/>
			<div
				id="c-right"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 255});

				height: {c.size.value}px;
				width: {c.thickness.value}px;
				left: {posX}px;
				top: {posY}px;

				transform: translateX({c.size.value / 2 + c.thickness.value / 2 + c.gap.value}px) rotate(90deg);

				"
			/>
		</div>
		<textarea readonly id="output">{output}</textarea>
	</div>
	<div id="settings">
		<CrossSlider label="size" bind:e={c.size} />
		<CrossSlider label="thickness" bind:e={c.thickness} />
		<CrossSlider label="gap" bind:e={c.gap} />
		<CrossSlider label="outline" bind:e={c.outline} />
		<div id="color-group">
			<CrossSlider label="red" bind:e={c.r} />
			<CrossSlider label="green" bind:e={c.g} />
			<CrossSlider label="blue" bind:e={c.b} />
			<CrossSlider label="alpha" bind:e={c.alpha} />
		</div>
	</div>
</div>

<style>
	#cross-container {
		display: flex;
		height: 100%;
	}
	#left {
		flex: 3;
		display: flex;
		flex-direction: column;
		margin: 6px;
		gap: 8px;
	}
	#view {
		height: 70%;
		background: white;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		overflow: hidden;
	}
	#view div {
		position: absolute;
	}
	#settings {
		margin: 6px;
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	#color-group {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-left: 12px;
	}
	#output {
		flex: 1;
		resize: unset;
		overflow-y: scroll;
	}
</style>
