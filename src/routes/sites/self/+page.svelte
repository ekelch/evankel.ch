<script>
    import ImagePlus from "../../../components/ImagePlus.svelte";
    import tdImg from "/src/lib/assets/images/touchDesigner1.png"
</script>

<div id="site-page-container">
    <div class="text-container">
        <h1>evankel.ch (this website)</h1>

        <h2>Development</h2>
        <p>This website is my portfolio and directory for my career in software. I started developing the site in 2023 and it's
            gone through 3-4 complete overhauls, the latest being in October 2026. The main sections are about, websites,
            and other tech/art projects. The about section has my resume and what I'm doing with my career and life right now.
            The websites section is a portfolio of work I've done for this site and other people. The projects section shows
            other software and art projects I've made or been involved in.
        </p>
        <h2>Home Page</h2>
        <p>
            The home page of this site has a looping video in the background. The footage is from my phone and camcorder
            of some trips I've been on in Norway and the New River Gorge. The video is not exactly relevant to this website,
            but more just art and sharing some experiences I enjoyed.
            The video was created with a program called TouchDesigner. The way I used it was essentially like
            video game shaders. Each pixel in each frame is processed through a series of nodes.
        </p>
        <ImagePlus src={tdImg} alt="norge td" title="TouchDesigner nodes example"
                   description="The video is input in the top left. Each frame is ran through a series of nodes that
                    can be used to resize, distort, draw outlines, manipulate color channels, add noise, and composite
                    effects on top of each other. This process can get very technical and confusing, but gives a huge
                    variety of artistic opportunities for image and video creation."
        />

    </div>
</div>

<style>
    #site-page-container {
        padding: 1rem;
        background-color: hsl(200 20% 75%);
        font-family: monospace;
        display: flex;
    }

    .text-container {
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 32px;
        text-align: center;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 15px;
        padding: 8px;
    }

    @media screen and (min-width: 768px){
        .text-container {
            width: 45%;
        }
    }
</style>