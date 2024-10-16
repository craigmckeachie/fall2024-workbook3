"use strict";

// F to C formula: °C = (°F - 32) × 5/9
function convertFtoC(f) {
  let c = ((f - 32) * 5) / 9;
  return c;
}

let currentFahrenheitTemp = 92;
let celsiusTemp = convertFtoC(currentFahrenheitTemp);
console.log(celsiusTemp);

