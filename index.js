// dependency for inquirer npm package
let inquirer = require("inquirer");
let Word = require("./Word");

// variables
let gameWord = null;
let guessedLetter = false;
let availableLetters = "abcdefghijklmnopqrstuvwxyz";
let wrongGuesses = 0;
const MAX_GUESSES = 10;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";


// constructor function used to create the game
var createGame = function() {
  gameWord = new Word(pickAWord(), true);
  guessedWord = false;
  lettersAvailable = new Word(ALPHABET, false);
  console.log('\nLets Play Retro Olympic Man\n');
  console.log( '\nThe Word to Guess: ' + gameWord.toString() + '\n' ); // Print the word
  console.log( '\nAvailable Letters: ' + lettersAvailable.toString() + '\n' );

  playGame(0); // Start game at round 0
};

function playGame(turn) 
{
  if ( !gameWord.isAnswered() )
  {
    inquirer.prompt([
    {
       name: "letter",
       message: "Guess a letter"
    }]).then(function(answer)
    {     
       guessedLetter = gameWord.guessLetter(answer.letter);
       if (!guessedLetter)
       {
          wrongGuesses += 1;
          console.log("\nWrong guess, you have " + (MAX_GUESSES - wrongGuesses) + " guesses remaining.");
       }
       lettersAvailable.removeLetter(answer.letter);
       console.log( '\nThe Word to Guess: ' + gameWord.toString() + '\n' ); // Print Results
       console.log( '\nAvailable Letters: ' + lettersAvailable.toString() + '\n' );
       if ((!gameWord.isAnswered()) // Keep going if not ugueesed completelly
       && ( wrongGuesses < MAX_GUESSES))
         playGame(turn+1); // Play it again Sam....
       else if (wrongGuesses >= MAX_GUESSES)
         console.log( '\n\nSorry You Lost...\n\nDone playing Retro Olympic Man.\n\n' );
        else
         console.log( '\n\nCongratulations!!!\n\nDone playing Retro Olympic Man.\n\n' );
    })
  }
};

// Hangman variables
var theWords = ["BOXING", "GYMNNASTICS","SWIMMING","DECATHLON","MARATHON","SAILING","MEDAL","BRASIL", "OLYMPIC" ];
var theWord =    "";
 
function pickAWord( ) {
  var randnum= Math.floor((Math.random()) * theWords.length + 1);
  var theWord = theWords[randnum];
  return theWord;
}

// Kick it off
createGame();
