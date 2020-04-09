// array of words to guess
const words = ["Piccolo", "Gohan", "Goku", "Bulma","Vegeta", "Trunks", "Goten", "Krillin", "Tien", "Yamcha"]
// word chosen at random
let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];

// blank underscore to be filled by correct letters and wrong guesses
let blank = [];
let wrongGuesses = [];
let wins = 0;

console.log(randomWord);
// make underscore for each letter of randomWord in index.html
let underscores = function()  {
    
    
    for(let i = 0; i < randomWord.length; i++) {
        blank.push('_');
    }
    return blank;
}
// console.log(underscores());
underscores();
// listen for keypress
document.addEventListener('keypress', (event) => {
    let keyNumber = event.keyCode;
    let keyLetter = String.fromCharCode(keyNumber);
    // if letter matches, put letter into blank array
    for (i=0; i<randomWord.length; i++){
        // check for correct answers, replace underscore with correct letter
        if (keyLetter.toLowerCase() === randomWord.toLowerCase().charAt(i)) {
            blank.splice(i, 1,  keyLetter);
            console.log(blank);
        } 
    //tried to make else statement for incorrect answers but then several of the same letter got pushed to wrongGuesses
    };
    // check for incorrect answers using indexOf which === -1 when no matches are found
    if (randomWord.toLowerCase().indexOf(keyLetter.toLowerCase()) === -1) {
        wrongGuesses.push(keyLetter);
        console.log(wrongGuesses)
    };
    //when the player guesses the whole word correctly
    if (blank.join('') === randomWord.toLowerCase()) {
        console.log("You Win!")
        wins = wins + 1;
        console.log(wins);
        // output the correct answer with first letter capitalized
        console.log(blank.join('').charAt(0).toUpperCase() + blank.slice(1).join(''));
    }
});




