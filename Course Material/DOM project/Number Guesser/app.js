/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game Values
let min = 1,
  max = 10;
winningNumber = getRandomNumb(min, max);
guessesLeft = 3;

//UI element
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
// click doesnt work
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  //Validate Our Input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a number between ${min}, and ${max}`, "red");
  }
  //Check if won

  if (guess === winningNumber) {
    gameOver(true, `${winningNumber} is correct, YOU WIN`);
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost, the correct number was ${winningNumber}`
      );
    } else {
      //Game continues - answer wrong

      //Change border color
      guessInput.style.borderColor = "orange";
      guessInput.value = "";
      //informing the user that the answer is wrong
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left`,
        "orange"
      );
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color = won === true ? "green" : "red";
  // Disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //Set message
  setMessage(msg, color);

  //Play Again?

  guessBtn.value = "Play Again";
  guessBtn.className = "play-again";
}

function getRandomNumb(min, max) {
  return Math.floor(Math.random(max - min + 1) + min);
}
