function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getUserChoice() {
    const userinput = prompt("Choose rock, paper, or scissors: "); 
    if (userinput === "rock" || userinput === "paper" || userinput === "scissors") {
        return userinput;
    }
    return "Invalid choice";
}
 const humanScore = 0;
 const computerScore = 0;

 function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
  }
  
  const humanSelection = gethumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  