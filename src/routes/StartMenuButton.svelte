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
		width: 100px;
		height: 100%;
		display: flex;

		background-color: #16c424;
		border: 3px solid;
		border-image-source: linear-gradient(0deg, #16c424, #0db51a);
		border-image-slice: 1;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		border-left: 0;
		border-right: 0;
	}
	span {
		margin: 8px auto auto;
		text-decoration: none;
		font-style: italic;
		font-weight: bold;
		font-size: 16px;
	}
	.hover {
		background: #16c925;
	}
</style>
