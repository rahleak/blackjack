let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ""
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You got Blackjack!"
    hasBlackjack = true;
  } else {
    message = "Bust!!"
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function startGame() {
  renderGame();
}

function newCard() {
  let card = 4
  sum += card
  renderGame();
  cards.push(card)
  console.log(cards)
}

let sentence = ["Hello", "my", "name", "is", "Rahwa"]
let greetingEl = document.getElementById("greeting-el[[[")

