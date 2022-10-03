function getComputerChoice() {
   const choice = ['rock', 'paper', 'scissors'];
   return choice[Math.floor(Math.random() * choice.length)];
}

const playerSelection = prompt('Make a Selection').toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
       return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
       return 'You win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
       return 'You win! Scissors beats Paper';
    } else {
       return `You lose!`;
    }
}

function game() {
   for (let i = 0; i < 5; i++);
}

console.log('The Computer chose' + ' ' + computerSelection);
console.log('You chose' + ' ' + playerSelection);
console.log(playRound(playerSelection, computerSelection));