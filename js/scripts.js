var randomWords = [ "fastidious", "cake", "available", "conflict", "helmet" ]; 
var wordToGuess = randomWords[Math.floor(Math.random()*randomWords.length)];
var wordCharacters = [];

console.log("Type hangMan(); to start!");

function hangMan() {
    for( var i = 0; i < wordToGuess.length; i++ ) {
        wordCharacters[i] = "_";
    }
    console.log(wordCharacters);
}


