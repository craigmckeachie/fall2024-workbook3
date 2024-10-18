"use strict";

//get html elements into variables
let daysInput = document.getElementById("daysInput");
let pickupDateInput = document.getElementById("pickupDateInput");
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
  console.log(numberOfDays);
  console.log(pickupDate);
  
}
