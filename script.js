let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let playerSign = document.querySelector("#playerSign");
let computerSign = document.querySelector("#computerSign");
let info = document.querySelector("#info")

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

    // displays computer's choice
    switch(computerSelection) {
        case "rock":
            computerSign.innerText = "✊";
            break;
        case "paper":
            computerSign.innerText = "✋";
            break;
        case "scissors":
            computerSign.innerText = "✌";
            break;
    }

    // displays user's choice
    switch(playerSelection) {
        case "rock":
            playerSign.innerText = "✊";
            break;
        case "paper":
            playerSign.innerText = "✋";
            break;
        case "scissors":
            playerSign.innerText = "✌";
            break;
    }

    // if statement to determine win, loss, or tie
    if (playerSelection === computerSelection) {
        info.innerText = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
        info.innerText = "You won a point!";
    } else {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        info.innerText = "Computer won a point!";
    }

    if (playerScore.innerText == 5) {
        endgameMsg.textContent = 'You won!'
        endgameModal.classList.add('active');
    }

    if (computerScore.innerText == 5) {
        endgameMsg.textContent = 'You lost!'
        endgameModal.classList.add('active');
    }
};

const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.id);
    });
});

const endgameModal = document.querySelector("#endgameModal");
const endgameMsg = document.querySelector("#endgameMsg");
const restartBtn = document.querySelector("#restartBtn");

restartBtn.addEventListener("click", () => {
    restartGame();
})

function restartGame() {
    info.innerText = "Win 5 rounds before the computer to win the game.";
    playerScore.innerText = '0';
    computerScore.innerText = '0';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    endgameModal.classList.remove('active');
}