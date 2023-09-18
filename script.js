const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements from the HTML
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.querySelector('.message');
const attempts = document.querySelector('.attempts');

let numberOfAttempts = 0;
let gameOver = false;

// Function to display a message
function displayMessage(msg) {
    message.textContent = msg;
}

// Function to handle the user's guess
function checkGuess() {
    if (gameOver) return;

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        displayMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    numberOfAttempts++;

    if (userGuess === randomNumber) {
        displayMessage(`Correct guess! It took you ${numberOfAttempts} trials.`);
        gameOver = true;
    } else if (userGuess < randomNumber) {
        displayMessage('Your guess is too low. Try again.');
    } else {
        displayMessage('Your guess is too high. Try again.');
    }

    guessInput.value = '';
    guessInput.focus();
}

// Event listener for the "Submit Guess" button
guessButton.addEventListener('click', checkGuess);

// Event listener for pressing "Enter" key in the input field
guessInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Initial focus on the input field
guessInput.focus();
