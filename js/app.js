const classes = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-bomb", "fa-leaf", "fa-bomb", "fa-bolt", "fa-bicycle", "fa-paper-plane-o", "fa-cube"];

const deck = document.querySelector(".deck");
let cards = document.querySelectorAll(".card");
let openedCards = [];
let matchCards = [];
let movesCounter = 0;
const starCounter = document.querySelector(".stars");
const stars = starCounter.querySelectorAll("li");
const restartBtn = document.querySelector(".restart");
const len = openedCards.length;


// Function that shuffles elements

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Assign symbol to card

window.onload = assignSymbolToCard(cards);

function assignSymbolToCard(array) {
    let shuffledCards = shuffle(classes);
    for (let i = 0; i < shuffledCards.length; i++) {
        cards[i].firstElementChild.classList.add("fa");
        cards[i].firstElementChild.classList.add(shuffledCards[i]);
    }
}

// Add display classes to clicked cards

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    addToOpenCardList(this);
}

// Add to open list

function addToOpenCardList(item) {
    openedCards.push(item);
    matchControl(openedCards);
}

// Control if cards match

function matchControl(array) {
    if (openedCards.length === 2 && openedCards[0].innerHTML === openedCards[1].innerHTML) {
        match(openedCards);
    } else if (openedCards.length === 2 && (openedCards[0].innerHTML !== openedCards[1].innerHTML)) {
        noMatch(array);

    }
}

// Add classes when cards match

function match(array) {
    array[0].classList.add("match");
    array[1].classList.add("match");
    openedCards = [];
    matchCards.push(array[0])
    matchCards.push(array[1]);
}

// Remove classes when cards don't match

function noMatch(array) {
    openedCards[0].classList.remove("open", "show");
    openedCards[1].classList.remove("open", "show");

}

// Restart button

function restartGame(e) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("show", "open");
        cards[i].firstElementChild.classList = "";
    }
    assignSymbolToCard(cards);
}

restartBtn.addEventListener("click", restartGame);

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
};