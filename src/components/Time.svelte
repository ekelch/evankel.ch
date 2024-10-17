<script lang="ts">
	let td = new Date();
	setInterval(() => {
		td = new Date();
	}, 1000);
	$: time = `${td.getHours()}:${td.getMinutes()}:${td.getSeconds()}`;
</script>

<div class="time-container">
	<span>{time}</span>
</div>

<style lang="css">
	.time-container {
		all: unset;
		width: 120px;
		display: flex;
		background-color: rgba(0, 166, 252, 1);
		padding: 4px;
		border-radius: 1px;
		display: flex;

		border: 3px solid transparent;
		border-image-source: linear-gradient(180deg, #03d3fc, #0388fc);
		border-image-slice: 1;
		border-right: 0;
	}
	span {
		margin: auto;
		text-decoration: none;
	}
</style>
