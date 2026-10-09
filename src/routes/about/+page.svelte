<script>
    import climb from "/src/lib/assets/images/climb.jpg"
    import wildIris from "/src/lib/assets/images/wildIris.jpg"
    import tetons from "/src/lib/assets/images/tetons.jpg"
    import ImagePlus from "../../components/ImagePlus.svelte";
</script>

<div id="about-container">
    <div class="about-inner">
        <h2 class="header">about</h2>
        <div>
            <h3>1999 - 2017 Oberlin</h3>
            <p>I was born in 1999 and grew up in Oberlin, Ohio. I left for college at 17.</p>
        </div>
        <div>
            <h3>2017 - 2022 Purdue</h3>
            <p>I studied aerospace engineering at Purdue for 2 years. By my junior year, I decided not
                to dedicate my life to making missiles for the department of defense. I still liked space and science
                so I transferred to planetary science. I spent a lot less time with aerodynamics and differential equations
                and more time rock climbing and writing papers about outer planets and moons.
            </p>
            <ImagePlus src={climb} alt="cold hard bitch" title="climbing cold hard bitch in KY" />
            <p>
                I took a semester off school in fall 2021 to live in the red river gorge in Kentucky because I
                I didn't have money for tuition. I lived in my 2009 subaru forester and worked full time at miguel's pizza.
                I worked breakfast and lunch and then climbed in the evenings.
                I spent my downtime watching jeopardy with coworkers and studying nuclear physics on youtube and wikipedia.
            </p>
            <p>
                I went back to school and graduated in the spring of 2022. I liked planetary science, but I was burnt out
                on school and all the careers were in research and academia and required a graduate degree.
                I went back to living in my subaru and climbing in july 2022 - this time in lander, wyoming. I was
                living off my credit card and gas was $5.49/gal I so decided to start studying software engineering at
                the public library in Lander.
            </p>
            <div class="img-container">
                <ImagePlus src={tetons} alt="tetons" title="driving through the grand tetons" />
                <ImagePlus src={wildIris} alt="wild iris" title="climbing with friends at wild iris" />
            </div>
        </div>
        <div>
            <h3>2022 - 2025 JP Morgan</h3>
            <p> After studying by myself for a week, a contractor hired me and trained me for a few
                months. By November, I started interviewing at companies and got a 2 year contract at Chase in Columbus, OH.
            </p>
            <p>
                They bought me out of the
                contract early the following October and I stayed there for 2 years. Wanting to get out of Ohio once again,
                I transferred to another team in the Chicago office in July 2025. I was working on one of the largest
                payment systems in the world and was also the worst job I have ever had.
                I quit in November and went climbing in west virginia for a week with my friends.
                I spent half a year unemployed until an acquaintance invited me to work with them at a music venue.
            </p>
        </div>
        <div>
            <h3>Present</h3>
            <p>Since May of 2026 I've been working at the Salt Shed. Taking the time to work a service job
                and make friends in Chicago has been a much needed reprieve from the AI obsessed corporate world.
                I planned on returning to corporate, but have decided that I want to care about my work and make
                things that are impactful for individuals.
            </p>
        </div>
    </div>


</div>

<style>
    #about-container {
        display: flex;
        gap: 12px;
        padding: 1rem;
        color: hsl(0 0% 85%);
        font-family: "Nadeem", serif;
        background-color: hsl(100 5% 33%);
        min-height: calc(100vh - 37px - 2rem);
    }

    .img-container {
        display: flex;
        gap: 12px;
    }

    .about-inner {
        width: 95%;
        margin: 0 auto;
    }

    .header {
        width: fit-content;
        margin: 0 auto;
        font-size: 32px;
    }
    p {
        margin: 1rem;
        font-size: 17px;
    }
    h3 {
        font-size: 24px;
        margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
        .about-inner {
            width: 50%;
        }
    }
</style>