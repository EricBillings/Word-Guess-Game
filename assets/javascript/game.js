

const acctWords = ["profit", "asset", "revenue", "equity"];
let guessRecord = [];
let acctWordInd = -1;
let gameWord;



$("#random-button").on("click", function () {
    
    if (acctWordInd < acctWords.length) {
        
        acctWordInd++
        console.log(acctWordInd);


        let gameWord = acctWords[acctWordInd];
        console.log(gameWord);
        let letterArray = gameWord.split("");
        console.log(letterArray);
        let gameWordLen = letterArray.length;
        console.log(gameWordLen);
        let goodGuessCount = 0;

        document.onkeyup = function (event) {
            const userGuess = event.key;
            console.log(userGuess);

            if (guessRecord.includes(userGuess)) {
                alert("You already guessed that letter!");

            } else {

                guessRecord.push(userGuess);
                console.log(guessRecord);

                if (guessRecord.length < 16) {
                    console.log(guessRecord.length);

                    if (letterArray.includes(userGuess)) {
                        console.log("Good Choice");
                        goodGuessCount++;
                        console.log(goodGuessCount);
                        console.log(letterArray.length);
                        if (goodGuessCount === letterArray.length) {
                            console.log("WIN-NEXT WORD");
                        } else {
                            console.log("Try Again");
                        }

                    } else {
                        console.log("Bad Choice");
                    }

                } else {
                    console.log("Exceeded Max Attempts-Game Over");
                }


            }

        }


    } else {
        console.log("Game Over");
    }



});