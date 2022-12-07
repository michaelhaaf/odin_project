let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", buttonClickBeginRound)
);

function buttonClickBeginRound(e) {
  playerSelection = this.textContent.toLowerCase();
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result = `Tie! ${capitalize(playerSelection)} and ${capitalize(
      computerSelection
    )} the same, no conclusive winner.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  } else {
    computerScore++;
    result = `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
  }
  updateScore();
  displayResults(result);
}

function updateScore() {
  let playerScoreBox = document.querySelector("#playerScoreBox");
  let computerScoreBox = document.querySelector("#computerScoreBox");
  playerScoreBox.textContent = playerScore;
  computerScoreBox.textContent = computerScore;
}

function displayResults(str) {
  let gameResult = document.querySelector("#gameResult");
  let matchResult = document.querySelector("#matchResult");

  gameResult.textContent = str;
  if (playerScore >= 5) {
    matchResult.textContent = "You win!";
  } else if (computerScore >= 5) {
    matchResult.textContent = "You lose!";
  }
}

// Helper Functions //

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}
