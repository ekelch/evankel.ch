<script lang="ts">
	import { type crosshair } from '../types.ts/layouts.svelte';
	import CrossSlider from './crossSlider.svelte';

	const defaultCrosshair: crosshair = {
		style: 'default',
		alpha: { min: 0, max: 255, value: 200 },
		thickness: { min: 0, max: 100, value: 10 },
		size: { min: 0, max: 100, value: 10 },
		gap: { min: 0, max: 100, value: 10 },
		outline: { min: 0, max: 3, value: 0 },
		dot: false,
		color: 'cyan',
		r: { min: 0, max: 255, value: 30 },
		g: { min: 0, max: 255, value: 140 },
		b: { min: 0, max: 255, value: 170 }
	};

	let c: crosshair = defaultCrosshair;

	$: output = `red: ${c.r.value}
blue: ${c.g.value}
green: ${c.b.value}
size: ${c.size.value}`;
</script>

<div id="cross-container">
	<div id="left">
		<div
			id="view"
			style="background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value});"
		>
			view model
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
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		overflow: clip;
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
