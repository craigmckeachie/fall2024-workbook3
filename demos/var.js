"use strict";
//Global
let first = "Timothy";

function printName() {
  //function  
  let first = "DeLeon";
  console.log(first);
  if(true){
    //block scope
    let first = "Ricardo"
    console.log(first);
  }
}
