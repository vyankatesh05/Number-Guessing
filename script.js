let input = document.getElementById('input')
let btn = document.getElementById('btn')
let wrong = document.getElementById('wrong')
let guesses = document.getElementById('guesses')

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let numGuesses = 0;

btn.addEventListener("click", () => {
    guessNumber();
})

function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrong.innerHTML = "Enter a number between 1 to 100";
    }
    else {
        numGuesses++;
        guesses.innerHTML = "No. of guess : " + numGuesses;

        if (input.value > answer) {
            wrong.innerHTML = " too high";
            input.value = "";
        }
        else if (input.value < answer) {
            wrong.innerHTML = " too low";
            input.value = "";
        }
        else {
            wrong.innerHTML = "Congratulations you guessed it right!!!!";
        }
    }
}
