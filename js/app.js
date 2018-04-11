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
const playAgainBtn = document.querySelector(".playAgain");
const popup = document.querySelector(".popup");
const modal = document.querySelector(".modal");



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
//
window.onload = assignSymbolToCard(cards);

function assignSymbolToCard(array) {
    let shuffledCards = shuffle(classes);
    for (let i = 0; i < shuffledCards.length; i++) {
        cards[i].classList.add("fa");
        cards[i].classList.add(shuffledCards[i]);
    } 
}

//// Add display classes to clicked cards

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    addToOpenCardList(this);  
    }

// Add to open list and control the cards if there are 2 of them

function addToOpenCardList(card) {
    openedCards.push(card);
    if (openedCards.length == 2) {
    matchControl(openedCards);
    }
}

// Control if cards match

function matchControl(array) {
    if (openedCards[0].className == openedCards[1].className) {
        match(openedCards); 
    } else if (openedCards[0].className != openedCards[1].className) {
        noMatch(openedCards);
    }
}

// Add classes when cards match

function addingClasses(array) {
    array[0].classList.add("match");
    array[1].classList.add("match");
    openedCards = [];
}

// Controls if two carts matches

function match(array) {
    addingClasses(array);
    matchCards.push(array[0])
    matchCards.push(array[1]);
    openedCards = [];
}

// Remove classes when cards don't match

function removingClasses(array) {
    array[0].classList.remove("open");
    array[0].classList.remove("show");
    array[1].classList.remove("open"); 
    array[1].classList.remove("show"); 
    openedCards = []; 
}


function noMatch(array) {
    setTimeout(function () {removingClasses(array)}, 1000);
} 

// Restart button

function restartGame(e) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList = "card";
    }
    
  //  popup.style.display = "none";  POP UP!

    assignSymbolToCard(cards);
    
  
}

// Congratulations popup when user wins

function congrats() {
    if (matchCards.length === 16) {
        popup.style.display = "block";
    }
}

// Closing popup if user clicks anywhere else

window.addEventListener("click", function(e) {
    if (e.target === modal) {
 //       modal.style.display = "none";
    }
})


// Reseting the game with reset button

restartBtn.addEventListener("click", restartGame);

// Card click event listener

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
};

// Play again button on pop up window restarts the game

playAgainBtn.addEventListener("click", restartGame);

// Event to listen for the end of the game

window.addEventListener("click", congrats)