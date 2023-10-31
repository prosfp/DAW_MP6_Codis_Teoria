// Tipus de dades

// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// Undefined
let client;
console.log(client);

// Boolean
const descompte = false; //o true

// Number

const num1 = 20.2;
const num2 = 30;
const num3 = -100;
const numBinari = 0b1010;
const numBinari2 = 0b0101;

const numBinariSum = numBinari + numBinari2;
console.log(numBinariSum);

const num4 = "123";

console.log(typeof num4);

const nouNum = Number(num4);
console.log(nouNum, num4);

// No existeixent fraccions, absoluts, integers... tot és "number"

// Null
const descompte2 = null;

// Symbol - Son únics encara que tinguin el mateix valor
const primerSymbol = Symbol(30);
const segonSymbol = Symbol(30);
console.log(primerSymbol === segonSymbol);
console.log(primerSymbol);
