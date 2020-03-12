var list = ["crossing", "organ", "past", "green", "insight"];
var randomWord = list[Math.floor(Math.random() * list.length)];
var letterCorrect = [];

function start() {
  for (i = 0; i < randomWord.length; i++) {
    letterCorrect[i] = "__";
  }
  document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
  console.log(randomWord);
}