var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var wins = 0;
var losses = 0; 
var guessLeft = 9;

var winsText = document.getElementById("win");
var lossesText = document.getElementById("loss");
var leftText = document.getElementById("left");
var userChoiceText = document.getElementById("far");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function (event){
    var userGuess = event.key;


    if (userGuess === computerGuess){
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessLeft = 9;
    }
    
    if (userGuess !== computerGuess){
        guessLeft--;
    }

    if (guessLeft === 0){
        losses++;
        guessLeft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftText.textContent = "Guesses Left: " + guessLeft;
    userChoiceText.textContent = "Your Guesses so Far: " + userGuess;
    
}