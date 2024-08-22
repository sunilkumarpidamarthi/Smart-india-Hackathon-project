const puzzleContainer = document.getElementById("puzzle-container");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("check");
const resultText = document.getElementById("result");
const nextButton = document.getElementById("next");

const stateNames = [
    "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHHATTISGARH",
    "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JHARKHAND", "KARNATAKA",
    "KERALA", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM",
    "NAGALAND", "ODISHA", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU",
    "TELANGANA", "TRIPURA", "UTTARAKHAND", "UTTAR PRADESH", "WEST BENGAL"
];

let currentWord = "";
let scrambledWord = "";

// Function to shuffle the characters of a word
function shuffleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

// Function to start a new puzzle
function startNewPuzzle() {
    const randomIndex = Math.floor(Math.random() * stateNames.length);
    currentWord = stateNames[randomIndex];
    scrambledWord = shuffleWord(currentWord.toUpperCase());
    puzzleContainer.textContent = scrambledWord;
    resultText.textContent = "";
    answerInput.value = "";
}

// Event listener for the "Check" button
checkButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.toUpperCase();
    if (userAnswer === currentWord) {
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Incorrect. Try again.";
    }
});

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    startNewPuzzle();
});

// Initialize the game
startNewPuzzle();
