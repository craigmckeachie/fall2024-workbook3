"use strict";

// function addNumbers(num1, num2) {
//   let sum = num1 + num2;
//   //   console.log(num1, "+", num2, "=", sum);
//   console.log(num1 + " + " + num2 + " = " + sum);
// }

// addNumbers(7, 2);

function displayReceipt(totalDue, amountPaid) {
  console.log("Total Due: " + totalDue);
  console.log("Amount Paid: " + amountPaid);
  let changeDue = amountPaid - totalDue;

  if (changeDue < 0) {
    let amountDue = Math.abs(changeDue);
    console.log("You are short, please pay " + amountDue + " more.");
  } else {
    console.log("Change Due: " + changeDue.toFixed(2));
  }
}

displayReceipt(93.17, 100);
console.log("-------------");
displayReceipt(100, 80);
