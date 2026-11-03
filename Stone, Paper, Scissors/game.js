
const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");
const movesDisplay = document.getElementById("moves");
const resetButton = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;
let rounds = 0;

const maxRounds = 10;
const options = ["stone", "paper", "scissor"];

choices.forEach((button) => {
    button.addEventListener("click", () => {

        if (rounds >= maxRounds) {
            return;
        }

        const userChoice = button.dataset.choice;
        const computerChoice =
            options[Math.floor(Math.random() * options.length)];

        rounds++;

        movesDisplay.textContent =
           "Round" + rounds + "/10 | You:" + userChoice + "|computer:" + computerChoice;

        if (userChoice === computerChoice) {
            resultDisplay.textContent = "It's a Draw! 🤭";
        }

        else if (
            (userChoice === "stone" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "stone") ||
            (userChoice === "scissor" && computerChoice === "paper")
        ) {
            userScore++;
            resultDisplay.textContent = "You Win! 🎉";
        }

        else {
            computerScore++;
            resultDisplay.textContent = "Computer Wins! 🤖";
        }

        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;

        if (rounds === maxRounds) {
            
            if (userScore > computerScore) {
                resultDisplay.textContent = "Game Over! You Win! 🏆";
            }
            else if (computerScore > userScore) {
                resultDisplay.textContent = "Game Over! Computer Wins! 👾";
            } 
            else {
                resultDisplay.textContent = "Game Over! It's a Draw! 🤝";
            }

            movesDisplay.textContent += " | 10 Rounds Completed";
        }
    });
});

resetButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    rounds = 0;

    userScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    resultDisplay.textContent = "Choose your move!";
    movesDisplay.textContent = "You: - | Computer: -";
});
