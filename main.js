const choices = ["rock", "paper", "scissors"]

function getComputerChoice(choices) {
    const computerChoice = choices[Math.floor(choices.length * Math.random())];
    console.log("Computer choice:", computerChoice); // Debugging
    return computerChoice;
}

function getPlayerChoice(choices) {
    let playerChoice
    do {
        playerChoice = prompt("rock, paper or scissors?").toLowerCase();
        if (!choices.includes(playerChoice)) {
            console.error("Invalid choice.");
        }
    } while (!choices.includes(playerChoice) && playerChoice !== null);
    return playerChoice;
}

// main loop
let rounds = 0
let playerScore = 0
let computerScore = 0

while (rounds < 5) {

    function playGame() {
        const computerChoice = getComputerChoice(choices);
        const playerChoice = getPlayerChoice(choices);

        if (computerChoice === playerChoice) {
            console.log("It's a tie!");
        } else if (
            (computerChoice === "rock" && playerChoice === "scissors") ||
            (computerChoice === "paper" && playerChoice === "rock") ||
            (computerChoice === "scissors" && playerChoice === "paper")
        ) {
            console.log("Computer won!");
            computerScore += 1
        } else {
            console.log("Player won!");
            playerScore += 1
        }
    }

    playGame();
    rounds += 1
}

console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
