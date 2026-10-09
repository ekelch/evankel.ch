<script lang="ts">
	import svelteImg from '/src/lib/assets/icons/svelte.png'
	import resumeIcon from '/src/lib/assets/icons/resume.png'
	import carplayIcon from '/src/lib/assets/icons/carplay.png'
	import bunnyIcon from '/src/lib/assets/icons/bunny.gif'
	import crosshairIcon from '/src/lib/assets/icons/crosshair.png'
    import {type icon, type menuOptions} from "../types.ts/layouts.svelte";
    import bgMovie from "/src/lib/assets/images/norge480.mp4"
    import br from "/src/lib/assets/icons/b.png"
    import fi from "/src/lib/assets/icons/f.jpg"
    import {onMount} from "svelte";
    import HomeListButton from "../components/HomeListButton.svelte";
    import HomeListExpanded from "../components/HomeListExpanded.svelte";


	let icons: icon[] = $state([
		{displayName: "about", imgSrc: resumeIcon, route: "/about", menu: "about"},
		{displayName: "resume", imgSrc: resumeIcon, route: "/resume", menu: "about"},

        {displayName: "evankel.ch", imgSrc: svelteImg, route: "/sites/self", menu: "websites"},
        {displayName: "bradley", imgSrc: br, route: "/sites/bradley", menu: "websites"},
        {displayName: "fiona", imgSrc: fi, route: "/sites/fiona", menu: "websites"},

		{displayName: "carplay", imgSrc: carplayIcon, route: "/carplay", menu: "projects"},
		{displayName: "godot jam", imgSrc: bunnyIcon, route: "/b1tjam", menu: "projects"},
		{displayName: "crosshair", imgSrc: crosshairIcon, route: "/crosshair", menu: "projects"},

		{displayName: "inspiration", imgSrc: fi, route: "/inspiration", menu: "other"},
	])

    const shadowLength: number = .1;
    const shadowStrength: number = 8000;
    let textComponent: any = $state()
    let openedMenu: menuOptions = $state('')
    let textWidth: number = $state(0)
    let textHeight: number = $state(0)
    let mouseCoords: {x: number, y: number} = $state({x: 0, y: 0})
    let textCoords: {x: number, y: number} = $state({x: 0, y: 0})
    let displacement: {x: number, y: number} = $state({x: 0, y: 0})
    let textShadow = $derived(`${displacement.x * shadowLength}px ${displacement.y * shadowLength}px ${(displacement.x * displacement.x + displacement.y + displacement.y) / shadowStrength}px hsl(290 20% 10%)`)

    onMount(() => {
        if (textComponent) {
            const rect = textComponent.getBoundingClientRect();
            textCoords = {x: rect.left + textWidth / 2, y: rect.top + textHeight / 2}
        }
    })

    function handleMouseMove(e: MouseEvent) {
        mouseCoords = {x: e.clientX, y: e.clientY}
        displacement = {x: textCoords.x - mouseCoords.x, y: textCoords.y - mouseCoords.y}
    }

    function handleMenuItemClicked(item: menuOptions) {
        if (openedMenu === item) {
            openedMenu = ''
        } else {
            openedMenu = item
        }
    }

</script>

<div id="app">
    <div class="bg-img-cnt">
        <video autoplay loop muted playsinline class="bg-video">
            <source src={bgMovie} type="video/mp4" />
        </video>
    </div>

    <div class="wide-box">
        <div class="app-icons">
            <div class="icons-inner">
                <HomeListButton menuOption='about' selected={openedMenu} clicked={() => handleMenuItemClicked('about')} />
                <HomeListButton menuOption='websites' selected={openedMenu} clicked={() => handleMenuItemClicked('websites')} />
                <HomeListButton menuOption='projects' selected={openedMenu} clicked={() => handleMenuItemClicked('projects')} />
                <HomeListButton menuOption='other' selected={openedMenu} clicked={() => handleMenuItemClicked('other')} />
            </div>
        </div>
        <div class="expanded-icons">
            {#if openedMenu}
                <HomeListExpanded apps={icons.filter(i => i.menu === openedMenu)} />
            {/if}
        </div>
        <div class="name-banner">
            <h1 class="name-banner-txt"
                style:text-shadow={textShadow}
                bind:this={textComponent}
                bind:clientWidth={textWidth}
                bind:clientHeight={textHeight}
            >evankel.ch</h1>
        </div>
    </div>
</div>

<svelte:window on:mousemove={handleMouseMove} />

<style lang="postcss">
	#app {
        position: absolute;
        inset: 0;
        overflow-x: hidden;
	}

    .bg-img-cnt {
        position: relative;
        width: 104vw;
        margin: 0 -28px;
        height: 100vh;
        overflow: hidden;
    }

    .bg-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .wide-box {
        position: absolute;
        top: 120px;
        width: 100vw;
        height: 260px;
        background-image: linear-gradient(to right, hsl(30 6% 40%/97%), hsl(220 20% 40%/80%), hsl(330 6% 40%/97%) 70%);
        padding: 20px 0;
        display: flex;
        flex-direction: row;
    }

    .app-icons {
        display: flex;
        flex: 1;
        margin: 0 0 0 120px;
        max-width: 360px;
    }

    .icons-inner {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
        margin: auto 12px;
    }

    .expanded-icons {
        flex: 1;
    }

    .name-banner {
        margin-right: 36px;
        flex: 3;
        display: flex;
    }

    .name-banner-txt {
        margin: auto;
        text-align: center;
        font-size: 108px;
        font-family: "ui-monospace", monospace;
        color: hsl(290 20% 85%);
        user-select: none;
    }
</style>
