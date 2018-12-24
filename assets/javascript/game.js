
// Initialize variables
var remainingGuesses = 0;
var lettersGuessed = [];


var userTextWord = document.getElementById("word");
var userTextGuess = document.getElementById("guessLeft");
var userTextLetters = document.getElementById("letters");
        


// Word bank of possible words to guess from
var words = ["wesley", "buttercup", "inigo", "inconcievable", "giant", "fezzik", "black", "humperdink",
                "vizzini", "peanut", "montoya", "die", "revenge", "love", "wish"];


// randomly pick an index from the word array and set to the variable pickedWord


  var pickedWord = words[Math.floor(Math.random() * words.length)];
console.log(pickedWord);

// Set number of guesses to the amount of letters in the selected word
remainingGuesses = pickedWord.length + 2;
userTextGuess.textContent = remainingGuesses;


// create an array with "-" for the number of characters in the picked word
var answerArray = [];
 for (var i = 0; i < pickedWord.length; i++) {
 answerArray[i] = "_";
}
// display word to be guessed with --- on the screen
//  document.write("<h1>The word you are guessing is: " + answerArray.join(" ")+ "</h1>");
userTextWord.textContent = answerArray.join(" ");



    
function resetGame(){

    
    lettersGuessed = [];
    pickedWord = words[Math.floor(Math.random() * words.length)];

    console.log(pickedWord);

    remainingGuesses = pickedWord.length + 2;
    userTextGuess.textContent = remainingGuesses;
    userTextLetters.textContent = lettersGuessed;

    answerArray = [];
    for (var i = 0; i < pickedWord.length; i++) {
        answerArray[i] = "_";
    }
    userTextWord.textContent = answerArray.join(" ");
    }


    // When a player pushes a key, store that in a variable, and check if it is in the pickedWord
    document.onkeyup = function(event){
        
        var letter = event.key;
        
        
        lettersGuessed.push(letter);
        //remainingGuesses--;
        // for(var a =0; a<answerArray.length; a++){
            if (answerArray.indexOf(letter) === -1){
             remainingGuesses--;

          }
        // }
        
        
        

        for(var l = 0; l < pickedWord.length; l++){
            
            if(letter === pickedWord[l]){
                answerArray.splice(l, 1, letter);
                
                userTextWord.textContent = answerArray.join(" ");
                console.log(answerArray.join(" "));
            
            }          
        }

                let unique = [...new Set(lettersGuessed)];
                
                userTextWord.textContent = answerArray.join(" ");
                userTextGuess.textContent = remainingGuesses;
                userTextLetters.textContent = unique.join(" ");

        if (remainingGuesses === 0 && answerArray.includes("_") === true){
            

            var audio = new Audio('assets/images/inconceivable.mp3');
            audio.play();
             //alert("You Lost!! You were trying to guess " + pickedWord);
            // document.write("<h1>YOU LOST!!! You were trying to guess the word " + pickedWord  + "</h1>");
            
            setTimeout(resetGame, 2000);
            //resetGame();
        }

        else if(answerArray.includes("_") === false){
            
            // let unique = [...new Set(lettersGuessed)];
            userTextWord.textContent = answerArray.join(" ");
            // userTextGuess.textContent = remainingGuesses;
            //  userTextLetters.textContent = unique.join(" ");

            var audio = new Audio('assets/images/killed.mp3');
            audio.play();
            
            //alert("You Won! The word is " + pickedWord);


            
            setTimeout(alert("Winner! --- Starting new game!"), 15000);

             setTimeout(resetGame, 5000);
            // resetGame();
        }
            
        
        //make a unique array of guessed letters to display
        // let unique = [...new Set(lettersGuessed)];
        
        // // console.log(unique);
        // // console.log(lettersGuessed);
        // // console.log(remainingGuesses);
        
        

        // userTextWord.textContent = answerArray.join(" ");
        // userTextGuess.textContent = remainingGuesses;
        // userTextLetters.textContent = unique.join(" ");

    }







