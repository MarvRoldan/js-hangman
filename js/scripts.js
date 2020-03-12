var list = ["crossing", "organ", "past", "green", "insight"];
var randomWord = list[Math.floor(Math.random() * list.length)];
var letterCorrect = [];

start = () => {
  for (i = 0; i < randomWord.length; i++) {
    letterCorrect[i] = "__";
  }
  document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
  console.log(randomWord);
}

function letterCheck() {
    
    var letterGuess;
    var letterWrong = [];
    document.onkeyup = function(event) {
      letterGuess = event.key.toLowerCase();
      var found = false;
      for (i = 0; i < randomWord.length; i++) {
        if (letterGuess === randomWord[i]) {
          letterCorrect[i] = letterGuess;
          document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
          found = true;
        }
      }
      if (found) return; 
      
      if (letterWrong.indexOf(letterGuess) < 0) {
        letterWrong.push(letterGuess);
        document.getElementById("wrongGuess").innerHTML = letterWrong.join(" ");
      }
    }
  }

start();
letterCheck();