/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const palos = ["❤️", "♠️", "☘️", "♦️"];

function getElementsRandom(array) {
  const numeroAleatorio = Math.floor(Math.random() * array.length);
  const elementoAleatorio = array[numeroAleatorio];
  return elementoAleatorio;
}

const palosRandom = getElementsRandom(palos);

const cardNumbers = document.querySelector("#cardnumber");
cardNumbers.innerHTML = getElementsRandom(number);

const cardPalos = document.querySelector("#palo");
cardPalos.innerHTML = palosRandom;

const palo2 = document.querySelector("#palo2");
palo2.innerHTML = palosRandom;
