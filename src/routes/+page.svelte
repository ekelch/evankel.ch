<script lang="ts">
	import MainContent from '../components/MainContent.svelte';
	import catImg from '/src/lib/assets/cat.jpg';
	import aboutImg from '/src/lib/assets/about/allSongs.png';
	import svelteImg from '/src/lib/assets/icons/svelte.png'
	import txtIcon from '/src/lib/assets/icons/txtIcon.png'
	import {AppOptionsEnum, type gridlayout} from '../types.ts/layouts.svelte';
	import StartMenuItem from "../components/StartMenuItem.svelte";
	import {type ComponentType} from "svelte";
	import Cross from '../routes/cross/cross.svelte';
	import Carplay from "../Portfolio/Carplay.svelte";
	import Site from "../Portfolio/Site.svelte";
	import Resume from "../Portfolio/Resume.svelte";

	$: appsShown = apps.filter(a => a.show)
	let appIndex = 0;
	const createApp = (displayName: string, desktopIconImg: any, modCode: AppOptionsEnum, content: ComponentType): gridlayout => {
		return {
			modCode: modCode,
			displayName: displayName,
			imgSrc: desktopIconImg,
			iconX: (appIndex / 6 | 0) * 150 + 25,
			iconY: appIndex++ % 6 * 150 + 25,
			x: 275,
			y: 50,
			w: 1000,
			h: 750,
			z: 0,
			show: false,
			content: content
		}
	}

	const focusWindow = (e: CustomEvent) => {
		const zc = e.detail.z;
		apps = apps.map((a) => {
			return a.show ?
					{ ...a, z: a.z === zc ? appsShown.length : a.z > zc ? a.z - 1 : a.z } :
					a
		});
	};

	let apps: gridlayout[] = [
			createApp("Resume", txtIcon, AppOptionsEnum.resume, Resume),
			createApp("Carplay", aboutImg, AppOptionsEnum.carplay, Carplay),
			createApp("This Website", svelteImg, AppOptionsEnum.svelte, Site),
			createApp("CS2 Crosshair Tool", catImg, AppOptionsEnum.cross, Cross)
	];
</script>

<div id="app">
	<div id="app-content">
		<MainContent bind:apps on:focusWindow={focusWindow}/>
	</div>
	<nav id="navbar">
		<div id="nav-items">
			<div id="nav-border">
				{#each appsShown as app}
					<StartMenuItem appName={app.displayName} on:click={() => {focusWindow({detail: app})}} />
				{/each}
			</div>
		</div>
	</nav>
</div>

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
		background-color: rgb(44,44,44);
		border-top: 2px solid rgba(255, 200, 255, 0.2);
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
