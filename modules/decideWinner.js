import { capitalize } from "./helpers"; 

function decideWinner(userChoice, compChoice) {
  const winnerResults = [];

  if ((userChoice == "rock" && compChoice == "rock")
    || (userChoice == "paper" && compChoice == "paper")
    || (userChoice == "scissors" && compChoice == "scissors")) {
    winnerResults.push("tie", userChoice);
  } else if ((userChoice == "rock" && compChoice == "scissors")
    || (userChoice == "scissors" && compChoice == "paper")
    || userChoice == "paper" && compChoice == "rock") {
    console.log(`User wins. ${capitalize(userChoice)} ${userChoice == "scissors" ? "beat" : "beats"} ${compChoice}.`);
    winnerResults.push("User", userChoice, compChoice);
  } else {
    console.log(`Computer wins. ${capitalize(compChoice)} ${compChoice == "scissors" ? "beat" : "beats"} ${userChoice}.`);
    winnerResults.push("computer", userChoice, compChoice);
  }

  return winnerResults;
}

function showWinner(results) {
  if (results[0] === "tie") {
    return `It's a tie. User and computer choice is ${results[1]}`;
  } else if (results[0] === "user") {
    return `User wins. ${capitalize(results[1])} ${results[1] === "scissors" ? "beat" : "beats"} ${results[2]}`;
  } else {
    return `Computer wins. ${capitalize(results[2])} ${results[2] === "scissors" ? "beat" : "beats"} ${results[1]}`;
  }
}



export { decideWinner, showWinner };