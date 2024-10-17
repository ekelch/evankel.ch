<script lang="ts">
	let hovering: boolean;

	const redirect = () => {
		location.href = '/';
	};
</script>

<button
	class="start-item-container"
	class:hover={hovering}
	on:click={redirect}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	><span>start</span>
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
	span {
		margin: 8px auto auto;
		text-decoration: none;
		text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.5);
		font-style: italic;
		font-weight: bold;
		font-size: 18px;
	}
	.hover {
		background: #16c925;
		cursor: pointer;
	}
</style>
