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

// MAKE FUNCTION TO GET USER TO INPUT A LETTER.

function check ( guess ) {
    var rightGuesses = 0;
<<<<<<< HEAD

    for ( i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guess) {
            wordCharacters[i] = guess;
            rightGuesses++;
        }

        // CAN WRITE FUNCTION TO CHECK IF GUESS IS WRONG. ADD STRIKES HERE.
    }
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
=======
>>>>>>> 391989268dbd1bf16fffe8ca061cf0e19b7b78d7

    for ( i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guess) {
            wordCharacters[i] = guess;
            rightGuesses++;
        }

        // CAN WRITE FUNCTION TO CHECK IF GUESS IS WRONG. ADD STRIKES HERE.
    }
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