// array of words to guess
const words = ["Piccolo", "Gohan", "Goku", "Bulma","Vegeta", "Trunks", "Goten", "Krillin", "Tien", "Yamcha"]
// word chosen at random
let randomNumber = Math.floor(Math.random() * words.length);
let randomWord = words[randomNumber];
// blank underscore
let blank = [];
console.log(randomWord);
// make underscore for each letter of randomWord in index.html
let underscores = function()  {
    for(let i = 0; i < randomWord.length; i++) {
        blank.push('_');
    }
    return blank;
}
console.log(underscores());

// listen for keypress
document.addEventListener('keypress', (event) => {
    let keyNumber = event.keyCode;
    let keyLetter = String.fromCharCode(keyNumber);
    console.log(keyLetter)
    if (keyLetter === randomWord.charAt(0)) {
        blank.splice(0, 0, keyLetter);
        console.log(blank);
    };

});






// I did a thing! Woo my first javascript!!!
document.addEventListener("keypress", function(){
  document.getElementById("firstLetter").innerHTML = "P";
});