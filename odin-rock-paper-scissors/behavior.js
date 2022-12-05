function capitalize(string) {
  let result = string.slice(0,1).toUpperCase() + string.slice(1,).toLowerCase()
  return result;
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    result =
      `Tie! ${capitalize(playerSelection)} and ${capitalize(computerSelection)} the same, no conclusive winner.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
  } else {
    result = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
  }

  return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`Player selection: ${playerSelection}`)
console.log(`Computer selection: ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));
