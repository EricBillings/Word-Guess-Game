

const acctWords = ["profit", "asset", "revenue", "equity"];
let guessRecord = [];
let i = 0;
let gameWord;



/*NOT WORKING
let gameWord = (acctWords.indexOf[1]);*/

$("#random-button").on("click", function () {


    gameWord = acctWords[i];
    console.log(gameWord);
    letterArray = gameWord.split("");


    document.onkeyup = function (event) {
        const userGuess = event.key;

        if (guessRecord.includes(userGuess)) {
            alert("You already guessed that letter!");

        } else {

            guessRecord.push(userGuess);

            if (guessRecord.length < 16) {


                console.log(userGuess);
                console.log(guessRecord);
                console.log(guessRecord.length);
                console.log(gameWord);
                console.log(letterArray);


                

            }

        }

    }


});