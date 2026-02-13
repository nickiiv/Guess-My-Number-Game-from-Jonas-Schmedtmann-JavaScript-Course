'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let record = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const geuss = Number(document.querySelector('.guess').value);
    console.log(typeof geuss, geuss);
    //when there is no input
    if (!geuss) {
        displayMessage('⛔️ No Number!');
        //when player wins
    } else if (geuss === secretNumber) {
        displayMessage('🏆 Correct Number!');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //When geuss is wrong 
    } else if (geuss !== secretNumber) {
        if (score > 1) {
            displayMessage(geuss > secretNumber ? '📈Too high!' : '📉Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
        }

    }

});

///////////////////////////////////////////////////////////////
// Coding Challenge #1

/* Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial valeus of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width 15rem
*/

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start geussing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});

