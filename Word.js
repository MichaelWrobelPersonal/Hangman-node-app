// Pull in letters
let Letter = require("./Letter");

// constructor function used to create letter objects
function Word(characters) {
    this.letters = [];
    let letter = "_";
    let word = "";
    word = JSON.stringify(characters);
    for(i=0;i<word.length;i++)
    {
        let character = word.charAt(i);
        letter = new Letter(character);
        this.letters.push(letter);
    }
    this.guessed = false;    
  }
  
// creates the toString() method and applies it to all programmer objects
Word.prototype.toString = function() {
    let word = '';
    this.letters.forEach(element => {
        word += element.toString();
    });
    console.log("Word: " + word + "\nGuessed: " + this.guessed);
    return word;
};
  
// creates the guessLetter() method and applies it to all programmer objects
Word.prototype.guessLetter = function(choice) {
    let foundLetter = false;
    let foundAllLetters = true; // Assume so until determined otherwise
    console.log("character: " + this.character + "\nGuessed: " + this.guessed);
    this.letters.forEach(element => {
        if (element.guessLetter(choice))
        {
            foundLetter = true;
            if( !foundLetter )
                foundAllLetters = false; 
        }
    });
    console.log('Found A Letter: ' + foundLetter + ' Found All Letters: ' + foundAllLetters  );
    return foundAllLetters;
};

module.exports = Word;