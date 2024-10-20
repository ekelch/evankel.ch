<script lang="ts">
	import { type SliderRange } from '../../types.ts/layouts.svelte';

	export let label: string;
	export let e: SliderRange;
	let expandedRange: boolean;
</script>

<div class="setting">
	<div class="row">
		<label class="text-label" for="{label}-range">{label}: {e.value}</label>
		{#if e.maxExp}
			<label class="expanded-label">
				e
				<input type="checkbox" bind:checked={expandedRange} />
			</label>
		{/if}
	</div>

	<input
		id="{label}-range"
		class="input-range"
		type="range"
		min={expandedRange ? e.minExp : e.min}
		max={expandedRange ? e.maxExp : e.max}
		step={e.step}
		bind:value={e.value}
	/>
</div>

<style>
	.setting {
		display: flex;
		flex-direction: column;
		border: 1px solid rgba(0, 0, 0, 0.3);
		padding: 6px 0;
		border-radius: 6px;
		background-color: white;
		gap: 4px;
	}
	.row {
		display: flex;
		margin: 0 32px 4px;
	}
	.text-label {
		color: black;
	}
	.input-range {
		margin: 0 32px;
	}
	.expanded-label {
		margin: 0 4px 0 auto;
	}
</style>
