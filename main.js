const choices = ["rock", "paper", "scissors"]

function getComputerChoice(choices) {
    return choices[Math.floor(choices.length * Math.random())];
}

computerChoice = getComputerChoice(choices)

