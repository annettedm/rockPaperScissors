function updateRoundNumber(round,) {
  round++;
  return round;
}

function showRound(round, maxScore) {
  const roundP = document.querySelector("#round p");
  if (isMaxRound(round, maxScore)) return;
  else roundP.textContent = `Round ${round + 1}`;
}

function isMaxRound(round, maxScore) {
  if (round === maxScore) return true;
}

function showRoundChoice(userChoice, compChoice) {
  if (userChoice == "" && compChoice == "") {
    document.querySelector("#round-results").firstElementChild.textContent = `User choice:`;
    document.querySelector("#round-results").lastElementChild.textContent = ` Computer choice:`;
  } else {
    document.querySelector("#round-results").firstElementChild.textContent = `User choice is ${userChoice}.`;
    document.querySelector("#round-results").lastElementChild.textContent = ` Computer choice is ${compChoice}.`;  
  }
  
}

function updateScores(roundResult, userScore, compScore) {
  switch (roundResult[0]) {
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
  return [userScore, compScore];
}

function printScores(userScore, compScore) {
  document.querySelector("#human-score span").textContent = `${userScore}`;

  document.querySelector("#computer-score span").textContent = `${compScore}`;
}

export { updateRoundNumber, showRoundChoice, updateScores, printScores, showRound };