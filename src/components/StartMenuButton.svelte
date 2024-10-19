<script lang="ts">
	let hovering: boolean;

	const redirect = () => {
		location.href = '/';
	};
</script>

<button
	class="start-item-container"
	on:click={redirect}
	class:hover={hovering}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	><span>start</span>
	<div class="radial-overlay" />
</button>

<style>
	.start-item-container {
		all: unset;
		width: 100px;
		height: 100%;
		display: flex;
		border-radius: 0 20px 20px 0 / 69px;

		background-color: #16c424;
	}
	.radial-overlay {
		position: absolute;
		width: 100px;
		height: 100%;

		border: 1px solid black;
		border-radius: 0 20px 20px 0 / 69px;

		background-image: radial-gradient(#16c424, black 80%);
		opacity: 40%;
	}
	span {
		margin: auto;
		text-decoration: none;
		text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.5);
		font-style: italic;
		font-weight: bold;
		font-size: 18px;
		-webkit-text-stroke: 0.4px black;
		z-index: 2;
	}

	.hover {
		cursor: pointer;
	}
	.hover .radial-overlay {
		opacity: 30%;
	}
	.hover span {
		-webkit-text-stroke: 0.2px black;
		font-size: 18.4px;
	}
</style>
