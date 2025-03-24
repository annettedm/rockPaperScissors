
    // Plan or pseudocode your solution.
    // Write the code.
// Test your code to make sure it works.
console.log("inside");
   
// rock paper scissors

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
// 3. results are compared, the winner or ties are denoted
function compareResults() {
  const userChoice = makeUserChoice();
  const compChoice = makeComputerChoice();

  console.log(`user choice is ${userChoice}`);
  console.log(`computer choice is ${compChoice}`);

  console.log(decideWinner(userChoice, compChoice));
  // compare results
  // tell the winner or tie
}

function decideWinner(userChoice, compChoice) {
  if ((userChoice == "rock" && compChoice == "rock")
    || (userChoice == "paper" && compChoice == "paper")
    || (userChoice == "scissors" && compChoice == "scissors")) {
    return "It's a tie";
  } else if ((userChoice == "rock" && compChoice == "scissors")
    || (userChoice == "scissors" && compChoice == "paper")
    || userChoice == "paper" && compChoice == "rock") {
    return "User wins";
  } else {
    return "Computer wins";
  }
}

// function that starts the game 
compareResults();