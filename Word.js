// Pull in letters
let Letter = require("./Letter");

// constructor function used to create letter objects
function Word(characters, placeholder) {
    this.letters = [];
    this.placeholder = placeholder;
    let letter = "_";
    let word = "";
    word = characters.toString();
    for(i=0; i < word.length ;i++)
    {
        let character = word.charAt(i);
        if ( character != '"')
        {
            letter = new Letter(character,this.placeholder);
            this.letters.push(letter);
        }
    }
    this.answered = false;
  }
  
// creates the toString() method and applies it to all programmer objects
Word.prototype.toString = function() {
    let word = '';
    this.letters.forEach(letter => {
        word += ((letter.isVisable() || this.placeholder) ? letter.toString() : '')
                                     + (this.placeholder  ? ' ' : '');
    });
    return word;
}

Word.prototype.removeLetter = function(character) {
    this.letters.forEach(letter => {
        if (character == letter.toString() )
        {
            letter.setHidden(true);
        }
    });
}

Word.prototype.isAnswered = function() {
    let word = '';
    this.answered = true; // Assume is is true
    this.letters.forEach(letter => {
        if( !letter.isAnswered() )
        {
            this.answered = false;
            return this.answered;
        }
    });

    return this.answered;
}
Word.prototype.setAnswered = function(value) { this.answered = value; }

Word.prototype.guessLetter = function(choice) {
    let foundLetter = false;
    this.letters.forEach(letter => {
        if (!letter.isAnswered())
        {
            if (letter.guessLetter(choice))
            {
                foundLetter = true;
                return foundLetter; 
            }
        }
    });
    return foundLetter;
};

module.exports = Word;