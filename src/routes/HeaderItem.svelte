<script lang="ts">
	export let item: string;
	export let route: string;
	let hovering: boolean;

	const redirect = () => {
		location.href = route;
	};
</script>

<button
	on:mouseenter={() => {
		hovering = true;
	}}
	on:mouseleave={() => {
		hovering = false;
	}}
	on:click={redirect}
	class:hover={hovering}
	class="menu-item-container"
>
	<span>{item}</span>
</button>

<style>
	.menu-item-container {
		all: unset;
		display: flex;
		background-color: #3988f7;
		margin: 2px;
		padding: 4px;
		border-radius: 1px;
		display: flex;
		min-width: 160px;
	}
	span {
		margin: auto auto auto 4px;
		text-decoration: none;
	}
	.hover {
		background: #1f6ddb;
		border-radius: 6px;
		opacity: 100%;
	}
</style>
