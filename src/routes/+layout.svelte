<div class="mb-2 sticky top-0 bg-zinc-800/50 backdrop-blur-sm transition-transform ease-in"
     class:-translate-y-full={offscreen}
     bind:clientHeight={headerHeight}>
    <div class="mx-auto justify-items-center">
        <nav class="flex flex-row py-3 justify-center space-x-8">
            <a href="/" class="text-zinc-200 opacity-80 hover:opacity-100">Home</a>
            <a href="/blog" class="opacity-80 hover:opacity-100">Blog</a>
            <a href="/development" class="opacity-80 hover:opacity-100">Development</a>
            <a href="/photography" class="opacity-80 hover:opacity-100">Photography</a>
<!--            <a href="/about" class="opacity-80 hover:opacity-100">About</a>-->
            <a href="/apps/calc" class="opacity-80 hover:opacity-100">Calculator</a>
        </nav>
    </div>
    <div class="h-px m-0 bg-gradient-to-r from-indigo-500 to-red-500"></div>
</div>


<script lang="ts">
    import "../app.css";
    let previousY: number;
    let yPos: number;
    let headerHeight: number;

    const deriveDirection = (yPos: number): boolean => {
        const scrollingDown = !!(yPos > previousY);
        previousY = yPos;
        return scrollingDown;
    }

    $: scrollingDown = deriveDirection(yPos);
    $: offscreen = scrollingDown && yPos > headerHeight * 4;
</script>

<svelte:window bind:scrollY={yPos}/>

<style lang="postcss">
    :global(html) {
        background-color: #1c1917;
    }
    :global(p,a) {
        color: #e4e4e7;
    }
</style>

<slot/>