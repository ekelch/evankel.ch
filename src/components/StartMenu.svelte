<script lang="ts">
    import { type DesktopIconType } from '../types.ts/layouts.svelte';

    export let availApps: DesktopIconType[];
</script>

<div id="start-menu">
    {#each availApps as app}
        <button class="app" on:click={app.openApp}>{app.displayName}</button>
    {/each}
</div>

<style>
    #start-menu {
        position: absolute;
        bottom: 44px;
        left: 0;
        height: 600px;
        width: 360px;
        background: white;
        border: 2px solid rgba(0, 87, 189, 0.5);
        border-left: none;
        border-bottom: none;
        border-top-right-radius: 8px;
        overflow: hidden;
        z-index: 99;

        display: flex;
        flex-direction: column;
        overflow-y: auto;
        scrollbar-width: thin;
    }

    .app {
        height: 40px;
        gap: 4px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .app:hover {
        background-color: gray;
    }
</style>