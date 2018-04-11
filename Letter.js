
// constructor function used to create letter objects
function Letter(character) {
  this.character = character;
  this.guessed = false;
}

// creates the toString() method and applies it to all programmer objects
Letter.prototype.toString = function() {
//  console.log("Character: " + this.character + "\nGuessed: " + this.guessed);
  if (this.guessed)
    return this.character;
  else
    return '_';
};

// creates the guessLetter() method and applies it to all programmer objects
Letter.prototype.guessLetter = function(choice) {
//  console.log("Character: " + this.character + "\nGuessed: " + this.guessed);
  if ( this.character == choice )
  {
    this.character = choice;
    this.guessed = true;
  };
  return this.guessed;
};

module.exports = Letter;
