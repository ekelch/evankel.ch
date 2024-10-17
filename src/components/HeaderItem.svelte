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
		margin: 3px 2px;
		padding: 4px;
		border-radius: 4px;
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
