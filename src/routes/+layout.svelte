<div class="w-1/4 m-auto justify-items-center">
    <nav class="flex flex-row mt-2 mb-4 justify-center space-x-8">
        <a href="/" class="text-zinc-200 opacity-80 hover:opacity-100">Home</a>
        <a href="/blog" class="opacity-80 hover:opacity-100">Blog</a>
        <a href="/development" class="opacity-80 hover:opacity-100">Development</a>
        <a href="/photography" class="opacity-80 hover:opacity-100">Photography</a>
    </nav>
</div>


<script>
    import "../app.css";
</script>

<style lang="postcss">
    :global(html) {
        background-color: #1c1917;
    }
    :global(p,a) {
        color: #e4e4e7;
    }
</style>

<slot/>