import { makeComputerChoice } from "./modules/computerChoice.js"; 
import { decideWinner, showWinner, showUserCompChoice } from "./modules/decideWinner.js";
import { updateRoundNumber, showRoundChoice, updateScores, printScores, showRound } from "./modules/roundHelpers.js";
import { disableBtns, enableBtns } from "./modules/btnsHelpers.js";
import { showGameOverMessage, showGameWinner, removeGameOverMessage, removeGameWinner } from "./modules/gameOverHelpers.js";

let userScore = 0;
let compScore = 0;
let round = 0;
const maxScore = 5;


const btnsContainer = document.querySelector("#btnsContainer");

btnsContainer.addEventListener("click", playGame);

function playGame(event) {
  playRound(event);

  if (userScore === maxScore || compScore === maxScore) {
    btnsContainer.removeEventListener("click", playGame);
    gameOver();
  }
}

function playRound(event) {
  const userChoice = event.target.id;
  const compChoice = makeComputerChoice();

  round = updateRoundNumber(round, maxScore);

  let wording = showWinner(decideWinner(userChoice, compChoice));
  showUserCompChoice(wording);

  [userScore, compScore] = updateScores(decideWinner(userChoice, compChoice), userScore, compScore);
  showRound(round, maxScore);
  showRoundChoice(userChoice, compChoice);
  printScores(userScore, compScore);
}

function gameOver() {
  disableBtns();

  showGameOverMessage();
  showGameWinner(userScore, compScore);

  showStartGameBtn();
}

function showStartGameBtn() {
  const btnStart = document.createElement("button");
  btnStart.textContent = "Start a new game";
  btnStart.className = "btn btn-dark";

  const btnContainer = document.querySelector("#round");
  btnContainer.appendChild(btnStart);

  btnStart.addEventListener("click", startGame);
}

function startGame() {
  userScore = 0;
  compScore = 0;
  round = 0;
  showRound(round);
  printScores(userScore, compScore);

  showUserCompChoice("");
  showRoundChoice("", "");

  document.querySelector("#round button").remove();

  enableBtns();
  removeGameOverMessage();
  removeGameWinner();

  btnsContainer.addEventListener("click", playGame);
}




