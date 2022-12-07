function capitalize(string) {
  let result = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
  return result;
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}


function playRound(e) {
  const pScore = document.querySelector("#pScore");
  const cScore = document.querySelector("#cScore");

  const playerSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();
  document.querySelector("#cChoice").textContent = capitalize(computerSelection);

  if (playerSelection === computerSelection) {
    result = `Tie! ${capitalize(playerSelection)} and ${capitalize(
      computerSelection
    )} the same, no conclusive winner.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
    pScore.textContent = 1 + Number.parseInt(pScore.textContent);
  } else {
    result = `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
    cScore.textContent = 1 + Number.parseInt(pScore.textContent);
  }

  document.querySelector("#result").textContent = result;
}


const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => button.addEventListener("click", playRound));
