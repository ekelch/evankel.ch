<script lang="ts">
    import gameImg from "/src/lib/assets/godotGame.png"

    const gameSrc = "https://itch.io/embed-upload/12999334?color=333333&uuid=c35a06c029c20fb1a0ec9a21d96776ba"
    const openGame = () => {
        window.open(gameSrc, "_blank")
    }
</script>

<div id="game-container">
    <p>I would like to add an embedded version but for now it will open in new tab.</p>
    <button on:click={openGame}>
        <img src={gameImg} alt="game placeholder" />
    </button>
</div>

<style>
    #game-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    button {
        all: unset;
    }
    img {
        max-width: 80%;
        object-fit: contain;
        cursor: pointer;
    }
</style>