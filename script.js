/*function for cpu random choice*/
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}
const computerSelection= getComputerChoice();

/*prompt for user choice*/
const playerSelection = prompt('Choose Weapon!', '').toLowerCase();

/*decide victor between cpu and user choice*/
function playRound(playerSelection, computerSelection) {
    if(computerSelection == 'rock' && playerSelection == 'paper') {
        return "You Win! Paper beats Rock";
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
        return "Uh...";
    }
}
console.log(playRound(playerSelection, computerSelection));

/*add point for each win up to 5 rounds*/
function game() {
    if(playRound(playerSelection, computerSelection).includes('You win!')) {
        for(let i = 0; i < 5; i++) {
            console.log('Player has ' + i + ' points');
        }
    } else if(playRound(playerSelection, computerSelection).includes('You Lose!')) {
        for(let j = 0; j < 5; j++) {
            return 'CPU has ' + j + ' points';
        }
    } else if(playRound(playerSelection, computerSelection).includes('DRAW!')) {
        for(let d = 0; d < 20; d++) {
            return 'Draw ' + d;
        }
    } else if(i == 5 || j == 5) {
        return 'GAME OVER!';
    }
}
console.log(game());