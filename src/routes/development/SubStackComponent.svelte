<script lang="ts">
    import type {SubStack} from "../../types.d.ts/Development";
    export let subStack: SubStack;
</script>

<p class="text-white mb-2 text-2xl text-center font-bold">{subStack.subName}</p>
{#each subStack.subContents as contents}
<p class="text-center mt-1">{contents}</p>
{/each}