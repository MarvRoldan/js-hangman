var randomWords = [ "fastidious", "cake", "available", "conflict", "helmet" ]; 
var wordToGuess = randomWords[ Math.floor(Math.random()*randomWords.length) ];
var wordCharacters = [];

console.log( "Enter hangMan(); to start!" );

function hangMan() {
    for( i = 0; i < wordToGuess.length; i++ ) {
        wordCharacters[i] = "_";
    }
    console.log( wordCharacters );
}

function storeLetter( guess ) {
    var inputtedGuess = false;

    for ( i = 0; i < wordToGuess.length; i++ ) {
        if( guess === wordToGuess[i] ) 
        {
            inputtedGuess = true;
        }
        if (inputtedGuess === false) {
            wordToGuess.push(guess);
        }
    }
}
