const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput
} else {
  console.log('please input only rock, paper or scissors');
 }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice == 'paper') {
      return 'sorry, computer won';
    } else {
      return 'congratulations you won!';
    }
  }

 if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "sorry the computer won";
    } else {
      return "congratulations you won";
    }
  }


  if (userChoice === 'scissors') {
  if (userChoice === 'rock') {
    return "sorry the computer won";
  } else {
    return "well done you won";
  }
 }
};

const playGame = () => {
const userChoice = getUserChoice('paper');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};

playGame()



 


