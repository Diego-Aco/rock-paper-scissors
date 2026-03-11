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
    const num = Number(prompt("Enter a number for rock [1], paper [2], or scissors [3]"));
    return numToChoice(num);
}

function nextRound() {
    const humanChoice = getComputerChoice();
    const cpuChoice = getComputerChoice();
    //TODO: create and call a function here that determines the winner
}

// const myChoice = getHumanChoice();
// console.log("You chose: " + myChoice);

