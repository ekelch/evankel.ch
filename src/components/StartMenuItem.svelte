<script lang="ts">
    export let appName: string;
    let hovering: boolean;
</script>

<button
        on:mouseenter={() => {
		hovering = true;
	}}
        on:mouseleave={() => {
		hovering = false;
	}}
        class:hover={hovering}
        on:click
        class="menu-item-container"
>
    <span>{appName}</span>
</button>

<style>
    .menu-item-container {
        all: unset;
        display: flex;
        background-color: wheat;
        margin: 1px 2px;
        padding: 0 6px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        min-width: 160px;
    }
    .menu-item-container:first-child {
        margin-left: 6px;
    }
    span {
        margin: auto auto auto 6px;
        text-decoration: none;
    }
    .hover {
        background: bisque;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        opacity: 100%;
        cursor: pointer;
    }
</style>