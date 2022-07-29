function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
})

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
})

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
})

let player = 0;
let cpu = 0;
let round = 0;

const body = document.body
const result = document.createElement('div');

function playRound(playerSelection, computerSelection) {
if(computerSelection == 'rock' && playerSelection == 'paper' ||
  computerSelection == 'paper' && playerSelection == 'scissors' ||
  computerSelection == 'scissors' && playerSelection == 'rock') {
    player = player++
    player++, round++
    result.textContent = `Round:${round} You Win! ${playerSelection} beats ${computerSelection} Player:${player} CPU:${cpu}`
    body.append(result);
} else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
  computerSelection == 'paper' && playerSelection == 'rock' || 
  computerSelection == 'scissors' && playerSelection == 'paper') {
    cpu = cpu++
    cpu++, round++
    result.textContent = `Round:${round} You Loose! ${computerSelection} beats ${playerSelection} Player:${player} CPU:${cpu}`
    body.append(result);
} else if (computerSelection == 'rock' && playerSelection == 'rock' ||
  computerSelection == 'paper' && playerSelection == 'paper' ||
  computerSelection == 'scissors' && playerSelection == 'scissors') {
    round++
    result.textContent = `Round:${round} DRAW! Player:${player} CPU:${cpu}`;
} else {
    return "Uh....";
}
}
/*
//add point for each win up to 5 rounds
function game() {
    for(let i = 1; i < 6; i++) {
        console.log(`Round ${i} !`);
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes("You win!")) {
            p = p++;
            p++;
            console.log(`Player has ${p} points`);
        } else if (playRound(playerSelection, computerSelection).includes("You Lose!")) {
            c = c++
            c++;
            console.log(`CPU has ${c} points`);
        } else if (i == 6 && p > c) {
            console.log(`GAME OVER PLAYER WINS: ${p} v ${c}`);
        } else if (i == 6 && p < c) {
            console.log(`GAME OVER: CPU WINS ${p} v ${c}`);
        } else if (i == 6 && p == c) {
            console.log(`GAME OVER: DRAW ${p} v ${c}`);
        }
    }
}
game();
*/
