<script lang="ts">
    import favicon from "$lib/assets/icons/svelte.png"

    let {children} = $props()
</script>

<svelte:head>
    <title>Evan Kelch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
    :global(html) {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    :global(body) {
        margin: 0;
    }
</style>