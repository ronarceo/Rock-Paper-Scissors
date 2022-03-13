// function to play a round of rock, paper, scissors
function playRound(playerSelection) {
    // array of choices for the computer
    const choices = ["rock", "paper", "scissors"];

    // function for the computer to make a random choice between R, P, or S
    let computerPlay = function() {
        return choices[Math.floor(Math.random() * choices.length)];
    };

    // variable to store computer's random choice
    const computerSelection = computerPlay();

    // displays computer's choice in the console
    console.log("Computer chose: " + computerSelection);

    // displays user's choice in the console
    console.log("Player chose: " + playerSelection);

    // if statement to determine win, loss, or tie
    if (playerSelection === computerSelection) {
        alert("It's a tie");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        alert("You win");
    } else {
        alert("You lose");
    }
};

const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id);
    });
});