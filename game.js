console.log("Welcome to rock paper scissors");

let computerChoice;
let userChoice;


function getUserChoice() {
    userChoice = prompt("what is your choice?");
    return userChoice;
}

function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        computerChoice = "R";
    } else if (randomChoice > 0.33 && randomChoice <= 0.67) {
        computerChoice = "P";
    } else {
        computerChoice = "S";
    }
    return computerChoice
}

console.log(getComputerChoice())
