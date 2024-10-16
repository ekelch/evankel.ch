<script lang="ts">
	import '../app.css';
	import HeaderItem from './HeaderItem.svelte';
	import StartMenuButton from './StartMenuButton.svelte';
</script>

<slot />

<nav id="navOuter">
	<div id="nav-start">
		<StartMenuButton route="/" />
	</div>
	<div id="nav-items">
		<HeaderItem item="item 1" route="/development" />
		<HeaderItem item="item 2" route="/photography" />
		<HeaderItem item="item 3" route="/climbing" />
		<HeaderItem item="item 4" route="/music" />
		<HeaderItem item="item 5" route="/about" />
	</div>
</nav>

<style lang="postcss">
	:global(html) {
		background-color: #1c1917;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	:global(body) {
		margin: 0;
	}
	:global(p, a, h1, h2, h3, h4, h5, h6, span) {
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
		padding-left: 4px;
		display: flex;
		background-color: #327bf0;
		border: 3px solid transparent;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-image-source: linear-gradient(0deg, #044ed6, #659ffc);
		border-image-slice: 1;
		border-left: 0;
		border-right: 0;
	}
</style>
