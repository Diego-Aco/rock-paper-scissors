let humanScore = 0;
let cpuScore = 0;

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function numToChoice(num) {
    switch(num) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getComputerChoice() {
    const min = 1;
    const max = 3;

    const num = getRandomIntInclusive(min, max);
    
    return numToChoice(num);
}

function getHumanChoice() {
    const choice = (prompt("Type in a choice and hit enter: rock paper scissors"));
    return choice.toLowerCase();
}

function determineResult(humanChoice, cpuChoice) {
    const humanWinStr = "You win!";
    const cpuWinStr = "CPU wins!";
    const tieStr = "It's a tie!";

    if (humanChoice === cpuChoice) {
        return tieStr;
    }

    //Below is every non-tie event:
    if (humanChoice==="rock") {
        if (cpuChoice==="paper") {
            return cpuWinStr;
        } else {    //cpu played scissors
            return humanWinStr;
        }
    } else if (humanChoice ==="paper") {
        if (cpuChoice==="rock") {
            return humanWinStr;
        } else {    //cpu played scissors
            return cpuWinStr;
        }
    } else { //humanChoice must be "scissors"
        if (cpuChoice==="rock") {
            return cpuWinStr;
        } else {    //cpu played paper
            return humanWinStr;
        }
    }
}

function incrementScores(result) {
    if (result==="You win!") {
        humanScore++;
    } else if (result==="CPU wins!") {
        cpuScore++;
    } else {
        return;
    }
}

function playRound() {
    const humanChoice = getHumanChoice();
    const cpuChoice = getComputerChoice();
    //TODO: create and call a function here that determines the winner
    const result = determineResult(humanChoice, cpuChoice);
    console.log(`You played ${humanChoice} and the CPU played ${cpuChoice}.\n${result}`);
    
    //increment scores based on winner
    incrementScores(result);
    console.log(`Your Score: ${humanScore}\tCPU Score: ${cpuScore}`);
    
}

function playGame() {
    for (let i =0; i<5; i++) {

    }
}

// const myChoice = getHumanChoice();
// console.log("You chose: " + myChoice);

playRound();