let randomNumber = parseInt((Math.random() * 100) + 1);


const inputNumber = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const resultparas = document.querySelector('.resultParas');
const prevguess = document.querySelector('.guesses');
const remguesses = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let guesses = [];
let no_of_attempts = 0;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(inputNumber.value);
        validate_guess(guess);
    })
}

function checkGuess(guess){
    if(guess === randomNumber){
        displaymessage(`CORRECT! You Guessed The Right Number`);
        endgame();
    }
    else if(guess > randomNumber){
        displaymessage(`number is too large`);
    }
    else if(guess < randomNumber){
        displaymessage(`number is too small`);
    }
}

function validate_guess(guess){
    if(isNaN(guess)){
        alert(`enter a valid number`);
    }
    else if(guess > 100){
        alert(`enter a number less than 100`);
    }
    else if(guess < 1){
        alert(`enter a number greater than 1`);
    }
    else{
        if(no_of_attempts === 10){
            checkGuess(guess);
            displaymessage(`Game over! Random number is ${randomNumber}`);
            endgame();
        }
        else{
            checkGuess(guess);
            displayguess(guess);
        }
    }
}

function displayguess(guess){
    inputNumber.value = '';
    prevguess.innerHTML += `${guess}  `;
    no_of_attempts++;
    remguesses.innerHTML = `${10 - no_of_attempts}`;
}

function displaymessage(message){
    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    inputNumber.value = '';
    inputNumber.setAttribute('disabled' ,'');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">NEW GAME</h2>`;
    resultparas.appendChild(p);
    playGame = false;
    newgame();
}

function newgame(){
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click' , (e) => {
        randomNumber = parseInt((Math.random() * 100) + 1);
        inputNumber.removeAttribute('disabled');
        no_of_attempts = 0;
        guesses = [];
        prevguess.innerHTML = '';
        resultparas.removeChild(p);
        playGame = false;
    })
}