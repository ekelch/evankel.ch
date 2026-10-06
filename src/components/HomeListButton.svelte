<script lang="ts">
    interface props {
        txt: string
        expanded: boolean
        clicked: () => void
    }

    let {txt, expanded, clicked}: props = $props()

</script>

<button class="dropdown" onclick={clicked}>
    {#if expanded}
    <div class="expanded">
        close: {txt}
    </div>
    {:else}
    <div class="closed">
        {txt}
    </div>
    {/if}
</button>

<style>
    .dropdown {
        border: none;
        cursor: pointer;
        min-height: 44px;
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
</style>