<script lang="ts">
	import MainContent from '../components/MainContent.svelte';
	import catImg from '/src/lib/assets/cat.jpg';
	import laptopImg from '/src/lib/assets/laptop.png';
	import omoriImg from '/src/lib/assets/artwork/omoriSide.png';
	import type { appOptions, DesktopIconType, gridlayout } from '../types.ts/layouts.svelte';

	let apps: gridlayout[] = [];
	let availApps: DesktopIconType[] = [
		{
			imgSrc: catImg,
			displayName: 'cs crosshair',
			x: 25,
			y: 25,
			openApp: () => {
				createApp('cross');
			}
		},
		{
			imgSrc: laptopImg,
			displayName: 'about',
			x: 150,
			y: 25,
			openApp: () => {
				createApp('about');
			}
		},
		{
			imgSrc: omoriImg,
			displayName: 'artwork',
			x: 275,
			y: 25,
			openApp: () => {
				createApp('artwork');
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
</style>
