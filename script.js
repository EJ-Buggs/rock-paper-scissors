const buttons = document.querySelectorAll(".btn");
let pPoints = 1;
let cPoints = 1;
let playing = true;

//cpu choice = random choice selection
const getComputerChoice = function () {
  let choice = Math.trunc(Math.random() * 3);
  let weapons = ["rock", "paper", "scissors"];
  return weapons[choice];
};
let computerSelection = getComputerChoice();
//player choice = weapon btn click
let playerChoice = "";

for (weapon of buttons) {
  weapon.addEventListener("click", function () {
    if (playing) {
      playerChoice = this.textContent;
      computerSelection = getComputerChoice();
      console.log(computerSelection);
      playRound(playerChoice, computerSelection);
    }
  });
}
//compare player choice with cpu
const playRound = function (playerChoice, computerSelection) {
  if (
    (playerChoice == "rock" && computerSelection == "scissors") ||
    (playerChoice == "scissors" && computerSelection == "paper") ||
    (playerChoice == "paper" && computerSelection == "rock")
  ) {
    document.querySelector(".top-message").textContent = "You Win!";
    document.querySelector(".p-points").textContent = pPoints++;
  } else if (
    (computerSelection == "rock" && playerChoice == "scissors") ||
    (computerSelection == "paper" && playerChoice == "rock") ||
    (computerSelection == "scissors" && playerChoice == "paper")
  ) {
    document.querySelector(".top-message").textContent = "Computer Wins!";
    document.querySelector(".c-points").textContent = cPoints++;
  } else if (
    (computerSelection == "rock" && playerChoice == "rock") ||
    (computerSelection == "paper" && playerChoice == "paper") ||
    (computerSelection == "scissors" && playerChoice == "scissors")
  ) {
    document.querySelector(".top-message").textContent = "DRAW!";
  }
  game(pPoints, cPoints);
};
//GAME OVER
function game(pPoints, cPoints) {
  if (cPoints == 6 || pPoints == 6) {
    document.querySelector(".top-message").textContent = "GAME OVER!";
    playing = false;
  }
}
