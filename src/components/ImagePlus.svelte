<script lang="ts">
    export let src: any;
    export let alt: string;
    export let title: string;
    export let description: string | undefined = undefined;
    export let minY: number = 300
</script>

<div class="img-plus-container">
    <h3>{title}</h3>
    <img {src} {alt} style="min-height: {minY}px"/>
    {#if description}
        <p>{description}</p>
    {/if}
</div>

<style lang="css">
    h3 {
        margin: 0 32px;
    }
    p {
        margin: -4px 32px 0;
    }
    .img-plus-container {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    img {
        margin: 8px;
        object-fit: contain;
    }
</style>