"use strict";

//get html elements into variables
let daysInput = document.getElementById("daysInput");
let pickupDateInput = document.getElementById("pickupDateInput");
let tollCheckbox = document.getElementById("tollCheckbox");
// let daysInput = {
//   type: "number",
//   id: "daysInput",
//   min: 1,
//   value: "",
// };

function estimateCost() {
  //get values out of html input element
  let numberOfDays = daysInput.value;
  let pickupDate = pickupDateInput.value;
  let toll = tollCheckbox.checked;
  console.log(numberOfDays);
  console.log(pickupDate);
  console.log(toll);
}
