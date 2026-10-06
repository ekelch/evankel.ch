<script lang="ts">
    import {type icon} from "../types.ts/layouts.svelte";
    import {goto} from "$app/navigation";

    interface props {
        apps: icon[]
    }

    let {apps}: props = $props()

</script>

<div class="expanded-menu">
    {#each apps as app}
        <button class="item-btn" onclick={() => goto(app.route)}>
            {app.displayName}
        </button>
    {/each}
</div>

<style>
    .expanded-menu {
        padding: 6px;
        width: 100%;
        height: 91%;
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
    }

    .item-btn {
        width: 80%;
        min-height: 40px;
        margin: 0;
        cursor: pointer;
        font-family: monospace;
        background-color: hsl(180 15% 40%);
        color: hsl(60 10% 90%);
        border: none;
        box-shadow: 2px 2px 1px hsl(180 10% 10%/30%);
        font-size: 13px;
        border-radius: 2px;
    }

    .item-btn:hover {
        background-color: hsl(180 15% 45%);
        box-shadow: 2px 2px 1px hsl(180 10% 10%/60%);
        border: 1px solid hsl(0 0 0/20%);
        font-weight: bold;
        font-size: 14px;
    }

</style>