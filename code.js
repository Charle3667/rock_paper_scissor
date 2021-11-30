

console.log("Rock, Paper, Scissors")
var computerScore = 0;
var playerScore = 0;

game()


function game() {
    // runs fullGame function until score reaches 5 for one of the players
    if (playerScore === 5) {
        console.log("Player wins. Congrats!")
        alert("Player wins. Congrats!")
    }
    else if (computerScore === 5) {
        console.log("Computer wins. Try again.")
        alert("Computer wins. Try again.")
    }
    else {fullGame()}
}

function fullGame() { 
    // takes the result of a single round of the game and adds a point to the winning player's score.
    let result = singleRound();
    console.log(result);
    
    if (result === "Win. Rock beats scissors.") {
        playerScore = (playerScore + 1) 
    }
    else if (result === "Win. Paper beats rock.") {
        playerScore = (playerScore + 1) 
    }
    else if (result === "Win. Scissors beats paper.") {
        playerScore = (playerScore + 1) 
    }
    else if (result === "Loss. Rock beats scissors.") {
        computerScore = (computerScore + 1)
    }
    else if (result === "Loss. Paper beats rock.") {
        computerScore = (computerScore + 1)
    }
    else if (result === "Loss. Scissors beats paper.") {
        computerScore = (computerScore + 1)
    }
    else {}

    console.log("Score is: Player - " + playerScore + " and Computer - " + computerScore + ".");
    alert(result + " Player: " + playerScore + "  Computer:  " + computerScore + ".");
    game();

}

function computerPlay() {
    // generates random number between 1 and 3 with each integer being assigned a designated "move".
    let random = Math.floor(Math.random()*3) + 1;
    if (random === 1) {  
        return("Rock")
    }
    else if (random ===2){
        return("Paper")
    }
    else {
        return("Scissors")
    } 
}
    

function singleRound(){
    // Player makes move and that move is compared to the computer move to determine the winner.
    let playerSelection = prompt('Choose "Rock", "Paper" or "Scissors"');
    let move = computerPlay();
    if (playerSelection.toUpperCase() === "Rock".toUpperCase()) {
        if (move.toUpperCase() === "Rock".toUpperCase()) {
            return("Tie.")}
        else if (move.toUpperCase() === "Paper".toUpperCase()){ 
            return("Loss. Paper beats rock.")
        }
        else {return("Win. Rock beats scissors.")} 
    }
    if (playerSelection.toUpperCase() === "Paper".toUpperCase()) {
        if (move.toUpperCase() === "Rock".toUpperCase()) {
            return("Win. Paper beats rock.")}
        else if (move.toUpperCase() === "Paper".toUpperCase()){ 
            return("Tie.")
        }
        else {return("Loss. Scissors beats paper.")}
    }
    if (playerSelection.toUpperCase() === "Scissors".toUpperCase()) {
        if (move.toUpperCase() === "Rock".toUpperCase()) {
            return("Loss. Rock beats scissors.")}
        else if (move.toUpperCase() === "Paper".toUpperCase()){ 
            return("Win. Scissors beats paper.")
        }
        else {return("Tie.")}        
    }       
}










