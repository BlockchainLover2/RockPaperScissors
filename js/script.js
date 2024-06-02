const possibleValues = ["rock","paper","scissor"]

let computerScore = 0
let playerScore = 0

let getRandomNumber = (first,second) => Math.floor(Math.random()*(second-first)+first)

let getComputerValue = ()=>possibleValues[getRandomNumber(0,possibleValues.length)];

let getHumanValue = () => prompt("Type Action (Rock, Paper, Scissor)")


function playRound(humanChoice, computerChoice) {
    const newHumanChoice = humanChoice.toString().toLowerCase()
    const newComputerChoice = computerChoice.toString().toLowerCase()
    const values = [newHumanChoice,newComputerChoice]
    if(!possibleValues.includes(newComputerChoice) || !possibleValues.includes(newHumanChoice)){
        humanSelection = prompt("Please type correctly")
        playRound(humanSelection,computerChoice)
        return;
    }
    if(newHumanChoice === computerChoice)
        prompt("Draw")
    else
        if(values.includes("rock")){
            if(values.includes("scissor"))
                prompt("Rock Wins")
            else if(values.includes("paper"))
                prompt("Paper Wins")
        }
    else if(values.includes("paper")){
        if(values.includes("scissor"))
            prompt("Scissor Wins")
        else if(values.includes("rock"))
            prompt("Paper Wins")
    }
    else if(values.includes("scissor")){
        if(values.includes("rock"))
            prompt("Rock Wins")
        else if(values.includes("paper"))
            prompt("Scissor Wins")
    }
}

let humanSelection = getHumanValue();
const computerSelection = getComputerValue();


playRound(humanSelection, computerSelection);


