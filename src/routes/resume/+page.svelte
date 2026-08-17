<script>
import resumePdf from "$lib/assets/resume.pdf";
</script>

<div class="iframe-contain">
    <iframe src={resumePdf} title="resume"></iframe>
</div>

<style>
    .iframe-contain {
        height: 100vh;
        width: 100vw;
        margin: auto;
        background-color: #fceaff;
    }
    .iframe-contain > iframe {
        height: 100%;
        width: 50%;
        margin: 0 25%;
        overflow-x: hidden;
    }
</style>