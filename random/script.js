const myButton = document.getElementById("myButton");
const label1 = document.getElementsById("label1");
const label2 = document.getElementsById("label2");

const min = 1;
const max = 10;
let randomNum1;
let randomNum2;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
};
