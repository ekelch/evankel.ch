<div class="w-1/4 m-auto">
    <nav class="grid grid-cols-3 mt-2 mb-4 justify-items-center">
        <div class="col-start-1 flex justify-items-end">
            <a href="/" class="text-zinc-200 opacity-80 hover:opacity-100">Home</a>
        </div>
        <div class="col-start-2 col-span-2 flex space-x-5">
            <a href="/blog" class="opacity-80 hover:opacity-100">Blog</a>
            <a href="/climbing" class="opacity-80 hover:opacity-100">Climbing</a>
            <a href="/development" class="opacity-80 hover:opacity-100">Development</a>
            <a href="/photography" class="opacity-80 hover:opacity-100">Photography</a>
        </div>
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