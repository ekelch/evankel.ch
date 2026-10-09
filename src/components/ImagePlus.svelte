<script lang="ts">
    interface Props {
        src: any;
        alt: string;
        title: string;
        description?: string | undefined;
        minY?: number;
    }

    let {
        src,
        alt,
        title,
        description = undefined,
        minY = 100
    }: Props = $props();

    let showModal: boolean = $state(false)

    function toggleModal() {
        showModal = !showModal
    }

    function onKeyPress(e: any) {
        if (e.key === 'Escape' && showModal) {
            toggleModal()
        }
    }
</script>

<div class="img-plus-container">
    <h3>{title}</h3>
    <button class="img-btn" onclick={toggleModal}>
        <img class="default-img" {src} {alt} style="min-height: {minY}px"/>
    </button>
    {#if description}
        <p>{description}</p>
    {/if}

    {#if showModal}
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-header-txt">{title}</span>
                    <button class="modal-close-btn" onclick={toggleModal}>✕</button>
                </div>
                <img class="modal-img" {src} {alt} />
            </div>
        </div>
    {/if}
</div>

<svelte:window on:keydown={onKeyPress} />

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

    .img-btn {
        all: unset;
    }

    .default-img {
        width: 100%;
        margin: 8px;
        object-fit: contain;
        cursor: pointer;
    }

    .modal::before {
        content: "";
        z-index: 1;
        position: fixed;
        inset: 0;
        background-color: hsl(0 0 0%/70%);
    }

    .modal-content {
        z-index: 2;
        background-color: hsl(100 3% 25%);
        position: fixed;
        inset: 4vh 3vw;
        display: flex;
        flex-direction: column;
    }

    .modal-header {
        display: flex;
        padding: 12px 16px;
        font-size: 18px;
        font-weight: bold;
        color: hsl(0 0 85%);
        font-family: monospace;
    }

    .modal-header-txt {
        flex: 1;
    }

    .modal-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin-bottom: 24px;
    }

</style>