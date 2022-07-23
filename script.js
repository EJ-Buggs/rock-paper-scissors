/*function for cpu random choice
generate random number between 1-3
1=r 2=p 3=s RETURN variable*/
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}
console.log(getComputerChoice());

/*prompt for user choice*/
prompt('Choose Weapon!', '');
/*decide victor between cpu and user choice
FUNCTION vs (cpu, user){
IF cpu = r & user = r THEN draw
IF cpu = p & and user = s THEN user win */
/*add point for each win up to 5 rounds*/