<script lang="ts">
    import {type icon} from "../types.ts/layouts.svelte";
    import {goto} from "$app/navigation";

    interface props {
        item: icon
    }
    let {item}: props = $props();
</script>

<button class="home-list-icon" onclick={() => {goto(item.route)}}>
    <img src={item.imgSrc} alt={item.displayName} class="icon-img" />
    <span class="item-txt">{item.displayName}</span>
</button>

<style>
    .home-list-icon {
        height: 25%;
        margin: auto;
        display: flex;
        cursor: pointer;
        border: none;
        padding: 4px 6px;
        background-color: hsl(200 20% 85%);
        border-radius: 4px;
        user-select: none;

        /*box-shadow: 2px 2px 1px hsl(270 20% 50%);*/
    }

    .home-list-icon:hover {
        background-color: hsl(260 5% 75%);
        box-shadow: 2px 2px 1px hsl(200 15% 45%);
    }

    .icon-img {
        height: 20%;
    }

    .item-txt {
        margin: auto;
        font-family: monospace;
        font-size: 20px;
    }
</style>