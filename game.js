console.log("Welcome to rock paper scissors");

let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;
let gameContinue;

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

function determineWinner(userChoice, computerChoice) {
    if (userChoice === "R") {
        if (computerChoice === "R") {
            return ("It's a draw")
        } else if (computerChoice === "P") {
            computerScore++
            return "Computer wins";
        } else {
            userScore++
            return "You win!";
        }
    } else if (userChoice === "P") {
        if (computerChoice === "P") {
            return "It's a draw";
        } else if (computerChoice === "S") {
            computerScore++
            return "Computer wins";
        } else {
            userScore++ 
            return "You win!";
        }
    } else if (userChoice === "S") {
        if (computerChoice === "S") {
            return "It's a draw";
        } else if (computerChoice === "R") {
            computerScore++
            return "Computer wins";
        } else {
            userScore++ 
            return "You win!";
        }
    } else {
        return "There was an issue with determing a winner, restart the page."
    }
}

function gameLogic() {;
    getComputerChoice();
    getUserChoice();
    return (determineWinner(userChoice, computerChoice) + ` Computer score is: ${computerScore}, your score is: ${userScore}`);
}

// Quick testing the logic
// console.log(determineWinner("S", "R") + " " + computerScore + " " + userScore);
for (let i = 0; i <= 4; i++) {
    console.log(gameLogic());
}