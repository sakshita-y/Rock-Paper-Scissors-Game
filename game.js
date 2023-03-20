const computer = document.getElementById('computer-choice')
const player = document.getElementById('player-choice')
const outcome = document.getElementById('outcome')
const Score = document.getElementById('score')

// chooses all possible choices for game
const choices = document.querySelectorAll('button')

let playerChoice
let computerChoice
let result
let playerScore = 0
let computerScore = 0
let score

choices.forEach(choice => choice.addEventListener('click', (e) => {
   //player game
    playerChoice = e.target.id
    player.innerHTML = playerChoice

    //conputer game
    showComputerChoice()

    //result
    showOutcome()

    //score
    showScore()


}))

function showComputerChoice() {
    //index of 0,1,2 total - 3 choices
    const randomNumber = Math.floor(Math.random() * choices.length)
   
    //rock choice
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }

    //paper choice
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }

    //scissors choice
    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computer.innerHTML = computerChoice
}

function showOutcome() {
 if(computerChoice === playerChoice) {
     result = "its a draw"
     
 }

if(computerChoice === "rock" && playerChoice === "paper") {
    result = "you win!"
    playerScore += 1
    
}

if(computerChoice === "rock" && playerChoice === "scissors") {
    result = "you lost!"
    computerScore += 1
    
}

if(computerChoice === "paper" && playerChoice === "scissors") {
    result = "you win!"
    playerScore += 1
    
}

if(computerChoice === "paper" && playerChoice === "rock") {
    result = "you lost!"
    computerScore += 1
    
}

if(computerChoice === "scissors" && playerChoice === "paper") {
    result = "you lost!"
    computerScore += 1
    
}

if(computerChoice === "scissors" && playerChoice === "rock") {
    result = "you win!"
    playerScore += 1
    
}

console.log("playerScore: " + playerScore)
console.log("computerScore: " + computerScore)

outcome.innerHTML = result

}

function showScore() {
    if(computerScore === 3) {
        score = "computer wins!"
    }
    if(playerScore === 3) {
        score = "player wins!"
    }
    if(playerScore ===  3 && computerScore === 3) {
        score = "score is tied!"
    }

    if(playerScore < 3 && computerScore < 3) {
        score = "Keep going!"
    }

    Score.innerHTML = score


}


