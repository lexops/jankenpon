function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

let playerWins = 0
let computerWins = 0

const results = document.querySelector("#results")

function playRound(playerSelection) {
  const computerSelection = getComputerChoice()

  if (playerSelection === computerSelection) {
    results.textContent = `Computer chose ${computerSelection}. It's a tie!`
    return
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper') {

    playerWins++
    results.textContent = `Computer chose ${computerSelection}. You win!`
    return
  }

  computerWins++
  results.textContent = `Computer chose ${computerSelection}. You lose!`
  return
}

const scoreBoard = document.querySelector("#score")

function updateScoreBoard() {
  scoreBoard.textContent = `You ${playerWins} x ${computerWins} Computer`
}

function checkForGameWinner() {
  if (playerWins === 5 || computerWins === 5) {
    const winner = (playerWins > computerWins) ? "You" : "Computer"
    results.innerHTML += `<br>Game over! ${winner} won!`
    playerWins = 0
    computerWins = 0
  }
}

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id)
    updateScoreBoard()
    checkForGameWinner()
  })
})

