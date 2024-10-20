<script lang="ts">
	import { type gridlayout, type crosshair } from '../../types.ts/layouts.svelte';
	import CrossSlider from './crossSlider.svelte';

	const defaultCrosshair: crosshair = {
		style: 'default',
		length: { min: 0, max: 10, step: 0.1, value: 1 },
		thickness: { min: 0.1, max: 6, step: 0.1, value: 1 },
		gap: { min: -5, max: 5, step: 1, value: -2 },
		outline: { min: 0, max: 3, step: 0.1, value: 1 },
		dot: false,
		color: 1,
		r: { min: 0, max: 255, step: 1, value: 100 },
		g: { min: 0, max: 255, step: 1, value: 230 },
		b: { min: 0, max: 255, step: 1, value: 230 },
		alpha: { min: 0, max: 250, step: 1, value: 250 }
	};

	let viewmodel: HTMLDivElement;
	let c: crosshair = defaultCrosshair;
	let posX: number = 0;
	let posY: number = 0;
	let locked: boolean;
	let copied: boolean;
	export let a: gridlayout;

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

	const copyOutputToClipboard = () => {
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	};

	const setColor = (color: number) => {
		if (color === 1) {
			//green
			c.color = 1;
			c.r.value = 0;
			c.g.value = 255;
			c.b.value = 0;
		} else if (color === 2) {
			//yellow
			c.color = 2;
			c.r.value = 255;
			c.g.value = 255;
			c.b.value = 0;
		} else if (color === 3) {
			//blue
			c.color = 3;
			c.r.value = 0;
			c.g.value = 0;
			c.b.value = 255;
		} else if (color === 4) {
			//cyan
			c.color = 4;
			c.r.value = 0;
			c.g.value = 255;
			c.b.value = 255;
		}
	};

	const toggleLock = () => {
		locked = !locked;
	};

	const SCALE_FACTOR = 2;
	const GAP_OFFSET = 0;
	$: border = (c.outline.value / 1) | 0;
	$: scaledLength = SCALE_FACTOR * (c.length.value + border);
	$: scaledThickness = SCALE_FACTOR * (c.thickness.value + border);
	$: translate = scaledLength + scaledThickness + c.gap.value + GAP_OFFSET;

	$: output = `cl_crosshairsize ${c.length.value}
cl_crosshairthickness ${c.thickness.value}
cl_crosshairgap ${c.gap.value}
cl_crosshairoutline ${c.outline.value}
cl_crosshairdot ${c.dot}
cl_crosshaircolor_r: ${c.r.value}
cl_crosshaircolor_g: ${c.g.value}
cl_crosshaircolor_b: ${c.b.value}
cl_crosshairalpha ${c.alpha.value}
`;
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
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 250});

				height: {scaledLength}px;
				width: {scaledThickness}px;
				left: {posX}px;
				top: {posY}px;

				border: {border}px black;
				border-style: {border ? 'solid' : 'outset'};

				transform: translateY({-translate}px);
				"
			/>
			<div
				id="c-bottom"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 250});

				height: {scaledLength}px;
				width: {scaledThickness}px;
				left: {posX}px;
				top: {posY}px;

				border: {border}px black;
				border-style: {border ? 'solid' : 'outset'};

				transform: translateY({translate}px);
				"
			/>
			<div
				id="c-left"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 250});

				height: {scaledLength}px;
				width: {scaledThickness}px;
				left: {posX}px;
				top: {posY}px;

				border: {border}px black;
				border-style: {border ? 'solid' : 'outset'};

				transform: translateX({-translate}px) rotate(-90deg);
				"
			/>
			<div
				id="c-right"
				style="
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 250});

				height: {scaledLength}px;
				width: {scaledThickness}px;
				left: {posX}px;
				top: {posY}px;

				border: {border}px black;
				border-style: {border ? 'solid' : 'outset'};

				transform: translateX({translate}px) rotate(90deg);
				"
			/>
			{#if c.dot}
				<div
					id="c-dot"
					style="
					background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / 250});

					height: {scaledThickness}px;
					width: {scaledThickness}px;
					left: {posX}px;
    				top: {posY}px;

                    border: {border}px black;
                    border-style: {border ? 'solid' : 'outset'};
                    transform: translateY({c.length.value - c.thickness.value}px);

    				"
				/>
			{/if}
		</div>
		<textarea readonly id="output">{output}</textarea>
		<button id="copy-btn" on:click={copyOutputToClipboard}
			>{copied ? 'copied!' : 'copy text'}</button
		>
	</div>
	<div id="settings">
		<CrossSlider label="length" bind:e={c.length} />
		<CrossSlider label="thickness" bind:e={c.thickness} />
		<CrossSlider label="gap" bind:e={c.gap} />
		<CrossSlider label="outline" bind:e={c.outline} />
		<div id="default-colors">
			<span>default colors:</span>
			<button style="background-color: lime;" on:click={() => setColor(1)} />
			<button style="background-color: yellow;" on:click={() => setColor(2)} />
			<button style="background-color: blue;" on:click={() => setColor(3)} />
			<button style="background-color: cyan;" on:click={() => setColor(4)} />
			<span>dot:</span>
			<input type="checkbox" bind:checked={c.dot} />
		</div>
		<div id="color-group">
			<CrossSlider label="r" bind:e={c.r} />
			<CrossSlider label="g" bind:e={c.g} />
			<CrossSlider label="b" bind:e={c.b} />
			<CrossSlider label="a" bind:e={c.alpha} />
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
		background-image: url('/src/lib/assets/cat.jpg');
		background-size: cover;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		overflow: hidden;
	}
	#view div {
		position: absolute;
		box-sizing: border-box;
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
	}
	#default-colors {
		display: flex;
		gap: 8px;
	}
	#default-colors span {
		color: black;
		margin: auto 4px;
	}
	#default-colors button {
		all: unset;
		width: 32px;
		height: 24px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 4px;
	}
	#default-colors button:hover {
		cursor: pointer;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
	}

	#output {
		flex: 1;
		resize: unset;
		overflow-y: scroll;
	}

	#copy-btn {
		margin: -10px 0 0 0;
	}
</style>
