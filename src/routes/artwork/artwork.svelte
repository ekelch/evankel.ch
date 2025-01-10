<script lang="ts">
    import ImagePlus from "../../components/ImagePlus.svelte";

    const jpegs = import.meta.glob("../../lib/assets/artwork/*.jpg")

    let index: number = 0;
    let images: string[] = [];

    for (const modulePath in jpegs) {
        jpegs[modulePath]().then(({ default: imageUrl }) => {
            images.push(imageUrl)
        });
    }

    const handleKeydown = (e : KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            index = index - 1 >= 0 ? index - 1 : images.length - 1
        } else if (e.key === 'ArrowRight') {
            index = index + 1 > images.length - 1 ? 0 : index + 1;
        }
    }
</script>

<div id="artwork-outer">
    {#if images[index]}
        <div id="image-frame">
            <ImagePlus src={images[index]} alt={images[index]} title="some image title" description="description of that image"/>
        </div>
        {:else}
        <p>left/right arrows (wip)</p>
    {/if}
</div>

<svelte:window on:keydown={handleKeydown} />

<style>
	#artwork-outer {
		height: 100%;
		background-color: beige;
        display: flex;
        flex-direction: column;
	}
    #image-frame {
        margin: 32px auto auto;
        width: 700px;
    }
</style>
