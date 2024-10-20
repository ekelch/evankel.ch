<script lang="ts">
	import { type gridlayout } from '../../types.ts/layouts.svelte';
	import Cross from './cross.svelte';

	let a: gridlayout = {
		c: 'cross',
		x: 0,
		y: 0,
		w: 1000,
		h: 1000,
		z: 1,
		show: true
	};
</script>

<div id="outer-container">
	<div id="cross-container">
		<Cross {a} />
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
