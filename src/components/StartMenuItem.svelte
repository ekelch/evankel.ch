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
        margin: 4px 0;
        background-color: rgb(200,200,200);
        font-size: 12px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 2px;
        min-width: 160px;
        user-select: none;
    }
    .menu-item-container:first-child {
        margin-left: 6px;
    }
    span {
        margin: auto auto auto 6px;
        text-decoration: none;
    }
    .hover {
        background: rgb(222,222,222);
        cursor: pointer;
    }
</style>