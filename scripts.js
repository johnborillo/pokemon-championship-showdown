const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let selection = [rock, paper, scissors];
let compScore = 0;
let playerScore = 0;

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)]
    // console.log(selection[Math.floor(Math.random() * 3)])
}

function getPlayerChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

function playRound(compChoice, playerChoice){
    let comp = compChoice.toLowerCase();
    let player = playerChoice.toLowerCase();
    if (comp === player){
        console.log("Computer chose: " + comp);
        console.log("TIED!")
        console.log("Computer score: " + compScore + " | Player score: " + playerScore);
    } else if(
        (comp === "rock" && player === "scissors") ||
        (comp === "scirrors" && player === "paper") ||
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

async function game(){
    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getPlayerChoice());
        await sleep(3000);
    }
}

game();
