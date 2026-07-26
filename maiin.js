const buttons = document.querySelectorAll(".card");
const result = document.querySelector(".result");
const playerScore = document.querySelectorAll(".score span")[0];
const computerScore = document.querySelectorAll(".score span")[1];

let pScore = 0;
let cScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // let playerChoice = choices[index];

    // console.log(button.innerText.split("\n")[2])

    let playerChoice = button.innerText.split("\n")[2];
    console.log(playerChoice);

    let randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    let computerChoice = choices[randomIndex];
    console.log(computerChoice);

    if (playerChoice === computerChoice) {
      result.innerText = `Draw! ${playerChoice}`;
    } 
    else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "paper")
    ) {

      pScore++;
      playerScore.innerText = pScore;
      result.innerText = `You Win! ${playerChoice} beats ${computerChoice}`;
    }
     else {
      cScore++;
      computerScore.innerText = cScore;
      result.innerText = `Computer Wins! ${computerChoice} beats ${playerChoice}`;
    }
  });
});
