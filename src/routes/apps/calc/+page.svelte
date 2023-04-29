<script lang="ts">
    import {all, create, addDependencies, subtractDependencies, divideDependencies, multiplyDependencies, parserDependencies} from "mathjs";

    const {add, subtract, divide, format, parser} = create({addDependencies, subtractDependencies, divideDependencies, multiplyDependencies, parserDependencies});

    let allowedPush = ['1','2','3','4','5','6','7','8','9','0', '-', '+', '*', '/', 'e', '.']
    let allowedSpecial = ['c','Enter', 'Backspace']
    let expression = '';
    let result = '';

    function expPush(add: string) {
        expression = expression.concat(add)
    }

    function handleKeypress(key) {
        console.log(key)
        let val = key.key
        if (val === '/')
            key.preventDefault()
        if (allowedPush.includes(val))
            expPush(val)
        else if (allowedSpecial.includes(val)) {
            if (val==='c')
                expression = '';
            if (val==='Backspace')
                backspace();
            if (val==='Enter')
                evaluate();
        }
    }

    function evaluate() {
        result = format(parser().evaluate(expression));
    }

    function backspace() {
        expression = expression.slice(0, -1)
    }

</script>

<div class="w-5/6 md:w-1/6 md:mt-6 mx-auto">
    <div class="h-48 p-1 bg-zinc-800 text-white border-2 border-orange-600/60 mt-3 rounded-sm">
        <p>{expression}</p>
    </div>

    <div class="h-24 p-1 bg-zinc-800 text-white border-2 border-cyan-600/80 my-2 rounded-sm">
        <p>{result}</p>
    </div>

    <div class="bg-zinc-800 text-white my-2 rounded-md">
        <div class="grid grid-cols-5 gap-1">
            <button on:click={()=>expPush('e')} class="calc-op">EE</button>
            <button on:click={()=>expPush('1')} class="calc-num">1</button>
            <button on:click={()=>expPush('2')} class="calc-num">2</button>
            <button on:click={()=>expPush('3')} class="calc-num">3</button>
            <button on:click={()=>expPush('-')} class="calc-op">-</button>

            <button class="calc-op">&radic;</button>
            <button on:click={()=>expPush('4')} class="calc-num">4</button>
            <button on:click={()=>expPush('5')} class="calc-num">5</button>
            <button on:click={()=>expPush('6')} class="calc-num">6</button>
            <button on:click={()=>expPush('+')} class="calc-op">+</button>

            <button class="calc-spec">^</button>
            <button on:click={()=>expPush('7')} class="calc-num">7</button>
            <button on:click={()=>expPush('8')} class="calc-num">8</button>
            <button on:click={()=>expPush('9')} class="calc-num">9</button>
            <button on:click={()=>expPush('*')} class="calc-op">*</button>

            <button on:click={()=>expPush('c')} class="calc-spec">CLC</button>
            <button class="calc-spec">(&#60;->)</button>
            <button on:click={()=>expPush('0')} class="calc-num">0</button>
            <button class="calc-spec">->()&#60;-</button>
            <button on:click={()=>expPush('/')} class="calc-op">/</button>
        </div>
    </div>

</div>

<svelte:window on:keydown={key => handleKeypress(key)} />