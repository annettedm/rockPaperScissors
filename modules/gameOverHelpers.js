function showGameOverMessage() {
  const gameOverEl = document.querySelector("#game-over");

  gameOverEl.textContent = "The game is over. To start a new game, click a button.";
  gameOverEl.classList.add("game-over");
}

function showGameWinner(userScore, compScore) {
  const gameWinner = document.querySelector("#game-winner");

  const winner = decideGameWinner(userScore, compScore);
  if (winner === "tie") gameWinner.textContent = "It's a tie.";
  else if (winner === "user") gameWinner.textContent = `Human wins with the score ${userScore}.`;
  else gameWinner.textContent = `Computer wins with the score ${compScore}.`;
  gameWinner.classList.add("game-over");

}

function decideGameWinner(userScore, compScore) {
  if (userScore === compScore) return "tie";
  if (userScore > compScore) return "user";
  return "computer";
}

function removeGameOverMessage() {
  const gameOverEl = document.querySelector("#game-over");
  gameOverEl.textContent = "";
}

function removeGameWinner() {
  const gameWinner = document.querySelector("#game-winner");
  gameWinner.textContent = "";
}



export { showGameOverMessage, showGameWinner, removeGameOverMessage, removeGameWinner };