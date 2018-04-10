// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./Word");

// constructor function used to create programmers objects
function Game() {
  this.word = new Word('TestWord');
  this.guessed = false;
  console.log(this.word);
};

Game.prototype.playRound = function()
{
  console.log('Lets Play');
  inquirer.prompt([
  {
       name: "letter",
       message: "Guess one of the letters"
  }]).then(function(answer)
  {     
       this.guessed = this.word.guessLetter(letter);
       this.word.toString(); // Primnt Results
       if (!this.guessed)    // Keep going if not ugueesed completelly
            this.playRound();
  })
  console.log('Done playing');
};

let hangman = new Game();
hangman.playRound();
