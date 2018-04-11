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
        if ( character != '"')
        {
            letter = new Letter(character);
            this.letters.push(letter);
        }
    }
    this.answered = false;    
  }
  
// creates the toString() method and applies it to all programmer objects
Word.prototype.toString = function() {
    let word = '';
    this.letters.forEach(element => {
        word += element.toString() + ' ';
    });
//    console.log("Word: " + word + "\nAnswered: " + this.answered);
    return word;
};

Word.prototype.isAnswered = function() {
    let word = '';
    this.answered = true; // Assume is is true
    this.letters.forEach(element => {
        if( !element.guessed )
        {
//            console.log('!isAnswered');
            this.answered = false;
            return this.answered;
        }
    });
//    if (this.answered)
//        console.log('isAnswered');

    return this.answered;
}

// creates the guessLetter() method and applies it to all programmer objects
Word.prototype.guessLetter = function(choice) {
    let foundLetter = false;
    let foundAllLetters = true; // Assume so until determined otherwise
 //   console.log("character: " + this.character + "\nGuessed: " + this.guessed);
    this.letters.forEach(element => {
        if (element.guessLetter(choice))
        {
            foundLetter = true;
            if( !foundLetter )
                foundAllLetters = false; 
        }
    });
//   console.log('Found A Letter: ' + foundLetter + ' Found All Letters: ' + foundAllLetters  );
    return foundAllLetters;
};

module.exports = Word;