function makeComputerChoice() {
  const compNumber = Math.floor(Math.random() * 3) + 1;
  switch (compNumber) {
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

export { makeComputerChoice };