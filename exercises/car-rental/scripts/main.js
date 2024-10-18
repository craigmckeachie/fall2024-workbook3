"use strict";

//get html elements into variables
let pickupDateInput = document.getElementById("pickupDateInput");
let daysInput = document.getElementById("daysInput");

let tollCheckbox = document.getElementById("tollCheckbox");
let gpsCheckbox = document.getElementById("gpsCheckbox");
let roadsideCheckbox = document.getElementById("roadsideCheckbox");

let under25YesRadio = document.getElementById("under25YesRadio");
let under25NoRadio = document.getElementById("under25NoRadio");

let carRentalCostSpan = document.getElementById("carRentalCostSpan");
let optionsCostSpan = document.getElementById("optionsCostSpan");
let under25SurchargeCostSpan = document.getElementById("under25SurchargeCostSpan");
let totalCostSpan = document.getElementById("totalCostSpan");

function estimateCost() {
  //get values out of html input element
  let numberOfDays = Number(daysInput.value);
  let pickupDate = pickupDateInput.value;

  let toll = tollCheckbox.checked;
  let gps = gpsCheckbox.checked;
  let roadside = roadsideCheckbox.checked;
  let under25 = under25YesRadio.checked;

  let carRentalCost = 0;
  let optionsCost = 0;
  let under25Cost = 0;
  let totalCost = 0;

  carRentalCost = numberOfDays * 29.99;
  carRentalCostSpan.innerText = carRentalCost;

  if (toll) {
    optionsCost = optionsCost + 3.95 * numberOfDays;
  }
  if (gps) {
    optionsCost = optionsCost + 2.95 * numberOfDays;
  }
  if (roadside) {
    optionsCost = optionsCost + 2.95 * numberOfDays;
  }

  optionsCostSpan.innerText = optionsCost.toFixed(2);

  if (under25) {
    under25Cost = carRentalCost * 0.3;
    under25SurchargeCostSpan.innerText = under25Cost.toFixed(2);
  }

  totalCost = carRentalCost + optionsCost + under25Cost;
  totalCostSpan.innerText = totalCost.toFixed(2);
}
