<script lang="ts">
	import resumePdf from '/src/lib/assets/resume.pdf';
	import Site from "./site.svelte"
	import Carplay from "./carplay.svelte"
	const tabs: string[] = ['GITHUB', 'RESUME'];
	let selectedIndex: number = 0;

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === "ArrowLeft") {
			selectedIndex = selectedIndex - 1 >= 0 ? selectedIndex - 1: tabs.length - 1
		} else if (e.key === "ArrowRight") {
			selectedIndex = selectedIndex + 1 < tabs.length ? selectedIndex + 1 : 0
		}
	}
</script>

<div id="about-outer">
	<div id="tab-container">
		{#each tabs as tab, i}
			<button class="tab" class:selected={tab === tabs[selectedIndex]} on:click={() => selectedIndex = i}>{tab}</button>
		{/each}
	</div>
	<div id="tab-content">
		{#if selectedIndex ===0}
			<div id="github-projects">
				<Carplay />
				<Site />
			</div>
		{:else if selectedIndex === 1}
			<iframe src={resumePdf} title="resume"/>
		{/if}
	</div>
</div>

<svelte:window on:keydown={handleKeydown} />

<style>
	#about-outer {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	#tab-container {
		display: flex;
		gap: 6px;
		padding: 6px 8px;
		border-bottom: 1px solid rgba(0,0,0,0.4);
	}
	#tab-content {
		flex: 1;
		overflow-y: auto;
	}
	#tab-content > iframe {
		height: 100%;
		width: 100%;
	}
	#github-projects {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 0 5%;
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
