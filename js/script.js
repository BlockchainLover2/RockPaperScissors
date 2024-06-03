const possibleValues = ["rock","paper","scissor"]

let computerScore = 0
let playerScore = 0

let getRandomNumber = (first,second) => Math.floor(Math.random()*(second-first)+first)

let getComputerValue = ()=>possibleValues[getRandomNumber(0,possibleValues.length)];

let buttons = document.querySelectorAll("button");

let playerImage = document.querySelector("#humanAction")
let computerImage = document.querySelector("#computerAction")
let playerScoreText = document.querySelector("#player-score")
let computerScoreText = document.querySelector("#computer-score")



buttons.forEach(button =>{
    button.addEventListener("click" , (e)=>{
        let playerSelection;
        if(e.target.id==="rock"){
            playerImage.setAttribute("src","images/rock.jpg")
            playerImage.setAttribute("alt","rock")
            playerSelection = "rock"
        }
        if(e.target.id==="paper"){
            playerImage.setAttribute("src","images/paper.jpg")
            playerImage.setAttribute("alt","paper")
            playerSelection = "paper"
        }
        if(e.target.id==="scissor"){
            playerImage.setAttribute("src","images/scissor.jpg")
            playerImage.setAttribute("alt","scissor")
            playerSelection = "scissor"
        }
        playerImage.style.display="block"
        const computerSelection = getComputerValue();
        playRound(playerSelection,computerSelection)
    })
})


function playRound(humanChoice, computerChoice) {
    computerImage.setAttribute("src","images/"+computerChoice+".jpg")
    computerImage.style.display="block"
    if(humanChoice === computerChoice) {
        return
    }
    if((humanChoice === "rock" && computerChoice ==="scissor") ||
    (humanChoice === "paper" && computerChoice ==="rock") ||
        (humanChoice === "scissor" && computerChoice ==="paper")){
        playerScore++;
    }
    else
        computerScore++;

    updateScoreText(playerScore,computerScore)
    if(playerScore >= 5){
        prompt("You Won!!!")
        resetGame()
    }
    else if(computerScore >= 5){
        prompt("Game Over :(((")
        resetGame()
    }
}


function updateScoreText(player,computer) {
    playerScoreText.textContent = "Player Score: "+player;
    computerScoreText.textContent = "Computer Score: "+computer;

}


function resetGame(){
    computerImage.style.display="none"
    playerImage.style.display="none"
    computerImage.setAttribute("src","")
    playerImage.setAttribute("src","")
    playerScore = 0
    computerScore = 0
    updateScoreText(playerScore,computerScore)

}




