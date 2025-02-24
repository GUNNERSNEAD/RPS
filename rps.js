let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return "It's a tie";
	}
	if (
		(userChoice === "rock" && computerChoice === "scissors") ||
		(userChoice === "scissors" && computerChoice === "paper") ||
		(userChoice === "paper" && computerChoice === "rock")
	) {
		humanScore++;
		return "You win!";
	}
	computerScore++;
	return "You lose!";
}
function updateScore() {
	document.getElementById("score").textContent =
		`Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
	if (humanScore === 5) {
		document.getElementById("result").textContent = "You are the winner!";
		disableButtons();
	} else if (computerScore === 5) {
		document.getElementById("result").textContent = "Computer wins!";
		disableButtons();
	}
}

function disableButtons() {
	document.getElementById("rock").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => {
	const result = playRound("rock", getComputerChoice());
	document.getElementById("result").textContent = result;
	updateScore();
	checkWinner();
});

document.getElementById("paper").addEventListener("click", () => {
	const result = playRound("paper", getComputerChoice());
	document.getElementById("result").textContent = result;
	updateScore();
	checkWinner();
});

document.getElementById("scissors").addEventListener("click", () => {
	const result = playRound("scissors", getComputerChoice());
	document.getElementById("result").textContent = result;
	updateScore();
	checkWinner();
});
