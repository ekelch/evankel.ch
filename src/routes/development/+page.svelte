<script lang="ts">
    import type {Stack} from "../../types.d.ts/Development";
    import SubStackComponent from "./SubStackComponent.svelte";

    let workStack: Stack = {
        stackName: 'JPMorgan Chase (Full Time Job)', subStacks: [
            {subName: 'Frontend', subContents: ['Angular', 'Typescript', 'Ag Grid', 'Bootstrap']},
            {subName: 'Backend', subContents: ['Java', 'Spring Boot', 'Oracle DB']},
            {subName: 'Supporting Tech', subContents: ['Postman', 'IntelliJ', 'Microsoft Teams', 'Windows 10']},
        ]};

    let homeStack: Stack = {
        stackName: 'This Website', subStacks: [
            {subName: 'Frontend', subContents: ['Svelte', 'Typescript', 'Tailwind CSS', 'Vite']},
            {subName: 'Backend (Not yet integrated!)', subContents: ['Rust', 'Axum', 'Turso DB']},
            {subName: 'Supporting Tech', subContents: ['Goland', 'Ubuntu']},
        ]};

    let learningStack: Stack = {
        stackName: 'Things I\'m learning', subStacks: [
            {subName: 'At Work', subContents: ['AWS Developer']},
            {subName: 'At Home', subContents: ['Rust Book (Brown University Edition)', 'Rustlings']},
        ]
    }

    let stacks: Stack[] = [workStack, homeStack, learningStack];
//TODO transform footer with scroll
</script>

<div class="body-margin">
    <div class="w-5/6 m-auto md:w-2/5">
        <p class="text-center mt-6">
            This website is made using Svelte and tailwind. I am mainly focused on learning rust
            right now though! I'm reading through the <a href="https://doc.rust-lang.org/book/" class="text-cyan-100">rust book</a>
            and am completing the <a href="https://fasterthanli.me/series/advent-of-code-2022" class="text-cyan-100"> 2022 advent of code. </a>
            I am planning to integrate a backend written in Rust using the Axum HTTP framework, along with Serde for serialization. Golang (or
            just Java/Spring) is better suited for this, but I'm most interested in having to think about memory and data structures rather than
            making a website as quickly as possible. The point of this website is just to learn Rust and Svelte!
        </p>
        <p class="text-center mt-6">
            I work full time as a Fullstack Software Engineer at JPMorgan Chase in Columbus, OH. I am a contractor for this year but hopefully made permanent next year!
            I am part of Legal Technology, making internal software for lawyers and such. My team's project is using Java/Spring Boot for an API and Angular for the frontend.
            Some other technologies I use every day are AG Grid Enterprise, Oracle SQL DB, and Postman.
        </p>
        <p class="text-center mt-6">
            Here's the <a href="https://github.com/ekelch/evankel.ch" class="text-indigo-400"> repo </a>for this website if interested.
            It is not particularly impressive at this point, but perhaps in a few months it shall be :)
        </p>
    </div>


    <h2 style="margin: 6vh auto 2vh auto;" class="text-white text-3xl text-center">Tech Stacks and what I'm learning:</h2>
    <div>
        {#each stacks as stack}
            <div class="cyclic">
                <h2 class="text-white text-center text-3xl mb-4">{stack.stackName}</h2>
                <div class="cyclic-child grid grid-cols-3 justify-items-center">
                    {#each stack.subStacks as subStack}
                        <div><SubStackComponent {subStack}></SubStackComponent></div>
                    {/each}
                </div>
        </div>
        {/each}
    </div>



</div>


<svelte:head>
    <title>Development</title>
    <meta name="Professional experience in software development and programming skills">
</svelte:head>

<style>

    .cyclic {
        height: 35vh;;
        padding: 3vh 0;
    }
    .cyclic div {
        width: 50%;
        margin: auto;
    }
    .cyclic:nth-child(3n+1) {
        @apply bg-teal-500;
    }
    .cyclic:nth-child(3n+2) {
        @apply bg-indigo-500;
    }
    .cyclic:nth-child(3n) {
        @apply bg-amber-500;
    }
</style>