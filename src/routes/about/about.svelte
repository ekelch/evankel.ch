<script lang="ts">
	import resumePdf from '/src/lib/assets/resume.pdf';
	import Site from "./site.svelte"
	import Carplay from "./carplay.svelte"
	const tabs: string[] = ['GITHUB', 'RESUME'];
	let selected: string = tabs[0];
</script>

<div id="outer">
	<div id="tab-container">
		{#each tabs as tab}
			<button class="tab" class:selected={tab === selected} on:click={() => selected = tab}>{tab}</button>
		{/each}
	</div>
	<div id="tab-content">
		{#if selected === tabs[0]}
			<div id="github-projects">
				<Site />
				<Carplay />
			</div>
		{:else if selected === tabs[1]}
			<iframe src={resumePdf} title="resume" />
		{/if}
	</div>
</div>

<style>
	#outer {
		display: flex;
		flex-direction: column;
		height: 97vh;
	}
	#tab-container {
		display: flex;
		gap: 6px;
		padding: 4px 8px 8px;
	}
	#tab-content {
		flex: 1;
	}
	#tab-content > iframe {
		height: 100%;
		width: 100%;
	}
	#github-projects {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.tab {
		all: unset;
		cursor: pointer;
		padding: 6px 16px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		color: black;
	}
	.tab:hover {
		opacity: 0.7;
	}
	.selected {
		background: rgb(10, 111, 240);
		color: white;
	}
</style>
