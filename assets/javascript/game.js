
// Initialize variables
var remainingGuesses = 0;
var lettersGuessed = [];


var userTextWord = document.getElementById("word");
var userTextGuess = document.getElementById("guessLeft");
var userTextLetters = document.getElementById("letters");
var hiddenText = document.getElementById("hidden");
        


// Word bank of possible words to guess from
var words = ["wesley", "buttercup", "inigo", "inconcievable", "giant", "fezzik", "black", "humperdink",
                "vizzini", "peanut", "montoya", "die", "revenge", "love", "wish"];


// randomly pick an index from the word array and set to the variable pickedWord


var pickedWord = words[Math.floor(Math.random() * words.length)];
//console.log(pickedWord);

// Set number of guesses to the amount of letters in the selected word
remainingGuesses = pickedWord.length + 2;
userTextGuess.textContent = remainingGuesses;


// create an array with "-" for the number of characters in the picked word
var answerArray = [];
 for (var i = 0; i < pickedWord.length; i++) {
 answerArray[i] = "_";
}
// display word to be guessed with --- on the screen

userTextWord.textContent = answerArray.join(" ");



    
function resetGame(){

    
    lettersGuessed = [];
    pickedWord = words[Math.floor(Math.random() * words.length)];

    //console.log(pickedWord);

    remainingGuesses = pickedWord.length + 2;
    userTextGuess.textContent = remainingGuesses;
    userTextLetters.textContent = lettersGuessed;

    answerArray = [];
    for (var i = 0; i < pickedWord.length; i++) {
        answerArray[i] = "_";
    }
    userTextWord.textContent = answerArray.join(" ");
    hiddenText.textContent = "";

    }


    // When a player pushes a key, store that in a variable, and check if it is in the pickedWord
    document.onkeyup = function(event){
        
        var letter = event.key;
        
    //decrement remaining guesses only if new letter is guessed

            if (lettersGuessed.indexOf(letter) === -1){
                lettersGuessed.push(letter);
                remainingGuesses--;

          }   
    //check if guessed letter is in selected word.  Display on screen updated results.

        for(var l = 0; l < pickedWord.length; l++){
            
            if(letter === pickedWord[l]){
                answerArray.splice(l, 1, letter);
                
                userTextWord.textContent = answerArray.join(" ");
                console.log(answerArray.join(" "));
            
            }          
        }
                userTextWord.textContent = answerArray.join(" ");
                userTextGuess.textContent = remainingGuesses;

                let unique = [...new Set(lettersGuessed)];
                userTextLetters.textContent = unique.join(" ");

    //Lose game if no guesses left and answerArray still not full of letters

        if (remainingGuesses === 0 && answerArray.includes("_") === true){
            

            var audio = new Audio('assets/images/boo.mp3');
            audio.play();
            
            hiddenText.innerHTML = "You Lost! <br> The word you were trying to guess was: "+ pickedWord;
           
            setTimeout(resetGame, 7000);
           
        }
    //win game if answerArray no longer has blanks
        else if(answerArray.includes("_") === false){
            
            
            userTextWord.textContent = answerArray.join(" ");
            

            var audio = new Audio('assets/images/inconceivable.mp3');
            audio.play();
            
            hiddenText.innerHTML = "You Won! <br> ---New Game Starting---";
            
             setTimeout(resetGame, 5000);
            
        }
            

    }







