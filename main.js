const currentWord = document.getElementById("word");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

// words array
const words = [
  "mango",
  "guava",
  "melon",
  "peech",
  "lemon",
  "lime",
  "pear",
  "plum",
  "date",
  "orange",
  "banana",
  "apple",
  "kivi",
  "lychee",
  "cherry",
  "papaya",
  "dragonfruit",
  "fig",
];

let time = 6;
let score = 0;

window.addEventListener("DOMContentLoaded", init);

function init() {
  showWords();
  input.addEventListener("input", startMatch);
  setInterval(countDown, 1000);
  setInterval(gameOver);
  // gameOver();
}

// show random word
function showWords() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

// when user types
function startMatch() {
  if (doMatch()) {
    showWords();
    score++;
    time = 6;
    message.innerHTML = "Correct!!";
    input.value = "";
  } else {
    message.innerHTML = "In-Correct!!";
  }

  scoreDisplay.innerHTML = score;
}

// check word match
function doMatch() {
  if (currentWord.innerHTML === input.value) {
    return true;
  } else {
    return false;
  }
}

// timer
function countDown() {
  if (time > 0) {
    time--;
  }
  timeDisplay.innerHTML = time;
}

function gameOver() {
  if (time === 0) {
    message.innerHTML = "Game Over!!";
    document.getElementById("input").disabled = true;
    // gameOver.disabled = true;
  }
};
