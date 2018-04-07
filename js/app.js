const deck = document.querySelector(".deck");

const cards = document.querySelectorAll(".card");

const classes = document.querySelectorAll(".card i");

// Function that shuffles elements

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function displayCard () {
    this.classList.toggle("open");
    this.classList.toggle("show");
}


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
}