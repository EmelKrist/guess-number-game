const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const button = document.querySelector("button");
const remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
let chance = 10;
let gameover = false;

/**
 * "Check" button click listener.
 */
button.addEventListener("click", () => {
  // check if game is over
  if (gameover) {
    window.location.reload();
    return;
  }
  // decrease number of chances
  chance--;
  remainChances.textContent = chance;
  // check if input value is correct, invalid or higher|lower than random number
  let inputValue = input.value;
  if (inputValue == randomNum) {
    setGuess("Congratulations!", "#48ae00");
    setGameOver();
    /* game will be lost without this line, if the input value is 
    correct but the number of chances is 0 (last chance victory) */
    return;
  } else if (inputValue > randomNum && inputValue < 100) {
    setGuess("Your guess is higher", "#32383e");
  } else if (inputValue < randomNum && inputValue > 0) {
    setGuess("Your guess is lower", "#32383e");
  } else {
    setGuess("Your number is invalid", "#DE0611");
  }
  // check if user have no chances and game is lost
  if (chance == 0) {
    inputValue = "";
    setGuess("You lost the game", "#DE0611");
    setGameOver();
  }
});

/**
 * Fucntion to set the guess.
 * @param {String} text
 * @param {String} colorCode
 */
function setGuess(text, colorCode) {
  guess.textContent = text;
  guess.style.color = colorCode;
}

/**
 * Function to set the game over.
 * @param {String} text
 */
function setGameOver(text) {
  gameover = true;
  input.disabled = true;
  button.textContent = "Replay";
}
