function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  asd = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return asd;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "Scissors") ||
    (playerSelection == "paper" && computerSelection == "Rock") ||
    (playerSelection == "scissors" && computerSelection == "Paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

const playerSelection = "rocK".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
