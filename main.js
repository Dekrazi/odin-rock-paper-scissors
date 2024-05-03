const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    return choices[Math.floor(choices.length * Math.random())];
}

// Main loop
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        return; 
    }

    const computerChoice = getComputerChoice(choices);
    let message;

    if (computerChoice === playerChoice) {
        message = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        computerScore += 1;
        message = `Computer chose ${computerChoice}, you chose ${playerChoice}, and computer won this round!`;
    } else {
        playerScore += 1;
        message = `Computer chose ${computerChoice}, you chose ${playerChoice}, and you won this round!`;
    }

    updateScores();

    updateResults(message);

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player" : "Computer";
        const winMessage = `${winner} wins the game!`;
        updateResults(winMessage);
    }
}

function updateScores() {
    const playerScoreElement = document.getElementById("playerScore");
    const computerScoreElement = document.getElementById("computerScore");
    playerScoreElement.textContent = `Player score: ${playerScore}`;
    computerScoreElement.textContent = `Computer score: ${computerScore}`;
}

function updateResults(message) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = message;
}

const btnRock = document.getElementById("btnRock");
btnRock.addEventListener("click", () => playGame("rock"));

const btnPaper = document.getElementById("btnPaper");
btnPaper.addEventListener("click", () => playGame("paper"));

const btnScissors = document.getElementById("btnScissors");
btnScissors.addEventListener("click", () => playGame("scissors"));
