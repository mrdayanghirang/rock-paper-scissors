function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!";
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
     } else {
        return `You lose!`;
     }
}

const playerSelection = prompt('Make a Selection').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));