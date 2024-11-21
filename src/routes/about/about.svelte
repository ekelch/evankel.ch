<script lang="ts">
	import resumePdf from '/src/lib/assets/resume.pdf';
	const tabs: string[] = ['GITHUB', 'RESUME'];
	let selected: string = tabs[0];
	export let a;

	const tabClicked = (clicked: any) => {
		selected = clicked.target.innerText;
	};
</script>

<div id="outer">
	<div id="tab-container">
		{#each tabs as tab}
			<button class="tab" class:selected={tab === selected} on:click={tabClicked}>{tab}</button>
		{/each}
	</div>
	<div id="tab-content">
		{#if selected === tabs[0]}
			<div>
				View the source code for this site here:
				<a target="_blank" href="https://github.com/ekelch/evankel.ch">github/ekelch</a>
			</div>
		{:else if selected === tabs[1]}
			<iframe src={resumePdf} frameborder="0" title="resume" />
		{/if}
	</div>
</div>

<style>
	#outer {
		display: flex;
		flex-direction: column;
		height: 100%;
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
