<script lang="ts">
    import {type menuOptions} from "../types.ts/layouts.svelte";

    interface props {
        menuOption: menuOptions,
        selected: menuOptions,
        clicked: () => void
    }

    let {menuOption, selected, clicked}: props = $props()
    let expanded: boolean = $derived(menuOption === selected);

    function handleOnClick() {
        expanded = !expanded;
        clicked();
    }

</script>

<button class:expanded class="dropdown" onclick={handleOnClick}>
    {#if expanded}
        <span>close: {menuOption}</span>
    {:else}
        <span>{menuOption}</span>
    {/if}
</button>

<style>
    .dropdown {
        border: none;
        cursor: pointer;
        min-height: 44px;
        min-width: 200px;
        background: hsl(180 10% 70%);

        font-family: monospace;
        font-size: 18px;
        box-shadow: 2px 2px 2px hsl(0 0 0/50%);
        border-radius: 2px;
    }

    .dropdown:hover {
        background: hsl(190 17% 76%);
        box-shadow: 3px 3px 2px hsl(0 0 15%);
        font-weight: bold;
    }

    .expanded{
        background: hsl(190 17% 76%);
        box-shadow: 3px 3px 2px hsl(0 0 15%);
        font-weight: bold;
    }

    .expanded:hover::after {
        content: " ✕"
    }

</style>