// Variables----------

// array of words to guess
const words = ["Piccolo", "Gohan", "Goku", "Bulma","Vegeta", "Trunks", "Goten", "Krillin", "Tien", "Yamcha"]
// word chosen at random
let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];
console.log(randomWord);

// blank underscore to be filled by correct letters and wrong guesses
let blank = [];
let wrongGuesses = [];
let wins = 0;

// dragon ball images array
let dragonBallImages = [document.getElementById('oneStarBall'), document.getElementById('twoStarBall'), document.getElementById('threeStarBall'), document.getElementById('fourStarBall'), document.getElementById('fiveStarBall'), document.getElementById('sixStarBall'), document.getElementById('sevenStarBall'), ]; 



// Functions----------

// make underscore for each letter of randomWord in index.html
let underscores = function()  {
    
    
    for(let i = 0; i < randomWord.length; i++) {
        blank.push('_');
    }
    return blank;
}

// event listener----------

// listen for keypress
document.addEventListener('keypress', (event) => {
    let keyNumber = event.keyCode;
    let keyLetter = String.fromCharCode(keyNumber);
    // if letter matches, put letter into blank array
    for (let i=0; i<randomWord.length; i++){
        // check for correct answers, replace underscore with correct letter
        if (keyLetter.toLowerCase() === randomWord.toLowerCase().charAt(i)) {
            blank.splice(i, 1,  keyLetter);
            console.log(blank);
            document.getElementById('myWord').innerHTML = blank.join(' ');
        } 
    //tried to make else statement for incorrect answers but then several of the same letter got pushed to wrongGuesses
    };
    // check for incorrect answers using indexOf which === -1 when no matches are found
    if (randomWord.toLowerCase().indexOf(keyLetter.toLowerCase()) === -1) {
        wrongGuesses.push(keyLetter);
        console.log(wrongGuesses);
        document.getElementById('wrongGuess').innerHTML = wrongGuesses.join(' ');
        
        // makes dragon ball images disappear when wrong answer is guessed
        for ( let i=0; i < dragonBallImages.length; i ++) {
            dragonBallImages[i].classList.add("opacityZero");
            break;
            
            
          
        }
    };
    //when the player guesses the whole word correctly
    if (blank.join('') === randomWord.toLowerCase()) {
        console.log("You Win!")
        wins = wins + 1;
        document.getElementById('wins').innerHTML = wins;
        console.log(wins);
        // output the correct answer with first letter capitalized
        console.log(blank.join('').charAt(0).toUpperCase() + blank.slice(1).join(''));
    }
});

// function call----------

underscores()
document.getElementById('myWord').innerHTML = blank.join(' ');


