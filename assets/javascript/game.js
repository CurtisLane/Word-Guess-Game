// array of words to guess
const words = ["Piccolo", "Gohan", "Goku", "Bulma","Vegeta", "Trunks", "Goten", "Krillin", "Tien", "Yamcha"]

// chose word from words array at random using function, assign to variable, log to console
let randomWord = random_word(words);
console.log(randomWord);

// empty arrays and zero wins to begin game
let blank = [];
let wrongGuesses = [];
let wins = 0;

// dragon ball images array
let dragonBallImages = [document.getElementById('oneStarBall'), document.getElementById('twoStarBall'), document.getElementById('threeStarBall'), document.getElementById('fourStarBall'), document.getElementById('fiveStarBall'), document.getElementById('sixStarBall'), document.getElementById('sevenStarBall'), ]; 

// function creates random word
function random_word(words)
{
    return words[Math.floor(Math.random()*words.length)];   
}

// make underscore for each letter of randomWord, push to "blank" array
let underscores = function()  {
    for(let i = 0; i < randomWord.length; i++) {
        blank.push('_');
    }
    return blank;
}

// listen for user keypress
document.onkeyup = function(event) {
    let keyNumber = event.keyCode;
    let keyLetter = event.key;

    // remove message to user
    document.getElementById('message').innerHTML = "";

    // if letter matches, put letter into blank array
    for (let i=0; i<randomWord.length; i++){
        
        // check for correct answers, replace underscore with correct letter
        if (keyLetter.toLowerCase() === randomWord.toLowerCase().charAt(i)) {
            blank.splice(i, 1,  keyLetter);
            console.log(blank);
            document.getElementById('myWord').innerHTML = blank.join(' ');
        }
    };

    // log user key pressed and wrong guesses array 
    console.log(keyLetter, wrongGuesses)
    console.log(randomWord.toLowerCase().indexOf(keyLetter.toLowerCase()))

    //validate input to prevent duplicate wrong guesses
    if(wrongGuesses.join('').toLowerCase().indexOf(keyLetter.toLowerCase())>=0){
        console.log("Already guesssed")
    } else //continue below

        // check for incorrect answers using indexOf which === -1 when no matches are found
        if (randomWord.toLowerCase().indexOf(keyLetter.toLowerCase()) === -1) {
            wrongGuesses.push(keyLetter);
            console.log(wrongGuesses);
            document.getElementById('wrongGuess').innerHTML = wrongGuesses.join(' ');
            
            // makes dragon ball images disappear when wrong answer is guessed
            for ( let i=0; i < wrongGuesses.length ; i++ ) {
                if (i >= dragonBallImages.length){
                    event.preventDefault();
                } else {
                dragonBallImages[i].classList.add("opacityZero"); 
                }
            } 
    } 

    // player wins after guessing all correct letters, message to user is pushed to HTML
    if (blank.join('') === randomWord.toLowerCase()) {
        
        // keeps track of wins
        wins = wins + 1;
        
        // updates wins number displayed and shows a message
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('message').innerHTML = "Nice work, you've recovered the Dragon Balls. Can you guess this next one?"
        
        // resets the dragon ball images to full opacity after winning
        for (i=0; i<dragonBallImages.length; i++) {
            dragonBallImages[i].classList.remove("opacityZero");
            
        }
        
        // generates a new random word and reloads blank underscores, reset wrongGuesses array to empty
        randomWord = random_word(words);
        wrongGuesses = [];
        document.getElementById('wrongGuess').innerHTML = ''
        blank = [];
        underscores(blank);
        document.getElementById('myWord').innerHTML = blank.join(' ');
    }

    // the player loses after 7 tries, message to user pushed to HTML
    if (wrongGuesses.join('').length >= 7){
        
        // message to user
        document.getElementById('message').innerHTML = "You Lose! Frieza has the Dragon Balls and Krillin died again.. Press the spacebar to retry."
        
        document.onkeyup = null;

        // press spacebar to reload page after losing, copied from https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                location.reload();
            } else {
                e.preventDefault();
            }
        };
    };

};

// function call
underscores(blank);

// set up blank underscores on HTML page based on random word length
document.getElementById('myWord').innerHTML = blank.join(' ');