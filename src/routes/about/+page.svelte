<script lang="ts">
	import { type gridlayout } from '../../types.ts/layouts.svelte';
	import About from './about.svelte';
	let a: gridlayout;
</script>

<About {a} />
