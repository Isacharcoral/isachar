// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the input and message elements from the HTML
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    message.textContent = "Please enter a valid number!";
  } else if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100!";
  } else if (userGuess === randomNumber) {
    message.textContent = "Congratulations! You guessed the correct number!";
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try a higher number.";
  } else {
    message.textContent = "Too high! Try a lower number.";
  }

  guessInput.value = "";
  guessInput.focus();
}
