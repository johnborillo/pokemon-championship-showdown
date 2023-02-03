// MODEL
let selection = ["Charizard", "Blastoise", "Venusaur"];
let compScore = 0;
let playerScore = 0;
let roundCount = 0;

// VIEW
const playerChoiceFunctions = [
    function () { return "Charizard"; },
    function () { return "Blastoise"; },
    function () { return "Venusaur"; }
]

// CONTROLLER
function getPlayerChoice(choice) {
    if (roundCount < 5) {
        playRound(getComputerChoice(), choice);
        roundCount++;
        printRound(roundCount);
    } else {
        console.log("The game is over. Final score: Computer score: " + compScore + " | Player score: " + playerScore);
    }
}

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(compChoice, playerChoice) {
    let comp = compChoice.toLowerCase();
    let player = playerChoice.toLowerCase();
    printPlayerChoice(playerChoice);
    printCompChoice(compChoice);
    if (comp === player) {
        printResult[0]();
        console.log("Computer chose: " + comp);
        console.log("TIED!")
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    } else if (
        (comp === "charizard" && player === "venusaur") ||
        (comp === "venusaur" && player === "blastoise") ||
        (comp === "blastoise" && player === "charizard")
    ) {
        printResult[1]();
        console.log("Computer chose: " + comp);
        console.log("COMPUTER WINS!")
        compScore++;
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    } else {
        printResult[2]();
        console.log("Computer chose: " + comp);
        console.log("PLAYER WINS!");
        playerScore++;
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    }
    printScore(compScore, playerScore);
}

function printRound(rounds) {
    const currentRound = document.getElementById('currentRound');
    const element = document.createElement('h2');
    currentRound.innerHTML = '';
    element.innerText = 'ROUND ' + rounds;
    currentRound.appendChild(element);
}

function printPlayerChoice(pokemonChosen){
    const playerChoiceDiv = document.getElementById('playerChoice');
    playerChoiceDiv.innerHTML = '';
    const element = document.createElement('h3');
    element.innerText = "You chose " + pokemonChosen;
    playerChoiceDiv.appendChild(element);
}

function printCompChoice(pokemonChosen) {
    const compChoiceDiv = document.getElementById('compChoice');
    const element = document.createElement('h3');
    compChoiceDiv.innerHTML = '';
    element.innerText = "Ash chose " + pokemonChosen;
    compChoiceDiv.appendChild(element);
}

function printScore(compScore, playerScore){
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = '';
    const element = document.createElement('h3');
    element.innerText = "You: " + playerScore + "  Ash: " + compScore;
    scoreDiv.appendChild(element);
}

let printResult = [
    function(){
        const resultDiv = document.getElementById('finalResult');
        resultDiv.innerHTML = '';
        const element = document.createElement('h3');
        element.innerText = 'TIED!'
        resultDiv.appendChild(element);
    },
    function(){
        const resultDiv = document.getElementById('finalResult');
        resultDiv.innerHTML = '';
        const element = document.createElement('h3');
        element.innerText = 'ASH WINS!'
        resultDiv.appendChild(element);
    },
    function(){
        const resultDiv = document.getElementById('finalResult');
        resultDiv.innerHTML = '';
        const element = document.createElement('h3');
        element.innerText = 'YOU WIN!'
        resultDiv.appendChild(element);
    }
]