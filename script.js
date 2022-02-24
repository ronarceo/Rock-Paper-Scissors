// array of choices for the computer
const choices = ["R", "P", "S"];

// function for the computer to make a random choice between R, P, or S
let computerPlay = function() {
    return choices[Math.floor(Math.random() * choices.length)];
};

// variable to store computer's random choice
const computerSelection = computerPlay();

// displays computer's choice in the console
console.log(computerSelection);

// variable to store user's choice from a prompt
const playerSelection = window.prompt("Enter R for rock, P for paper, or S for scissors");

// displays user's choice in the console
console.log(playerSelection);