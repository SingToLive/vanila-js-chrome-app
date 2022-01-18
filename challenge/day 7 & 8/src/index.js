const Play = document.getElementById("play");
const mN = document.querySelector(".maxNum");
const gN = document.querySelector(".guessNum");
const mNInput = document.querySelector(".maxNum input");
const gNInput = document.querySelector(".guessNum input");
const Choose = document.querySelector(".choose");
const Result = document.querySelector(".result");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getResult(randNum, myNum) {
  Choose.innerText = `You choose: ${myNum}, the machine choose ${randNum}.`;
  myNum = parseInt(myNum);
  if (myNum === randNum) {
    Result.innerText = "You won!";
  } else if (myNum > randNum || myNum < 0) {
    const maxNumVal = mNInput.value;
    Result.innerText = `Out of Range. Guess Number ${myNum} is bigger than Max Number ${maxNumVal}!`;
  } else {
    Result.innerText = "You lost!";
  }
}

function onSubmit(event) {
  event.preventDefault();
  const maxNumVal = mNInput.value;
  const guessNumVal = gNInput.value;
  localStorage.setItem("maxNumber", maxNumVal);
  localStorage.setItem("guseeNumber", guessNumVal);
  const answerNum = rand(0, maxNumVal);
  getResult(answerNum, guessNumVal);
}

gN.addEventListener("submit", onSubmit);
