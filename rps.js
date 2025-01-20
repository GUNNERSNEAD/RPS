function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const result = choices[randomIndex];
    return result
}

function getUserChoice() {
    const userinput = prompt("Choose rock, paper, or scissors: "); 
    if (userinput === "rock" || userinput === "paper" || userinput === "scissors") {
        return userinput;
    }
    return "Invalid choice";
}
 let humanScore = 0;
 let computerScore = 0;

 function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) 
        return ("It's a tie");
    if (userChoice === "rock" && computerChoice === "scissors" ||
               userChoice === "scissors" && computerChoice === "paper" ||
               userChoice === "paper" && computerChoice === "rock") {
        return ("You win!");
    }
    return "You lose!";
  }

  function playGame() {
    const humanSelection = getUserChoice();
  const computerSelection = getComputerChoice();
  
  const result = playRound(humanSelection, computerSelection);
  if (result === "You win!") {
    humanScore=humanScore+1
  }
else if (result === "You lose!") {
    computerScore=computerScore+1
}
  console.log(result);
  }

  function playGames(){
    playGame()
    playGame()
    playGame()
    playGame()
    playGame()
    if (humanScore>computerScore){
    console.log("WINNER WINNER")
  }
  else if (humanScore<computerScore){
    console.log("COMPUTER WINS!!")
  }
}

playGames()




