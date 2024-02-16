<div class:-translate-y-full={offscreen}
     bind:clientHeight={headerHeight}>
    <nav id="navBar">
        <HeaderItem item="Home" route="/"></HeaderItem>
        <HeaderItem item="Dev" route="/development"></HeaderItem>
        <HeaderItem item="Photography" route="/photography"></HeaderItem>
        <HeaderItem item="Climbing" route="/climbing"></HeaderItem>
        <HeaderItem item="Music" route="/music"></HeaderItem>
        <HeaderItem item="About" route="/about"></HeaderItem>
    </nav>
</div>


<script lang="ts">
    import "../app.css";
    import HeaderItem from "./HeaderItem.svelte";
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
    :global(p,a,h1,h2,h3,h4,h5,h6,span) {
        color: #e4e4e7;
    }

    #navBar {
        width: fit-content;
        margin: auto;
    }
</style>

<slot/>