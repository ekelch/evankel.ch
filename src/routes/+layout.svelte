<script lang="ts">
    import favicon from "$lib/assets/icons/svelte.png"
    import {page} from "$app/state"
    import {goto} from "$app/navigation";

    let { children } = $props();

    let paths = $derived.by(() => {
        if (!page.route.id || page.route.id === "/")
            return []
        return page.route.id.split("/")
    })

    function handlePathClick(pathIndex: number) {
        if (pathIndex == 0)
            window.location.href = "/"
        goto(paths.slice(0, pathIndex + 1).join('/'))
    }
</script>

<svelte:head>
    <title>Evan Kelch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href={favicon} />
</svelte:head>

{#if paths.length}
    <div class="nav-header">
        <div class="nav-paths">
            {#each paths as path, i}
                <button class="path" onclick={() => handlePathClick(i)}>{i ? path : 'home'}</button>
            {/each}
        </div>
    </div>
{/if}

{@render children()}

<style>
    :global(html) {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    :global(body) {
        margin: 0;
    }

    .nav-header {
        display: flex;
        background-color: #CFB9A5;
        padding: 4px 6px 2px;
        gap: 16px;
    }

    .nav-paths {
        margin: 0;
        color: white;
        display: flex;
        gap: 1px;
    }

    .path {
        all: unset;
        color: hsl(200 50% 80%);
        font-weight: normal;
        text-shadow: 1px 1px 1px black;
        font-size: 22px;
        user-select: none;
    }

    .path:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    .path:hover:last-child {
        text-decoration: none;
        cursor: initial;
    }

    .path:after {
        content: "/";
    }

    .path:after:hover {
        text-decoration: none;
    }

    .path:last-child:after {
        content: ""
    }
</style>