// MODEL
let selection = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;
let roundCount = 0;

// VIEW
const playerChoiceFunctions = [
    function () { return "rock"; },
    function () { return "paper"; },
    function () { return "scissors"; }
]


// CONTROLLER
function getPlayerChoice(choice) {
    if (roundCount < 5) {
        playRound(getComputerChoice(), choice);
        roundCount++;
    } else {
        console.log("The game is over. Final score: Computer score: " + compScore + " | Player score: " + playerScore);
    }
}

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(compChoice, playerChoice) {
    let comp = compChoice.toLowerCase();
    let player = playerChoice;
    if (comp === player) {
        console.log("Computer chose: " + comp);
        console.log("TIED!")
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    } else if (
        (comp === "rock" && player === "scissors") ||
        (comp === "scissors" && player === "paper") ||
        (comp === "paper" && player === "rock")
    ) {
        console.log("Computer chose: " + comp);
        console.log("COMPUTER WINS!")
        compScore++;
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    } else {
        console.log("Computer chose: " + comp);
        console.log("PLAYER WINS!");
        playerScore++;
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    }
}
