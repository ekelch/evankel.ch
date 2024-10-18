<script lang="ts">
	import HeaderItem from '../components/HeaderItem.svelte';
	import MainContent from '../components/MainContent.svelte';
	import StartMenuButton from '../components/StartMenuButton.svelte';
	import Time from '../components/Time.svelte';
	import type { appOptions, gridlayout } from '../types.ts/layouts.svelte';

	let apps: gridlayout[] = [];

	const createApp = (name: appOptions) => {
		if (!apps.map((a) => a.c).includes(name)) {
			apps = [
				...apps,
				{
					c: name,
					x: 100 + apps.length * 40,
					y: 100 + apps.length * 40,
					w: 400,
					h: 400,
					z: apps.length + 1,
					show: true
				}
			];
		}
	};

	const closeApp = (appName: string) => {
		apps = apps.filter((a) => a.c !== appName);
	};
</script>

<MainContent {apps} on:closeApp={(e) => closeApp(e.detail)} />
<nav id="navOuter">
	<div id="nav-items">
		<StartMenuButton />
		<div id="nav-border">
			<HeaderItem item="about" on:click={() => createApp('about')} />
			<HeaderItem item="cross" on:click={() => createApp('cross')} />
		</div>
	</div>
	<Time />
</nav>

<style lang="postcss">
	:global(html) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	:global(body) {
		margin: 0;
	}
	:global(p, a, span) {
		color: #e4e4e7;
	}

	#navOuter {
		height: 5vh;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
	}

	#nav-items {
		flex: 1;
		display: flex;
		background-color: #327bf0;
		overflow-x: scroll;
		scrollbar-width: none;
	}

	#nav-border {
		border: 4px solid transparent;
		border-image-source: linear-gradient(0deg, #034fd6, #4f91e8);
		border-image-slice: 1;
		border-left: 0;
		border-right: 0;

		flex: 1;
		display: flex;
	}
</style>
