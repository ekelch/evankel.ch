<script lang="ts">
	import MainContent from '../components/MainContent.svelte';
	import catImg from '/src/lib/assets/cat.jpg';
	import aboutImg from '/src/lib/assets/about/allSongs.png';
	import godotImg from '/src/lib/assets/godotIcon.png';
	import type { appOptions, gridlayout } from '../types.ts/layouts.svelte';
	import StartMenuItem from "../components/StartMenuItem.svelte";
	import {type ComponentType } from "svelte";
	import About from "../routes/about/about.svelte"
	import Cross from '../routes/cross/cross.svelte';
	import GodotTest from "../routes/godotTest/GodotTest.svelte";

	let appIndex = 0;
	const createApp = (displayName: string, desktopIconImg: any, modCode: appOptions, content: ComponentType): gridlayout => {
		return {
			modCode: modCode,
			displayName: displayName,
			imgSrc: desktopIconImg,
			iconX: 25,
			iconY: 25 + appIndex++ * 125,
			x: 20,
			y: 20,
			w: 800,
			h: 600,
			z: 0,
			show: false,
			content: content
		}
	}
	let apps: gridlayout[] = [
			createApp("About", aboutImg, 'about', About),
			createApp("Godot Test", godotImg, 'godotTest', GodotTest),
			createApp("CS2 Crosshair Tool", catImg, 'cross', Cross)
	];
</script>

<div id="app">
	<div id="app-content">
		<MainContent bind:apps />
	</div>
	<nav id="navbar">
		<div id="nav-items">
			<div id="nav-border">
				{#each apps as app}
					<StartMenuItem item={app.displayName} on:click={() => {app.show = true; apps = apps}} />
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
