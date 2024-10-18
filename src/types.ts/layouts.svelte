<script context="module" lang="ts">
	import About from '../components/about.svelte';

	export type appOptions = 'about' | 'cross';

	export type gridlayout = {
		c: appOptions;
		x: number;
		y: number;
		w: number;
		h: number;
		z: number;
		show?: boolean;
	};
</script>

;
