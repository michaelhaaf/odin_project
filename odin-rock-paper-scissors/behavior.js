function capitalize(string) {
  let result = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
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
  } else {
    result = `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`;
  }

  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    result = playRound(playerSelection, computerSelection);
    if (result.includes("You win")) {
      playerScore++;
    } else if (result.includes("You lose")) {
      computerScore++;
    }
    console.log(result)
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
  }
  console.log(`Game over!`)
}

game();
