

const acctWords = ["profit", "asset", "revenue", "equity"];
let guessRecord = [];


document.onkeyup = function (event) {
    const userGuess = event.key;

    if (guessRecord.includes(userGuess)) {
        alert("You already guessed that letter!");

    } else {

        guessRecord.push(userGuess);

        if (guessRecord.length < 16) {


            console.log(acctWords);
            console.log(userGuess);
            console.log(guessRecord);
            console.log(guessRecord.length);

        }

    }

};