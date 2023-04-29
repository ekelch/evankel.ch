<div class="mb-2">
    <div class="w-1/4 mx-auto justify-items-center">
        <nav class="flex flex-row my-3 justify-center space-x-8">
            <a href="/" class="text-zinc-200 opacity-80 hover:opacity-100">Home</a>
            <a href="/blog" class="opacity-80 hover:opacity-100">Blog</a>
            <a href="/development" class="opacity-80 hover:opacity-100">Development</a>
            <a href="/photography" class="opacity-80 hover:opacity-100">Photography</a>
            <a href="/about" class="opacity-80 hover:opacity-100">About</a>
        </nav>
    </div>
    <div class="h-px m-0 bg-gradient-to-r from-indigo-500 to-red-500"></div>
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