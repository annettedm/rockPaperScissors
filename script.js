import { getElement, enable, disable } from "./modules/helpers.js";
import { makeComputerChoice } from "./modules/computerChoice.js"; 
import { decideWinner, showWinner } from "./modules/decideWinner.js";


let userScore = 0;
let compScore = 0;
let round = 0;

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



// --------------------------------------------------------------

const btnsContainer = document.querySelector("#btnsContainer");

btnsContainer.addEventListener("click", playGame);

function playGame(event) {
  if (round === 5) {
    btnsContainer.removeEventListener("click", playGame);
    // make all three buttons disabled 
    // element.setAttribute("disabled");
    // add text that the game is over
    // add a button to start a new rounds session
    // make actions to restart all the values 
  } else {
    playRound(event);
  }
}

function playRound(event) {
  const userChoice = event.target.id;
  const compChoice = makeComputerChoice();

  showRoundChoice(userChoice, compChoice);

  const winner = decideWinner(userChoice, compChoice);

  // updateScores(winner);
  // printScores();
  // compare results
  // tell the winner or tie
}

function showRoundChoice(userChoice, compChoice) {
  document.querySelector("#round-results").firstElementChild.textContent = `User choice is ${userChoice}`;
  document.querySelector("#round-results").lastElementChild.textContent = ` Computer choice is ${compChoice}`;
}
