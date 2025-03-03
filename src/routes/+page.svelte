<script lang="ts">
	import MainContent from '../components/MainContent.svelte';
	import catImg from '/src/lib/assets/cat.jpg';
	import aboutImg from '/src/lib/assets/about/allSongs.png';
	import godotImg from '/src/lib/assets/godotIcon.png';
	import type { appOptions, DesktopIconType, gridlayout } from '../types.ts/layouts.svelte';
	import StartMenuItem from "../components/StartMenuItem.svelte";

	let apps: gridlayout[] = [];
	let availApps: DesktopIconType[] = [
		{
			imgSrc: aboutImg,
			displayName: 'about',
			x: 25,
			y: 25,
			openApp: () => {
				createApp('about');
			}
		},
		{
			imgSrc: godotImg,
			displayName: 'game test',
			x: 175,
			y: 25,
			openApp: () => {
				createApp('godotTest');
			}
		},
		{
			imgSrc: catImg,
			displayName: 'cs crosshair',
			x: 25,
			y: 175,
			openApp: () => {
				createApp('cross');
			}
		},
	];
	let innerWidth: number;
	let innerHeight: number;

	const createApp = (name: appOptions) => {
		if (!apps.map((a) => a.c).includes(name)) {
			apps = [
				...apps,
				{
					c: name,
					x: 20 + apps.length * 40,
					y: 20 + apps.length * 40,
					w: innerWidth * 0.85,
					h: innerHeight * 0.85,
					z: apps.length + 1,
					show: true
				}
			];
		} else {
			const a = apps.find((a) => a.c === name);
			a!.show = !a?.show;
			apps = apps;
		}
	};
</script>

<div id="app">
	<div id="app-content">
		<MainContent bind:apps desktopIcons={availApps} on:openApp={(e) => createApp(e.detail)} />
	</div>
	<nav id="navbar">
		<div id="nav-items">
			<div id="nav-border">
				{#each apps as app}
					<StartMenuItem item={app.c} on:click={() => createApp(app.c)} />
				{/each}
			</div>
		</div>
	</nav>
</div>

<svelte:window
	bind:innerWidth
	bind:innerHeight
/>

<style lang="postcss">
	:global(html) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		overflow: hidden;
	}
	:global(body) {
		margin: 0;
	}

	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	#app-content {
		flex: 1;
	}

	#navbar {
		height: 44px;
		width: 100%;
		display: flex;
		z-index: 5;
	}
	#nav-items {
		flex: 1;
		display: flex;
		background-color: darkseagreen;
		overflow-x: scroll;
		scrollbar-width: none;
	}
	#nav-border {
		border: 4px solid transparent;
		border-left: 0;
		border-right: 0;
		flex: 1;
		display: flex;
	}
</style>
