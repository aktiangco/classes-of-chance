class Casino {
    // Write code here
    constructor(name, timesPlayed) {
        this.name = name;
        this.timesPlayed = 0;
        //winnings = 0;
    }
    playGame(betAmount) {
        // increment times played
        this.timesPlayed += 1;
        //check if something is less <= .5
        // if less than log casino wins
        if (Math.random() <= 0.5) {
            console.log(this.name + ' wins :(')
        } else {
            // change to betAmount * (this.timePlayed + 1)
            let payout = betAmount * this.timesPlayed
            console.log(`you win $${payout}!!!!`)
        }
    }
}

let codeCasino = new Casino("Code Casino")

codeCasino.playGame(20);
codeCasino.playGame(20);
codeCasino.playGame(20);
codeCasino.playGame(20);



// TESTS
// const myCasino = new Casino("HackerU Casino");
// console.log(myCasino);
// myCasino.playGame(5);
// myCasino.playGame(15);
// myCasino.playGame(25);
// myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
