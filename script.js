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
    if (player == 5) {
        result.textContent = `GAME OVER: PLAYER WON!!! Player:${player} CPU:${cpu}`;
        body.append(result);
    } else {
        result.textContent = `Round:${round} You Win! ${playerSelection} beats ${computerSelection} Player:${player} CPU:${cpu}`
        body.append(result);
    }
    
} else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
  computerSelection == 'paper' && playerSelection == 'rock' || 
  computerSelection == 'scissors' && playerSelection == 'paper') {
    cpu = cpu++
    cpu++, round++
    if (cpu == 5) {
        result.textContent = `GAME OVER: CPU WON!! Player:${player} CPU:${cpu}`
        body.append(result);
    } else {
        result.textContent = `Round:${round} You Loose! ${computerSelection} beats ${playerSelection} Player:${player} CPU:${cpu}`
        body.append(result);
    }
    
} else if (computerSelection == 'rock' && playerSelection == 'rock' ||
  computerSelection == 'paper' && playerSelection == 'paper' ||
  computerSelection == 'scissors' && playerSelection == 'scissors') {
    round++
    result.textContent = `Round:${round} DRAW! Player:${player} CPU:${cpu}`;
} else {
    return "Uh....";
}
}