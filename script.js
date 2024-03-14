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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ["tie", `Computer chose ${computerSelection}.\nIt's a tie!`]
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper') {

    return ["player", `Computer chose ${computerSelection}.\nYou win!`]
  }

  return ["computer", `Computer chose ${computerSelection}.\nYou lose!`]
}

(function playGame(playRound) {
  let playerWins = 0
  let computerWins = 0

  do {
    const playerSelection = prompt("Choose either rock, paper or scissors").toLowerCase()

    const computerSelection = getComputerChoice()

    const winner = playRound(playerSelection, computerSelection)[0]
    const roundMessage = playRound(playerSelection, computerSelection)[1]

    winner === "player" ? playerWins++ : winner === "computer" ? computerWins++ : null // pass

    alert(roundMessage + "\n" + `\nScore:\n\tComputer: ${computerWins}\n\tYou: ${playerWins}`)

  } while (playerWins < 5 && computerWins < 5)

  const gameWinner = (playerWins > computerWins) ? "You" : "Computer"
  alert(`GAME OVER!\n${gameWinner} won!\n\nFinal Score:\n\tComputer: ${computerWins}\n\tYou: ${playerWins}`)
})(playRound);

