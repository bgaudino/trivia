<script>
import { current_component } from "svelte/internal";

    const options = {
        categories: [
            {name: 'Books', value: 10},
            {name: 'Movies', value: 11},
            {name: 'Music', value: 12},
            {name: 'TV', value: 14},
            {name: 'Video Games', value: 15},
            {name: 'Computers', value: 18},
            {name: 'Sports', value: 21},
            {name: 'History', value: 23},
            {name: 'Politics', value: 24},
            {name: 'Art', value: 25},
            {name: 'Animals', value: 27}
        ],
        difficulty: [
            'easy',
            'medium',
            'hard'
        ],
        numQuestions: 10,
        nums: [],
    };

    for (let i = 1; i <= 50; i++) {
        options.nums.push(i);
    }


    const state = {
        category: 10,
        answer: null,
        difficulty: 'easy',
        correct: 0,
        problems: 0,
        feedback: '',
        nextQuestion: false,
        questions: [],
        currentQuestion: 0,
        nextQuestion: false,
        readonly: false,
        gameOver: false,
        started: false
    }

    $: pct = Math.round((state.correct / state.problems) * 100);

    async function getQuestions() {
        const url = `https://opentdb.com/api.php?amount=${options.numQuestions}&category=${state.category}&difficulty=${state.difficulty}&type=multiple`;
        const res = await fetch(url);
        const data = await res.json();
        const questions = data.results;
        data.results.forEach(result => {
            result.answers = [...result.incorrect_answers, result.correct_answer];
            shuffleArray(result.answers);
        })
        state.feedback = '';
        state.nextQuestion = false;
        state.currentQuestion = 0;
        state.questions = data.results;
        console.log(data.results);
        return state.questions;
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }   

    function checkAnswer(e) {
        const guess = e.target;
        const answer = state.questions[state.currentQuestion].correct_answer;
        guess.style.color = 'white';
        if (answer === guess.value) {
            guess.style.backgroundColor = 'green';
            state.feedback = 'Correct!';
            state.correct++;
        } else {
            guess.style.backgroundColor = 'red';
            state.feedback = `Oops! The correct answer was ${answer}`;
        }
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.value === answer) {
                button.style.color = 'white';
                button.style.backgroundColor = 'green';
            }
        })
        state.readonly = true;
        state.problems++;
        if (state.currentQuestion === state.questions.length - 1) {
            state.gameOver = true;
            return false;
        } else {
            state.nextQuestion = true;
        }
    }

    function getNextQuestion() {
        state.currentQuestion = state.currentQuestion + 1;
        state.nextQuestion = false;
        state.feedback = '';
        state.readonly = false;
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = '#f5f6f7';
            button.style.color = '#0a0a23';
        });
    }

    function restart() {
        state.readonly = false;
        state.gameOver = false;
        state.questions = getQuestions();
        state.problems = 0;
        state.correct = 0;
    }

    function changeOptions() {
        state.started = false;
        state.readonly = false;
        state.problems = 0;
        state.correct = 0;
        state.gameOver = false;
    }

    function play() {
        state.questions = getQuestions();
        state.started = true;
    }

</script>


<div id="main">
    <h1>Trivia</h1>
    {#if !state.started}
        <h2>Options</h2>
        <div class="label">Category</div>
        <select bind:value={state.category}>
            {#each options.categories as category}
                <option value={category.value}>{category.name}</option>
            {/each}
        </select>
        <div class="label">Difficulty</div>
        <select bind:value={state.difficulty}>
            {#each options.difficulty as difficulty}
                <option value={difficulty}>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</option>
            {/each}
        </select>
        <div class="label">Questions</div>
        <select bind:value={options.numQuestions}>
            {#each options.nums as num}
                <option value={num}>{num}</option>
            {/each}
        </select>
        <button id="play" on:click={play}>Play</button>
    {:else}
        <h2>Score: {state.correct} / {state.problems}</h2>
        <div id="game">
            {#await state.questions then data}
                <h3>{@html data[state.currentQuestion].question}</h3>
                {#each data[state.currentQuestion].answers as answer}
                    <div>
                        <button disabled={state.readonly} class="answer" value={answer} on:click={checkAnswer}>{@html answer}</button> 
                    </div>
                {/each}
            {/await}
        </div>
        <h3>{@html state.feedback}</h3>
        {#if state.nextQuestion}
            <button on:click={getNextQuestion}>Next Question</button>
        {/if}
        {#if state.gameOver}
            <h1>Game Over</h1>
            {#if pct >= 80}
                <h2>Wow, you're smart!</h2>
            {:else if pct >= 60}
                <h2>Better study more for next time!</h2>
            {:else if pct >= 40}
                <h2>At least you're pretty!</h2>
            {:else}
                <h2>Wow, how are you still alive?</h2>
            {/if}
            <button on:click={restart}>Play again</button>
            <button on:click={changeOptions}>Options</button>
        {/if}
    {/if}
</div>


<style>
    :global(body) {
        color: #f5f6f7;
        background-color: #0a0a23;
        display: grid;
        place-items: center;
        text-align: center;
    } 
    
    button {
        width: 100%;
        max-width: 720px;
        background-color: #f5f6f7;
        color: #0a0a23;
        padding: 12px;
        border: none;
        margin-bottom: 2px;
    }

    button {
        cursor: pointer;
    }

    select {
        width: 100%;
        padding: 12px;
        max-width: 720px;
    }

    .label {
        width: 100%;
        max-width: 720px;
        margin: 12px auto 4px auto;
        text-align: left;
        font-size: 1.1em;
    }
    #game {
        background-color: #3b3b4f;
        max-width: 720px;
        border-radius: 12px;
        padding: 20px;
        margin: auto;
    }

    #main {
        width: 90vw;
    }

    #play {
        margin-top: 20px;
    }
</style>
