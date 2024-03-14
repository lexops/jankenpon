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

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Computer chose ${computerSelection}.\nIt's a tie!`
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper') {

    return `Computer chose ${computerSelection}.\nYou win!`
  }

  return `Computer chose ${computerSelection}.\nYou lose!`
}

const playerSelection = "pApEr".toLowerCase()
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))
