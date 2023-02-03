// MODEL
let selection = ["charizard", "blastoise", "venusaur"];
let compScore = 0;
let playerScore = 0;
let roundCount = 0;

// VIEW
const playerChoiceFunctions = [
    function () { return "charizard"; },
    function () { return "blastoise"; },
    function () { return "venusaur"; }
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
        (comp === "charizard" && player === "venusaur") ||
        (comp === "venusaur" && player === "blastoise") ||
        (comp === "blastoise" && player === "charizard")
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
