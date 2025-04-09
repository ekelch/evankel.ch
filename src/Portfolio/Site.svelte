<div id="site-page-container">
    <h3>2. evankel.ch (Svelte/TS) <a target="_blank" href="https://github.com/ekelch/evankel.ch">(github/ekelch)</a> </h3>

    <p>This website is being made for some fun & creativity. So far it is neither fun nor creative but I have ambitions.</p>

    <h3>Svelte</h3>
    <p>I am developing this website with the js/ts framework Svelte. I have used Angular and React at work, so wanted to try something
    new. So far, I really enjoy it and have not faced any issues with it. As with any framework, there is somewhat of a learning curve
    and time spent learning best practices, but it overall is pretty simple to use, and I much prefer this over React.</p>

    <h4>Some of my favorite svelte features:</h4>
    <div class="list-wrapper">
        <h5>bindings</h5>
        <ul>
            <li>binding attributes is as simple as defining a js variable, and then <code>bind:attribute=&lbrace;varName&rbrace;</code></li>
            <li>if the var name is the same, it is literally just <code>bind:varName</code></li>
            <li>bind the entire component with <code>bind:this=&lbrace;componentRef&rbrace;</code></li>
            <li>use the &lbrace;svelte:window /&rbrace; to bind window event listeners in one line, such as <code>on:mousemove=&lbrace;handleMouseMove&rbrace;</code></li>
            <li>good example: check out the input sliders or audio element in my <a target="_blank" href="https://github.com/ekelch/evankel.ch/blob/main/src/components/SongOfWeek.svelte">song component</a></li>
        </ul>
    </div>
    <div class="list-wrapper">
        <h5>The slot component</h5>
        <ul>
            <li>Define parent/child in html: <code>&lt;parent&gt;&lt;child/&gt;&lt;/parent&gt;</code></li>
            <li>In the parent: <code>&lt;div (all of parent content/scripts/css)&gt;&lt;slot/&gt;&lt;/div&gt;</code></li>
            <li>In the child: complete detached child code, just gets slotted into parent</li>
            <li>I'm not sure if that makes any sense... but that is how I am doing the draggable windows on this site! The draggable
                component (with styles, scripts, etc) is completely decoupled from the child content, and each child is just 'slotted'
                under it's parent component.
            </li>
            <li>See this example, it will make more sense! : <a target="_blank" href="https://github.com/ekelch/evankel.ch/blob/main/src/components/draggable.svelte">draggable</a></li>
        </ul>
    </div>
    <div class="list-wrapper">
        <h5>organization</h5>
        <ul>
            <li>Components exist entirely in one file, combining html, script, style</li>
            <li>html is automatically exported --> define MyComponent.Svelte, in that file, <em>only write:</em> &lt;div&gt;hello world&lt;/div&gt;</li>
            and then use it: &lt;MyComponent /&gt;, it will export that, you do not need the React export default function arrow function etc
            <li>styles are component scoped by default</li>
        </ul>
    </div>

</div>

<style>
    #site-page-container {
        margin: 1rem;
    }

    .list-wrapper {
        margin: 24px auto 0;
    }
    .list-wrapper > h4 {
        margin: 0;
    }
    .list-wrapper > ul {
        list-style: inside;
    }
</style>