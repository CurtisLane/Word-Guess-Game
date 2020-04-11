// Variables----------

// array of words to guess
const words = ["Piccolo", "Gohan", "Goku", "Bulma","Vegeta", "Trunks", "Goten", "Krillin", "Tien", "Yamcha"]
// word chosen at random
let randomWord = random_word(words);

// let randomNumber = Math.floor(Math.random() * words.length);
// let randomWord = words[randomNumber];
console.log(randomWord);

// blank underscore to be filled by correct letters and wrong guesses
let blank = [];
let wrongGuesses = [];
let wins = 0;

// dragon ball images array
let dragonBallImages = [document.getElementById('oneStarBall'), document.getElementById('twoStarBall'), document.getElementById('threeStarBall'), document.getElementById('fourStarBall'), document.getElementById('fiveStarBall'), document.getElementById('sixStarBall'), document.getElementById('sevenStarBall'), ]; 




// Functions----------

// trying this randomizer from w3schools
function random_word(words)
{
  
return words[Math.floor(Math.random()*words.length)];
     
}

// make underscore for each letter of randomWord in index.html
let underscores = function()  {
    
    
    for(let i = 0; i < randomWord.length; i++) {
        blank.push('_');
    }
    return blank;
}

// event listener--------------------

// listen for keypress
document.addEventListener('keypress', (event) => {
    let keyNumber = event.keyCode;
    console.log(keyNumber);
    let keyLetter = String.fromCharCode(keyNumber);

    // validate input
    
    // remove message 
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

    console.log(keyLetter, wrongGuesses)
    console.log(randomWord.toLowerCase().indexOf(keyLetter.toLowerCase()))
    if(wrongGuesses.join('').toLowerCase().indexOf(keyLetter.toLowerCase())>=0){
        console.log("Already guesssed")
    } else

    // check for incorrect answers using indexOf which === -1 when no matches are found
    if (randomWord.toLowerCase().indexOf(keyLetter.toLowerCase()) === -1) {
        wrongGuesses.push(keyLetter);
        console.log(wrongGuesses);
        document.getElementById('wrongGuess').innerHTML = wrongGuesses.join(' ');
        
        // makes dragon ball images disappear when wrong answer is guessed
        for ( let i=0; i < wrongGuesses.length ; i++ ) {
            dragonBallImages[i].classList.add("opacityZero");          
        } 
    } 



    //the player wins after guessing all the correct letters and gets a message then it resets
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
        // document.getElementById('myWord').innerHTML = '';
        document.getElementById('myWord').innerHTML = blank.join(' ');

        // gives answer in the console
        // console.log(randomWord);

    
    
    }
    // the player loses after 7 tries and gets a message
    if (wrongGuesses.join('').length === 7){
        document.getElementById('message').innerHTML = "You Lose! Frieza has the Dragon Balls and Krillin died again.."
        
    }

});

// function call----------

underscores(blank);
document.getElementById('myWord').innerHTML = blank.join(' ');

// event listener for touch on cell phone to bring up keyboard
// document.addEventListener("touchstart", touchHandler);

function ifTouch(event) {
    var x = event.touches;
    if (x) {
        alert("touch detected")
    }
}
