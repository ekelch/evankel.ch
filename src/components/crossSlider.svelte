<script lang="ts">
	import { type SliderRange } from '../types.ts/layouts.svelte';

	export let label: string;
	export let e: SliderRange;
	let expandedRange: boolean;

	$: console.log(expandedRange);
</script>

<div class="setting">
	<label class="label" for="">{label}</label>
	<input
		id="{label}-range"
		class="input-range"
		type="range"
		min={expandedRange ? e.minExp : e.min}
		max={expandedRange ? e.maxExp : e.max}
		step={e.step}
		bind:value={e.value}
	/>
	<span class="value-label">{e.value}</span>
	{#if e.maxExp}
		<label>
			e
			<input type="checkbox" bind:checked={expandedRange} />
		</label>
	{/if}
</div>

<style>
	.setting {
		display: flex;
		border: 1px solid rgba(0, 0, 0, 0.3);
		padding: 6px 0;
		border-radius: 6px;
	}
	.label {
		flex: 1;
	}
	.input-range {
		flex: 3;
	}
	.value-label {
		color: black;
		flex: 1;
	}
</style>
