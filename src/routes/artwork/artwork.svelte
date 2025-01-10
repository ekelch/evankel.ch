<script lang="ts">
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
        console.log(images[index])
    }
</script>

<div id="artwork-outer">
    <div id="art-frame">
        {#if images.length}
            <img src={images[index]} alt={images[index]}/>
        {/if}
    </div>
</div>

<svelte:window on:keydown={handleKeydown} />

<style>
	#artwork-outer {
		height: 100%;
		background-color: beige;
        display: flex;
	}

    #art-frame {
        width: 80%;
        height: 80%;
        margin: auto;
        display: flex;
        background-color: white;
        border: 1px solid black;
    }
    #art-frame > img {
        max-width: 90%;
        max-height: 90%;
        margin: auto;
        object-fit: contain;
    }
</style>
