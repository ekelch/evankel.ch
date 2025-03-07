<script>
import resumePdf from "$lib/assets/resume.pdf";
</script>

<div class="iframe-contain">
    <iframe src={resumePdf} title="resume"/>
</div>

<style>
    .iframe-contain {
        height: 100%;
    }
    .iframe-contain > iframe {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
</style>