let player = 0;
let computer = 0;

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  asd = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return asd;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return console.log("It's a tie!");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return (
      console.log(
        "You Win! " + playerSelection + " beats " + computerSelection
      ),
      (player = player + 1)
    );
  } else {
    return (
      console.log(
        "You Lose! " + computerSelection + " beats " + playerSelection
      ),
      (computer = computer + 1)
    );
  }
}

const playerSelection = prompt().toLowerCase();
const computerSelection = getComputerChoice();
const computerSelection1 = getComputerChoice();
const computerSelection2 = getComputerChoice();
const computerSelection3 = getComputerChoice();
const computerSelection4 = getComputerChoice();

function playGame() {
  playRound(computerSelection, playerSelection);
  playRound(computerSelection1, playerSelection);
  playRound(computerSelection2, playerSelection);
  playRound(computerSelection3, playerSelection);
  playRound(computerSelection4, playerSelection);
}

function totalScore() {
  if (player > computer) {
    return console.log("Player Wins");
  } else return console.log("Computer Wins");
}

playGame();
totalScore();
