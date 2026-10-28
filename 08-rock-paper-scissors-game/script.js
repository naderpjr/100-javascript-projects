
const choiceButtons = document.querySelectorAll(".choice-button");
const resultEl = document.getElementById("result");
const roundDetailsEl = document.getElementById("round-details");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const resetButtonEl = document.getElementById("reset");

const choices = ["rock", "paper", "scissors"];

const choiceNames = {
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors"
};

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }

    const playerWins =
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper");

    return playerWins ? "win" : "lose";
}

function updateScores() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

function handlePlayerChoice(playerSelection) {
    const computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    if (outcome === "win") {
        playerScore++;
        resultEl.textContent = "You win!";
    } else if (outcome === "lose") {
        computerScore++;
        resultEl.textContent = "You lose!";
    } else {
        resultEl.textContent = "It's a tie!";
    }

    roundDetailsEl.textContent =
        `You chose ${choiceNames[playerSelection]}. ` +
        `Computer chose ${choiceNames[computerSelection]}.`;

    updateScores();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    updateScores();
    resultEl.textContent = "Choose a move to start playing.";
    roundDetailsEl.textContent = "";
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        handlePlayerChoice(button.id);
    });
});

resetButtonEl.addEventListener("click", resetGame);
