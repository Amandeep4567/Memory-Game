"use strict";

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const guessOutput = document.querySelector("#guess");
const totalAttempt = document.querySelector("#attempt");
const storeAttempt = document.querySelector("#attain");
const tryAgain = document.querySelector("#again");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let attempt = 0;
let attain = 0;

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    console.log(card);
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(cards);
  console.log("check for match");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    // alert("You have clicked the same image!");
    guessOutput.textContent = "You have clicked the same image!🥲";
    attempt++;
  } else if (cardsChosen[0] == cardsChosen[1]) {
    // alert("You found a match");
    guessOutput.textContent = "Hurrah! found a match!😊";
    attempt++;
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    // alert("Sorry try again!");
    guessOutput.textContent = "Opps! try again!😢";
    attempt++;
  }
  totalAttempt.textContent = attempt;
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all!🥳";
    attain = attempt;
    storeAttempt.textContent = attain;
    totalAttempt.textContent = "0";
    console.log(attain);
    // totalAttempt.textContent = "0";
  }

  if (attempt >= 14) {
    setTimeout("window.location.reload()", 3000);
    guessOutput.textContent = "Maximum attempt completed";
  }
}

function flipCard() {
  // console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  // console.log(cardArray[cardId].name);
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  // console.log("clicked", cardId);
  // console.log(cardChosen);
  // console.log(cardChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

tryAgain.addEventListener("click", function () {
  totalAttempt.textContent = "0";
  location.reload();
});
