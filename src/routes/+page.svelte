<script lang="ts">
	import HeaderItem from '../components/HeaderItem.svelte';
	import MainContent from '../components/MainContent.svelte';
	import StartMenu from '../components/StartMenu.svelte';
	import StartMenuButton from '../components/StartMenuButton.svelte';
	import Time from '../components/Time.svelte';
	import type { appOptions, DesktopIconType, gridlayout } from '../types.ts/layouts.svelte';

	let apps: gridlayout[] = [];
	let availApps: DesktopIconType[] = [
		{
			imgSrc: '/src/lib/assets/cat.jpg',
			displayName: 'cs crosshair',
			x: 25,
			y: 25,
			openApp: () => {
				createApp('cross');
			}
		},
		{
			imgSrc: '/src/lib/assets/laptop.png',
			displayName: 'about',
			x: 150,
			y: 25,
			openApp: () => {
				createApp('about');
			}
		}
	];
	let innerWidth: number;
	let innerHeight: number;
	let showStart: boolean;

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
	<div id="main">
		<MainContent bind:apps desktopIcons={availApps} on:openApp={(e) => createApp(e.detail)} />
	</div>
	{#if showStart}
		<StartMenu {availApps} />
	{/if}
	<nav id="navbar">
		<div id="nav-items">
			<StartMenuButton />

			<div id="nav-border">
				{#each apps as app}
					<HeaderItem item={app.c} on:click={() => createApp(app.c)} />
				{/each}
			</div>
		</div>
		<Time />
	</nav>
</div>

<svelte:window
	bind:innerWidth
	bind:innerHeight
	on:mousedown={(e) => {
		const t = e.target?.textContent || e.target?.previousElementSibling?.textContent || '';
		if (t === 'start') showStart = !showStart;
		else if (showStart) showStart = false;
	}}
/>

<style lang="postcss">
	:global(html) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		overflow: hidden;
	}
	:global(body) {
		margin: 0;
	}
	:global(p, span) {
		color: #e4e4e7;
	}

	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	#main {
		flex: 1;
	}

	#navbar {
		height: 44px;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		z-index: 5;
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
