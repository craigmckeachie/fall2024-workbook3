"use strict";

const code1 = "ACME:123-L"; //the large (L) part 123 is supplied by ACME
const code2 = "DI:12345-M"; //the medium (M) part 12345 is supplied by DI
const code3 = "ACE:1-12"; //the size 12 part 1 is supplied by ACE

function getSupplier(code) {
  let positionOfColon = code.indexOf(":");
  let supplier = code.substring(0, positionOfColon);
  return supplier;
}

let supplier = getSupplier(code3);
console.log(supplier);

function getProductNumber(code) {}

function getSize(code) {}
