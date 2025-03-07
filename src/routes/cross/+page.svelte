<script lang="ts">
	import { stubApp } from '../../types.ts/layouts.svelte';
	import Cross from './cross.svelte';
</script>

<div id="outer-container">
	<div id="cross-container">
		<Cross app={stubApp} />
	</div>
</div>

<style>
	#outer-container {
		height: 100vh;
		background-color: rgba(200, 200, 200, 1);
	}
	#cross-container {
		height: 80%;
		width: 90%;
		margin: auto;
	}
</style>
