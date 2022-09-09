"use strict";

let upperLimit = 16;
let score;
let highScore = 0;
let secretNumber;
const decrementValue = 20;

const body_ = document.querySelector("body");
const headerStatment_ = document.querySelector(".one-twenty");
const againBtn_ = document.querySelector(".again");
const questionMark_ = document.querySelector("#question-mark");
const assistant_ = document.querySelector(".assistant");
const score_ = document.querySelector(".score");
const highScore_ = document.querySelector(".high-score");
const guessInput_ = document.querySelector(".guess");
const checkBtn_ = document.querySelector(".check");

init();

checkBtn_.addEventListener("click", function () {
  const guess = Number(guessInput_.value);

  if (score <= 0) return;

  if (!guess) assistant_.textContent = "⛔️ Empty guess!";
  else if (guess != secretNumber) {
    score -= decrementValue;
    if (score <= 0) {
      upperLimit /= 2;
      assistant_.innerHTML = "Game Over 💥 Level Down!";
      body_.style.backgroundColor = "#b50000";
    } else if (guess > secretNumber)
      assistant_.textContent = "Guess is too high!";
    else if (guess < secretNumber) assistant_.textContent = "Guess is too low!";
  } else {
    upperLimit *= 2;
    assistant_.textContent = "🎉 Correct guess, Congrats!. Level Up!";
    highScore = Math.max(highScore, score);
    highScore_.textContent = highScore;
    questionMark_.textContent = secretNumber;
    questionMark_.style.width = "440px";
    body_.style.backgroundColor = "#60b347";
  }

  score_.textContent = score;
});

againBtn_.addEventListener("click", init);

function init() {
  upperLimit = Math.min(16384, upperLimit);
  upperLimit = Math.max(16, upperLimit);
  score = Math.trunc(Math.ceil(Math.log2(upperLimit))) * decrementValue;
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
  headerStatment_.textContent = `(Between 1 and ${upperLimit})`;
  body_.style.backgroundColor = "#222";
  score_.textContent = score;
  questionMark_.textContent = "?";
  questionMark_.style.width = "220px";
  guessInput_.value = "";
  assistant_.textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
}
