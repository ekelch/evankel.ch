<script lang="ts">
    import type {gridlayout} from "../types.ts/layouts.svelte";

    export let app: gridlayout;
    let hovering: boolean;

    function mouseenter() {
        hovering = true
    }
    function mouseexit() {
        hovering = false
    }
</script>

<button
        on:mouseenter={mouseenter}
        on:mouseleave={mouseexit}
        class:hover={hovering}
        on:click
        class="menu-item-container"
>
    <img src={app.imgSrc} alt={app.displayName} class="menu-item-icon"/>
    <span>{app.displayName}</span>
</button>

<style>
    .menu-item-container {
        all: unset;
        height: 77%;
        margin: auto 0;
        padding: 0 8px;
        background-color: rgb(222,222,222);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 10px;
        min-width: 140px;
        display: flex;
    }
    .menu-item-icon {
        height: 85%;
        margin: auto;
    }
    .menu-item-container:first-child {
        margin-left: 8px;
    }
    span {
        flex: 1;
        font-size: 14px;
        margin: auto 8px;
    }
    .hover {
        background: rgb(211,211,211);
        border: 1px solid black;
        cursor: pointer;
    }
</style>