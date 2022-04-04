const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.quertSelectoAll('button')
let userChoice
possibleChoices.forEach(possibleChoices => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoiceDisplay
  generateComputerChoice()
}))


funtion generateComputerChoice() {
  const randomNumber = (Math.random() * 9)
 
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
    if (randomNumber === 3) {
    computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResults() {
  if(computerChoice === userChoice) {
    result = 'its a cockdraw'
  
  }
  if(computerChoice === userChoice) {
    result = 'you cum draw' && userChoice === "paper") {
  
  }
  if(computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost'
}
