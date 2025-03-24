  
let userScore = 0;
let compScore = 0;

function makeUserChoice() {
  const userChoice = prompt("Select rock, paper or scissors").toLowerCase();
  //console.log(`use choice is ${userChoice}`);
  return userChoice;
}

function makeComputerChoice() {
  const compNumber = Math.floor(Math.random() * 3) + 1;
  //console.log(compNumber);
  switch (compNumber) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function capitalize(word) {
  const firstLetter = word[0].toUpperCase(); 
  word = firstLetter + word.slice(1);
  return word;
}

function decideWinner(userChoice, compChoice) {
  if ((userChoice == "rock" && compChoice == "rock")
    || (userChoice == "paper" && compChoice == "paper")
    || (userChoice == "scissors" && compChoice == "scissors")) {
    console.log("It's a tie.");
    return "tie";
  } else if ((userChoice == "rock" && compChoice == "scissors")
    || (userChoice == "scissors" && compChoice == "paper")
    || userChoice == "paper" && compChoice == "rock") {
    console.log(`User wins. ${capitalize(userChoice)} ${userChoice == "scissors" ? "beat" : "beats"} ${compChoice}.`);
    return "user";
  } else {
    console.log(`Computer wins. ${capitalize(compChoice)} ${compChoice == "scissors" ? "beat" : "beats"} ${userChoice}.`);
    return "computer";
  }
}

function updateScores(roundResult) {
  switch (roundResult) {
    case "tie":
      userScore++;
      compScore++;
      break;
    case "user":
      userScore++;
      break;
    case "computer":
      compScore++;
      break;
  }
}

function printScores() {
  console.log("----")
  console.log(`User score: ${userScore}.`);
  console.log(`Computer score: ${compScore}.`);
}
// 3. results are compared, the winner or ties are denoted
function playRound() {
  const userChoice = makeUserChoice();
  const compChoice = makeComputerChoice();

  console.log(`User choice is ${userChoice}.`);
  console.log(`Computer choice is ${compChoice}.`);

  const winner = decideWinner(userChoice, compChoice);

  updateScores(winner);
  printScores();
  // compare results
  // tell the winner or tie
}


function playGame() {
  console.log("Let's start a game.")

  for (let i = 1; i <= 5; i++) {
    console.log('------');
    console.log(`Round ${i}`);
    playRound();
    console.log('------');
  }

  console.log("The game is over.");
}

// play entire game with 5 rounds 

// function that starts the game 
playGame();