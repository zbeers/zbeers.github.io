let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
function checkGuess() {
  attempts--;
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;

  while (attempts > 0) {
    if (guess === randomNumber) {
      feedbackElement.textContent = "Congratulations! You guessed the number!";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.textContent = "Too low! Try again.";
    } else {
      feedbackElement.textContent = "Too high! Try again.";
     }
  }
  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.textContent = "Game over! The number was " + randomNumber;
  }
}
