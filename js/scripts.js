var guess; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 0; //counts correct letters
var lives; //counts users lives

var guessWords = ["crossing", "organ", "past", "green", "insight"];


var randomWord = guessWords[Math.floor(Math.random() * guessWords.length)];

//choosen word is replaced with
function start() {
  for (i = 0; i < randomWord.length; i++) {
    letters[i] = "__";
  }

  document.getElementById("hidden").innerHTML = letters.join(" ");
  console.log(randomWord);
}

function checkLetter() {
  document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    var found = false; //lets use bool to check if a letter was found
    for (i = 0; i < randomWord.length; i++) {
      if (guess === randomWord[i]) {
        letters[i] = guess;
        document.getElementById("hidden").innerHTML = letters.join(" ");
        found = true;
      }
    }
    //now all letters have been checked, was any found
    if (found) return; //if yes return
    
    //wrong, lets also see if 
    //it's not already logged, if not add it
    //you could also then use  wrongLetters.length
    //for working out if gueses area all used up.
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
    }
  }
}

start();
checkLetter();