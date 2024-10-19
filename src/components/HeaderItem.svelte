<script lang="ts">
	export let item: string;
	let hovering: boolean;
</script>

<button
	on:mouseenter={() => {
		hovering = true;
	}}
	on:mouseleave={() => {
		hovering = false;
	}}
	class:hover={hovering}
	on:click
	class="menu-item-container"
>
	<span>{item}</span>
</button>

<style>
	.menu-item-container {
		all: unset;
		display: flex;
		background-color: #3988f7;
		margin: 3px;
		padding: 4px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
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
		cursor: pointer;
	}
</style>
