"use strict";
let amount = 20;
let message1 = "The amount you owe is " + amount + " dollars.";
console.log(message1);

let message2 = `The amount you owe is ${amount} dollars.`;
console.log(message2);

let snackFood = "Pop Tarts";
let timeOfDay = "evening";

let message3OldStyle = "A healthy snack to have is " + snackFood + " every " + timeOfDay + "!";
let message3 = `A healthy snack to have is ${snackFood} every ${timeOfDay}!`;
console.log(message3OldStyle);

console.log(message3);

// use backticks ` `
//use ${variable_name}
