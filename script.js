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