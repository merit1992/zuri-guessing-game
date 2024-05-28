const numberInput = document.getElementById("number");
const btnGuess = document.getElementById("btn-guess");
const resultRender = document.getElementById("div-result");
const start = document.getElementById("start");
const form = document.querySelector(".form");
const numberOfGuesses = document.getElementById("number-guess");
const container = document.querySelector(".container");
const displayHurray = document.querySelector(".display");
const startOver = document.getElementById("start-again");

let guesses = 3;

const randNum = Math.floor(Math.random() * 100) + 1;

start.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("hidden");
  start.classList.add("hidden");
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkNumber();
    numberInput.value = "";
  }
});

btnGuess.addEventListener("click", (e) => {
  e.preventDefault();
  checkNumber();
  numberInput.value = "";
});

const checkNumber = () => {
  if (parseInt(numberInput.value) <= 0) {
    alert("Number cannot be less that 1");
  } else if (parseInt(numberInput.value) >= 101) {
    alert("Number cannot be bigger than 100");
  } else if (parseInt(numberInput.value) === "") {
    console.log("field is required");
  } else {
    isInputRandom();
  }
};

const countGueses = () => {
  guesses -= 1;
  numberOfGuesses.textContent = `Number of guesses remain ${guesses}`;
  if (guesses < 1) {
    numberOfGuesses.textContent = "You've run out of guesses";
    resultRender.textContent = "";
    location.reload();
  }
};

const isInputRandom = () => {
  if (parseInt(numberInput.value) >= randNum + 1) {
    resultRender.textContent =
      "Ops! Your guess is greater than the random number";
    countGueses();
  } else if (parseInt(numberInput.value) <= randNum - 1) {
    resultRender.textContent =
      "Ops! Your guess is smaller than the random number";
    countGueses();
  } else {
    resultRender.textContent = "";
    container.classList.add("hidden");
    displayHurray.classList.remove("hidden");
  }
  startOver.addEventListener("click", () => {
    location.reload();
  });
};
