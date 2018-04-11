// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./Word");
var gameWord = null;
var guessedWord = false;

// constructor function used to create programmers objects
var createGame = function() {
  gameWord = new Word('TestWord');
  guessedWord = false;
//  console.log(gameWord);
  console.log('Lets Play');
  console.log( '\n' + gameWord.toString() + '\n');
  playGame(0); // Start game at round 0
};

function playGame(turn) 
{
  if ( !gameWord.isAnswered() )
  {
    inquirer.prompt([
    {
       name: "letter",
       message: "Guess one of the letters"
    }]).then(function(answer)
    {     
       guessedWord = gameWord.guessLetter(answer.letter);
       console.log( '\n' + gameWord.toString() + '\n' ); // Print Results
       if (!gameWord.isAnswered()) // Keep going if not ugueesed completelly
            playGame(turn+1); // Play it again Sam....
       else
            console.log( '\n\nCongratulations!!!\n\n' );
    })
//    console.log('\nDone playing');
  }
};

// Kick it off
createGame();
