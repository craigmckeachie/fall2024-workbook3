"use strict";

const code1 = "ACME:123-L"; //the large (L) part 123 is supplied by ACME
const code2 = "DI:12345-M"; //the medium (M) part 12345 is supplied by DI
const code3 = "ACE:1-12"; //the size 12 part 1 is supplied by ACE

function getSupplier(code) {
  let positionOfColon = code.indexOf(":");
  let supplier = code.substring(0, positionOfColon);
  return supplier;
}

console.log(getSupplier(code1), getSupplier(code2), getSupplier(code3));

function getProductNumber(code) {
  let positionOfColon = code.indexOf(":");
  let positionOfHyphen = code.lastIndexOf("-");
  let productNumber = code.substring(positionOfColon + 1, positionOfHyphen);
  return productNumber;
}

// let productNumber = getProductNumber(code3);
// console.log(productNumber);

console.log(getProductNumber(code1), getProductNumber(code2), getProductNumber(code3));

function getSize(code) {
  let positionOfHyphen = code.lastIndexOf("-");
  let size = code.substring(positionOfHyphen + 1);
  return size;
}

// let size = getSize(code3);
// console.log(size);
console.log(getSize(code1), getSize(code2), getSize(code3));

console.log(`the (${getSize(code1)}) part ${getProductNumber(code1)} is supplied by ${getSupplier(code1)}`);
