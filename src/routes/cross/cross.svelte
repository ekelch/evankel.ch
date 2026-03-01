<script lang="ts">
	import {type gridlayout, type crosshair, type crosshair_values} from '../../types.ts/layouts.svelte';
	import CrossSlider from './crossSlider.svelte';
	import {crosshair_default, crosshair_preset_1, crosshair_preset_2, crosshair_preset_3} from "./defaultCrosshairs";

	const defaultCrosshair: crosshair = crosshair_default;

	let viewmodel: HTMLDivElement;
	let c: crosshair = defaultCrosshair;
	let posX: number = 0;
	let posY: number = 0;
	let locked: boolean;
	let copied: boolean;
	export let app: gridlayout;

	const setCrosshairValues = (target: crosshair_values) => {
		c.style = target.style
		c.length.value = target.length
		c.thickness.value = target.thickness
		c.gap.value = target.gap
		c.outline.value = target.outline
		c.dot = target.dot
		c.color = target.color
		c.r.value = target.r
		c.g.value = target.g
		c.b.value = target.b
		c.alpha.value = target.alpha
	}

	const mouseMove = (e: MouseEvent) => {
		if (!locked) {
			if (e.clientX - app.x > 0 && e.clientX - app.x < viewmodel.clientWidth) {
				posX = e.clientX - app.x;
			}
			if (e.clientY - app.y > 0 && e.clientY - app.y < viewmodel.clientHeight) {
				posY = e.clientY - app.y;
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
		c.color = color;
		if (color === 1) {
			c.r.value = 0;
			c.g.value = 255;
			c.b.value = 0;
		} else if (color === 2) {
			c.r.value = 255;
			c.g.value = 255;
			c.b.value = 0;
		} else if (color === 3) {
			c.r.value = 0;
			c.g.value = 0;
			c.b.value = 255;
		} else if (color === 4) {
			c.r.value = 0;
			c.g.value = 255;
			c.b.value = 255;
		}
	};

	const toggleLock = () => {
		locked = !locked;
	};

	const SCALE_FACTOR = 2;
	const GAP_OFFSET = 4;
	$: border = (c.outline.value / 1) | 0;
	$: scaledLength = SCALE_FACTOR * (c.length.value + border);
	$: scaledThickness = SCALE_FACTOR * (c.thickness.value + border);
	$: translate = scaledLength + scaledThickness + c.gap.value + GAP_OFFSET

	$: output = `cl_crosshairsize ${c.length.value};
cl_crosshairthickness ${c.thickness.value};
cl_crosshairgap ${c.gap.value + GAP_OFFSET};
cl_crosshair_drawoutline ${c.outline.value ? 1 : 0};
cl_crosshair_outlinethickness ${c.outline.value};
cl_crosshairdot ${c.dot};
cl_crosshaircolor_r ${c.r.value};
cl_crosshaircolor_g ${c.g.value};
cl_crosshaircolor_b ${c.b.value};
cl_crosshairalpha ${c.alpha.value};
cl_crosshair_recoil false;
cl_crosshairstyle 4;
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
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / c.alpha.max});

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
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / c.alpha.max});

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
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / c.alpha.max});

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
				background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / c.alpha.max});

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
					background-color: rgba({c.r.value}, {c.g.value}, {c.b.value}, {c.alpha.value / c.alpha.max});

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
		<div id="cross-presets">
			<button class="cross-preset" on:click={() => setCrosshairValues(crosshair_preset_1)}>default 1</button>
			<button class="cross-preset" on:click={() => setCrosshairValues(crosshair_preset_2)}>default 2</button>
			<button class="cross-preset" on:click={() => setCrosshairValues(crosshair_preset_3)}>default 3</button>
		</div>
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
		background-color: white;
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
	#cross-presets {
		display: flex;
		height: 40px;
		gap: 8px;
	}
	.cross-preset {
		flex: 1;
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
