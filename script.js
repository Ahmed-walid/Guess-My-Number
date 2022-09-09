"use strict";

const upperLimits = [16, 32, 64, 128, 256];

let upperLimit;
let score;
let highScore;
let secretNumber;
const decrementValue = 20;

init();

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score <= 0) return;

  if (!guess)
    document.querySelector(".assistant").textContent = "⛔️ Empty guess!";
  else if (guess != secretNumber) {
    score -= decrementValue;
    if (score <= 0){
        document.querySelector(".assistant").innerHTML =
        "Game Over 💥 <wbr><a target='_blank' href='https://www.geeksforgeeks.org/binary-search/'>BinarySearch?</a><wbr>";
        document.querySelector("body").style.backgroundColor = "#b50000";
      }    else if (guess > secretNumber)
      document.querySelector(".assistant").textContent = "Guess is too high!";
    else if (guess < secretNumber)
      document.querySelector(".assistant").textContent = "Guess is too low!";
  } else {
    document.querySelector(".assistant").textContent =
      "🎉 Correct guess, Congrats!";
    highScore = Math.max(highScore, score);
    document.querySelector(".high-score").textContent = highScore;
    document.querySelector("#question-mark").textContent = secretNumber;
    document.querySelector("#question-mark").style.width = "440px";
    document.querySelector("body").style.backgroundColor = "#60b347";
  }

  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", init);

function init() {
  upperLimit = upperLimits[Math.trunc(Math.random() * upperLimits.length)];
  score = Math.trunc(Math.ceil(Math.log2(upperLimit))) * decrementValue;
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1
  highScore = 0;
  document.querySelector(".one-twenty").textContent = `(Between 1 and ${upperLimit})`;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector("#question-mark").textContent = "?";
  document.querySelector("#question-mark").style.width = "220px";
  document.querySelector(".guess").value = "";
  document.querySelector(".assistant").textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * upperLimit) + 1;
}
