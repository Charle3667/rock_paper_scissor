console.log("Rock, Paper, Scissors")
let playerSelection = prompt('Choose "Rock", "Paper" or "Scissors"')
game()

function game () {
let random = Math.floor(Math.random()*3) + 1;
let move = computerPlay()
let result = singleRound()
console.log("Player move is " + playerSelection)
console.log("Computer move is " + move)
console.log("Result is: " + '"' + result + '"')
alert(result)


    function computerPlay() {
        if (random === 1) {  
            return("Rock")}
        else if (random ===2){
            return("Paper")
        }
        else {
            return("Scissors")
        } 
    }
    function singleRound(){
        if (playerSelection === "Rock") {
            if (move === "Rock") {
                return("Tie.")}
            else if (move === "Paper"){ 
                return("Loss. Paper beats rock.")
            }
            else {return("Win. Rock beats Scissors")}
            
        }
        if (playerSelection === "Paper") {
            if (move === "Rock") {
                return("Win. Paper beats rock.")}
            else if (move === "Paper"){ 
                return("Tie.")
            }
            else {return("Loss. Scissors beats Paper")}
        }
        if (playerSelection === "Scissors") {
            if (move === "Rock") {
                return("Loss. Rock beats scissors.")}
            else if (move === "Paper"){ 
                return("Win. Scissors beats paper.")
            }
            else {return("Tie.")}        
        }       
    }
}








