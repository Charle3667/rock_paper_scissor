let computerScore = 0;
let playerScore = 0;
const result = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
const reset = document.querySelector('#reset')

result.textContent = "Make your move! First to five wins the game.";

scoreDisplay.textContent = 
    ("Computer Score: " + computerScore + " " +
    "Player Score: " + playerScore);

const buttons = document.querySelectorAll('#choice');
buttons.forEach((button) => {button.addEventListener('click', () => {
    let playerSelection = button.className;
    if (computerScore > 4 || playerScore > 4) {
        console.log("greater than 4")
        scoreCheck()
    } else {
        console.log("less than four")
        fullGame(playerSelection);
        scoreCheck();
    } 
    
  });
});

reset.addEventListener('click', () => {
    resetGame();
});


// Game Functions


function resetGame() {
computerScore = 0
playerScore = 0
scoreDisplay.textContent = 
            ("Computer Score: " + computerScore + " " + 
            "Player Score: " + playerScore);
result.textContent = "Make your move! First to five wins the game.";
reset.textContent = ("Reset");
}

function scoreCheck() {
    if (playerScore > 4) {
        result.textContent = "Player wins. Congrats!";
        scoreDisplay.textContent = 
            ("Final score. Computer: " + computerScore + " " + 
            "Player: " + playerScore);
        reset.textContent = ("Play again.");
    } else if (computerScore > 4) {
        result.textContent = "Computer wins. Try again.";
        scoreDisplay.textContent = 
            ("Final score. Computer: " + computerScore + " " + 
            "Player: " + playerScore);
        reset.textContent = ("Play again.");
    } else { 
        return(scoreDisplay.textContent = 
            ("Computer Score: " + computerScore + " " + 
            "Player Score: " + playerScore));
    } 
}

function fullGame(x) {
    // takes the result of a single round of the game and adds a point to the winning player's score.
    let resultOf = singleRound(x);

    if (resultOf === "Win") {
        playerScore = playerScore + 1;
        console.log("Score is Comp: " + computerScore + " and player: " + playerScore)  
    } else if (resultOf === "Loss") {
        computerScore = computerScore + 1;
        console.log("Score is Comp: " + computerScore + " and player: " + playerScore)   
    } else {
        return("tie")
    }
}

function computerPlay() {
    // generates random number between 1 and 3 with each integer being assigned a designated "move".
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function singleRound(x) {
    // Player makes move and that move is compared to the computer move to determine the winner.
    let move = computerPlay();
    if (x === "rock") {
        if (move === "Rock") {
            result.textContent = "Computer chose Rock. Tie"
            return("Tie")
        } else if (move === "Paper") {
            result.textContent = "Computer chose Paper. Computer wins round."
            return("Loss")
        } else {
            result. textContent = "Computer chose scissors. Player wins round."
            return("Win")
        }
    }
    if (x === "paper") {
        if (move === "Rock") {
            result.textContent = "Computer chose Rock. Player wins rounds"
            return("Win")
        } else if (move === "Paper") {
            result.textContent = "Computer chose paper. Tie."
            return("Tie")
        } else {
            result.textContent = "Computer chose scissors. Computer wins round."
            return("Loss")
        }
    }
    if (x === "scissors") {
        if (move === "Rock") {
            result.textContent = "Computer chose Rock. Computer wins round"
            return("Loss")
        } else if (move  === "Paper") {
            result. textContent = "Computer chose paper. Player wins round."
            return("Win")
        } else {
            result.textContent = "Computer chose scissors. Tie."
            return("Tie")
        }
    }
}
