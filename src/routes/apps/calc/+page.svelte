<script lang="ts">
    import {create, addDependencies, subtractDependencies, divideDependencies, multiplyDependencies, parserDependencies, sqrtDependencies} from "mathjs";

    const {format, parser, sqrt} = create({addDependencies, subtractDependencies, divideDependencies, multiplyDependencies, sqrtDependencies, parserDependencies});

    let allowedPush = ['1','2','3','4','5','6','7','8','9','0', '-', '+', '*', '/', 'e', '.', '^', '(', ')']
    let allowedSpecial = ['c','Enter', 'Backspace', 's', 'q', 'w', 't']
    let excludeDefaults = ['/', 'Enter']
    let keyMappings: {key:string, desc:string}[] = [
        {key: 'c', desc: 'clear'},
        {key: 'q', desc: '( left parenthesis'},
        {key: 'w', desc: ') right parenthesis'},
        {key: 'e', desc: 'engineering notation (5.2e5 == 5.2*10^5)'},
        {key: 's', desc: 'radical (sqrt)'},
        {key: 't', desc: '^ power'},
    ];
    let expression = '';
    let result = '';

    function pushExp(add: string) {
        expression = expression.concat(add)
    }

    function handleKeypress(key) {
        let val = key.key
        if (excludeDefaults.includes(val))
            key.preventDefault()
        if (allowedPush.includes(val))
            pushExp(val)
        else if (allowedSpecial.includes(val)) {
            if (val==='c')
                expression = '';
            if (val==='Backspace')
                backspace();
            if (val==='Enter')
                evaluate();
            if (val==='q')
                pushExp('(')
            if (val==='w')
                pushExp(')')
            if (val==='s')
                pushExp('sqrt(')
            if (val==='t')
                pushExp('^')
        }
    }

    function evaluate() {
        result = format(parser().evaluate(expression), {precision: 5});
    }

    function backspace() {
        expression = expression.slice(0, -1)
    }

    function mockKeypress(val: string) {
        let key: KeyboardEvent = new KeyboardEvent('keydown', {key: val});
        handleKeypress(key);
    }

</script>

<div class="w-11/12 md:w-1/6 md:mt-6 mx-auto">
    <div class="h-48 p-1 bg-zinc-800 text-white border-2 border-orange-600/60 mt-3 rounded-sm">
        <p>{expression}</p>
    </div>

    <div class="grid grid-cols-5 space-x-1">
        <div class="col-span-4 h-24 p-1 bg-zinc-800 text-white border-2 border-cyan-600/80 my-2 rounded-sm">
            <p>{result}</p>
        </div>
        <div>
            <button on:click={()=>mockKeypress('Enter')} class="w-full text-white bg-slate-600 h-24 p-1 my-2 rounded-md">Enter</button>
        </div>
    </div>

    <div class="bg-zinc-800 text-white my-2 rounded-md">
        <div class="grid grid-cols-5 gap-1">
            <button on:click={()=>pushExp('e')} class="calc-op">EE</button>
            <button on:click={()=>pushExp('7')} class="calc-num">7</button>
            <button on:click={()=>pushExp('8')} class="calc-num">8</button>
            <button on:click={()=>pushExp('9')} class="calc-num">9</button>
            <button on:click={()=>pushExp('+')} class="calc-op">+</button>

            <button on:click={()=>mockKeypress('r')} class="calc-op">&radic;</button>
            <button on:click={()=>pushExp('4')} class="calc-num">4</button>
            <button on:click={()=>pushExp('5')} class="calc-num">5</button>
            <button on:click={()=>pushExp('6')} class="calc-num">6</button>
            <button on:click={()=>pushExp('-')} class="calc-op">-</button>

            <button on:click={()=>pushExp('^')} class="calc-op">^</button>
            <button on:click={()=>pushExp('1')} class="calc-num">1</button>
            <button on:click={()=>pushExp('2')} class="calc-num">2</button>
            <button on:click={()=>pushExp('3')} class="calc-num">3</button>
            <button on:click={()=>pushExp('*')} class="calc-op">*</button>

            <button on:click={()=>mockKeypress('c')} class="calc-spec">CLC</button>
            <button class="calc-spec">(&#60;->)</button>
            <button on:click={()=>pushExp('0')} class="calc-num">0</button>
            <button on:click={()=>pushExp('.')} class="calc-num">.</button>
<!--            <button class="calc-spec">->()&#60;-</button>-->
            <button on:click={()=>pushExp('/')} class="calc-op">/</button>
        </div>
    </div>

    <div class="grid grid-cols-1 m-auto invisible md:visible">
        <p class="mt-2 mb-4 font-bold">Keyboard shortcuts:</p>
        <div class="grid grid-cols-5 gap-3">
            {#each keyMappings as keyMapping}
                <p
                   on:click={()=>mockKeypress(keyMapping.key)}
                >{keyMapping.key}</p>
                <p class="col-span-4">{keyMapping.desc}</p>
            {/each}
        </div>

    </div>

</div>

<svelte:window on:keydown={key => handleKeypress(key)} />