
// constructor function used to create letter objects
function Letter(character,hidden) {
  this.character = character;
  this.placeholder = hidden;
  this.guessed = !hidden;
}

// creates the toString() method and applies it to all programmer objects
Letter.prototype.toString = function() {
  if (this.guessed)
    return this.character;
  else if (this.placeholder)
    return '_';
  else
    return '';
};

Letter.prototype.setHidden = function(hidden) { this.guessed = !hidden; };
Letter.prototype.isVisable = function() { return this.guessed; };

// creates the guessLetter() method and applies it to all programmer objects
Letter.prototype.guessLetter = function(choice) {
  if (( this.character == choice )
  ||  ( this.character == choice.toUpperCase())
  ||  ( this.character == choice.toLowerCase()))
  {
    this.guessed = true;
  };
  return this.guessed;
};

Letter.prototype.isAnswered = function() {
  return this.guessed;
}

module.exports = Letter;
