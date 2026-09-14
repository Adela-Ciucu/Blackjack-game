let firstCard = 10;
let secondCard = 11;
let sumOfCards = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");


function startGame(){
    console.log("Start Game!")

    sumEl.textContent = "Sum: " + sumOfCards;

    if (sumOfCards <= 20){
    message = "Do you whant to draw a new card?";
    }else if (sumOfCards === 21){
        message = "You've got Blacjack!";
        hasBlackjack = true;
    }else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}