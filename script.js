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

function playRound(playerSelection, computerSelection) {
    if(computerSelection == 'rock' && playerSelection == 'paper') {
        return"You Win! Paper beats Rock";
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return "You Lose! Paper beats Rock"; 
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return "You win! Scissors beats Paper";
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return "You win! Rock beats Scissors";
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection == 'rock' && playerSelection == 'rock') {
        return "DRAW!";
    } else if (computerSelection == 'paper' && playerSelection == 'paper') {
        return "DRAW!";
    } else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        return "Draw!";
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