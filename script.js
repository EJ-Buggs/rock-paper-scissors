const buttons = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const newGame = document.querySelector(".again");
const player = document.querySelector(".p-points");
const cpu = document.querySelector(".c-points");
const tmessage = document.querySelector(".top-message");

//starting parameters
let cPoints, pPoints, playing;
const init = function () {
  pPoints = 1;
  cPoints = 1;
  playing = true;
  player.textContent = 0;
  cpu.textContent = 0;
  tmessage.textContent = "Choose Your Weapon";

  closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  overlay.addEventListener("click", closeModal);
  closeModal();
};
init();

//cpu choice = random choice selection
const getComputerChoice = function () {
  let choice = Math.trunc(Math.random() * 3);
  let weapons = ["✊", "✋", "✌"];
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
    } else {
      outcome(cPoints, pPoints);
    }
  });
}
//compare player choice with cpu
const playRound = function (playerChoice, computerSelection) {
  if (
    (playerChoice == "✊" && computerSelection == "✌") ||
    (playerChoice == "✌" && computerSelection == "✋") ||
    (playerChoice == "✋" && computerSelection == "✊")
  ) {
    tmessage.textContent = "You Win!";
    player.textContent = pPoints++;
  } else if (
    (computerSelection == "✊" && playerChoice == "✌") ||
    (computerSelection == "✋" && playerChoice == "✊") ||
    (computerSelection == "✌" && playerChoice == "✋")
  ) {
    tmessage.textContent = "Computer Wins!";
    cpu.textContent = cPoints++;
  } else if (
    (computerSelection == "✊" && playerChoice == "✊") ||
    (computerSelection == "✋" && playerChoice == "✋") ||
    (computerSelection == "✌" && playerChoice == "✌")
  ) {
    tmessage.textContent = "DRAW!";
  }
  game(pPoints, cPoints);
};
//GAME OVER
function game(pPoints, cPoints) {
  if (cPoints == 6 || pPoints == 6) {
    tmessage.textContent = "GAME OVER!";
    playing = false;
    outcome(cPoints, pPoints);
  }
}

//Outcome modal
function outcome(cPoints, pPoints) {
  cPoints > pPoints
    ? (document.querySelector(".result").textContent = "You Lose...")
    : (document.querySelector(".result").textContent = "You Win!");
  openModal();
}

//new game
newGame.addEventListener("click", init);
