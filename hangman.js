"use strict";

//fill in the answer array/dash with under scores
function start() {
    for (var i = 0; i < randomWord.length; i++)
    {
        answerArray[i] = "_";
    }
    //putting them in a string
    placeHolder = answerArray.join(" ");
    document.getElementById("answer").innerHTML = placeHolder;
    document.getElementById("maxWrong").innerHTML = maxWrong;
    document.getElementById("mistakes").innerHTML = incorrectAnswers;
}

function gettingLetter() {
    //getting the letter from the user that matches the randomly chosen word
    let letter = document.getElementById("letter").value;

    let weFindTheLetter = false;

    //verify that is not empty
    if (letter.length > 0) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                answerArray[i] = letter;
                weFindTheLetter = true;
                correctAnswers++;
            }
        }
    }
    if (weFindTheLetter === false) {
        incorrectAnswers++;
        let newSrc = incorrectAnswers + ".jpg";
        //document.getElementById("hangImage").src = newSrc;
        document.getElementById("hangImage").src = incorrectAnswers + ".jpg";
    }
                                //wrong guesses
    document.getElementById("mistakes").innerHTML = incorrectAnswers;
    document.getElementById("answer").innerHTML = answerArray.join(" ");

    //exhausting maximum chances
    if (incorrectAnswers >= maxWrong) {
        document.getElementById("stat").innerHTML = "You lost!";
    } else if (correctAnswers == randomWord.length) {
        document.getElementById("stat").innerHTML = "You won! Well done!";
    }
    document.getElementById("letter").value = "";
}

function resetFunction() {
    console.log("Function is running");
    randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    incorrectAnswers = 0;
    correctAnswers = 0;
    answerArray = [];
    document.getElementById("hangImage").src = "0.jpg";
    document.getElementById("letter").value = "";
    start();
}
var randomWordArr = [
    "javascript",
    "java",
    "python",
    "csharp",
    "ruby",
    "php",
    "pascal",
    "fortran",
    "perl",
    "lisp",
    "scheme",

];

//choosing a random word
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

//global variables
var placeHolder;
var correctAnswers = 0;
var incorrectAnswers = 0;
var maxWrong = 7;
//empty array to store the guesses
var answerArray = [];