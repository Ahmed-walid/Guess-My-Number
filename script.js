"use strict";

let score = 100;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const decrementValue = 20;

init();


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score <= 0) return;

  if (!guess) document.querySelector(".assistant").textContent = "Empty guess!";
  else if (guess != secretNumber) {
    score -= decrementValue;
    if (score <= 0)
      document.querySelector(".assistant").textContent = "Game Over :(";
    else if (guess > secretNumber)
      document.querySelector(".assistant").textContent = "Guess is too high!";
    else if (guess < secretNumber)
      document.querySelector(".assistant").textContent = "Guess is too low!";
  }else{
    document.querySelector(".assistant").textContent = "Correct guess, Congrats!"
    highScore = Math.max(highScore, score);
    document.querySelector(".high-score").textContent = highScore;
    document.querySelector("#question-mark").textContent = secretNumber;
  }

  document.querySelector(".score").textContent = score;

});

document.querySelector(".again").addEventListener("click", init);

function init(){
    score = 100;
    document.querySelector(".score").textContent = score;
    document.querySelector("#question-mark").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".assistant").textContent = "Start guessing...";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}