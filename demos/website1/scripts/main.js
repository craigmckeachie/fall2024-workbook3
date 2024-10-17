// javascript goes here
"use strict";

let importantParagraph = document.getElementById("importantParagraph");
importantParagraph.style.backgroundColor = "yellow";
console.log(importantParagraph);

let bowlRadio = document.getElementById("bowlRadio");
let burritoRadio = document.getElementById("burritoRadio");
let placeOrderButton = document.getElementById("placeOrderButton");

function placeOrder() {
  if (bowlRadio.checked) {
    console.log("grab a bowl");
  } else if (burritoRadio.checked) {
    console.log("warm up a burrito");
  } else {
    console.log("you are one of those weird taco people, right");
  }
}

//event handling approach 2
// placeOrderButton.onclick = placeOrder;

//event handling approach 3
placeOrderButton.addEventListener("click", placeOrder);
