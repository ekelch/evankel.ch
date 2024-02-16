<script lang="ts">
    export let item: string;
    export let route: string;
    let hovering: boolean;
</script>

<a class:hover={hovering}
      href={route}
      on:mouseenter={() => {hovering = true}}
      on:mouseleave={() => {hovering = false}}
>{item}</a>

<style>
    a {
        text-decoration: none;
        padding: 8px;
        opacity: 80%;
    }
    .hover {
        color: black;
        background: #12FFFA80;
        border-radius: 6px;
        opacity: 100%;
    }
</style>